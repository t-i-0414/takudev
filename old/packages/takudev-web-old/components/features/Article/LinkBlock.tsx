/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import Link from 'next/link';
import React from 'react';

export const LinkBlock = (props: any) => (
  <Link
    {...props}
    style={{
      display: 'inline-block',
      padding: '1rem',
    }}
  />
);
