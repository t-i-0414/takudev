import React, { useEffect } from 'react';
import isEqual from 'react-fast-compare';
import { throttle } from 'throttle-debounce';

import styles from './PageTemplate.module.scss';
import { usePageTemplate } from './usePageTemplate';

import { PageHeader, PageFooter } from '~/components/organisms';

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
        {hasHeader && (
          <>
            <div className={styles['header-container']}>
              <PageHeader />
            </div>
            <div className={styles['header-gap']} />
          </>
        )}
        <main className={styles.main}>{children}</main>
        {hasFooter && <PageFooter />}
      </div>
    );
  },
  isEqual,
);
PageTemplate.displayName = 'PageTemplate';
