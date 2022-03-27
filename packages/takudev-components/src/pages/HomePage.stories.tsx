import React from 'react';

import { HomePage } from './HomePage';

export default {
  title: 'Pages/HomePage',
  component: HomePage,
};

export const Light = () => <HomePage hrefToHome='#' initialColorMode='light' />;

export const Dark = () => <HomePage hrefToHome='#' initialColorMode='dark' />;
