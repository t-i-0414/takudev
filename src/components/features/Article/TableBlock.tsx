/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

export const TableBlock = (props: any) => (
  <div style={{ overflowX: 'scroll', width: '100%', scrollbarWidth: 'none' }}>
    <table {...props} />
  </div>
);
