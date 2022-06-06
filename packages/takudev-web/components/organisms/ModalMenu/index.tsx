import React, { useRef, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import { MODAL_MENU_ROOT_ELEMENT_ID } from '~/consts';

const ModalContent: React.FC = () => (
  <div
    style={{
      position: 'fixed',
      zIndex: 10,
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
    }}
  >
    <p>ModalContent</p>
  </div>
);

export const ModalMenu: React.FC = () => {
  const ref = useRef<Element | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = document.querySelector(`#${MODAL_MENU_ROOT_ELEMENT_ID}`);
    setMounted(true);
  }, []);

  return mounted
    ? ReactDOM.createPortal(<ModalContent />, ref.current as HTMLElement)
    : null;
};
