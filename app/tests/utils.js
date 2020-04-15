import React from 'react';
import { render } from 'react-testing-library';
import { ThemeProvider } from 'styled-components';

import theme from 'theme';

// eslint-disable-next-line react/prop-types
const AllTheProviders = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from 'react-testing-library';

// override render method
export { customRender as render };
