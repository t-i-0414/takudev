/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import Image from 'next/image';
import React from 'react';

export const ImageBlock = (props: any) => (
  <Image
    {...props}
    src={props.src}
    alt={props.alt}
    priority
    width='0'
    height='0'
    sizes='(min-width: 768px) 100vw,
    (min-width: 1200px) 100vw,
    100vw'
    style={{
      width: '100%',
      maxWidth: '640px',
      height: '100%',
    }}
  />
);
