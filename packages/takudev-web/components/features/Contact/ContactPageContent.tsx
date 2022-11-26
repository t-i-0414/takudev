import React from 'react';
import isEqual from 'react-fast-compare';

export const ContactPageContent: React.FC = React.memo(
  () => <div>hello</div>,
  isEqual,
);
ContactPageContent.displayName = 'ContactPageContent';
