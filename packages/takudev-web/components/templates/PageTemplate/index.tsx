import React, { useEffect } from 'react';
import isEqual from 'react-fast-compare';
import { throttle } from 'throttle-debounce';

import { PageHeader } from '~/components/organisms';

import styles from './PageTemplate.module.scss';
import { usePageTemplate } from './usePageTemplate';

type Props = {
  children: React.ReactNode;
  hasHeader?: boolean;
  hasFooter?: boolean;
};
export const PageTemplate: React.FC<Props> = React.memo(
  ({ children, hasHeader = true, hasFooter = true }: Props) => {
    const { handleCustomVh, handleViewPort } = usePageTemplate();

    useEffect(() => {
      handleCustomVh();
      handleViewPort();

      const throttledHandleCustomVhVariable = throttle(16, handleCustomVh);
      const throttledHandleViewPort = throttle(16, handleViewPort);

      window.addEventListener('resize', throttledHandleCustomVhVariable);
      window.addEventListener('resize', throttledHandleViewPort);

      return () => {
        window.removeEventListener('resize', throttledHandleCustomVhVariable);
        window.removeEventListener('resize', throttledHandleViewPort);
      };
    }, [handleCustomVh, handleViewPort]);

    return (
      <div className={styles.wrapper}>
        {hasHeader && <PageHeader />}
        <main className={styles.main}>{children}</main>
        {hasFooter && <footer className={styles.footer}>footer</footer>}
      </div>
    );
  },
  isEqual,
);
PageTemplate.displayName = 'PageTemplate';
