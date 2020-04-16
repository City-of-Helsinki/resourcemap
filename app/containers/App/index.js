/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled, { ThemeProvider } from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import theme from 'theme';
import HomePage from 'containers/HomePage';
import GlobalStyle from '../../global-styles';

const AppWrapper = styled.div`
  display: flex;
  min-height: 100%;
  flex-direction: column;
`;

export default function App() {
  return (
    // I am applying the theme here as to retain the root index file
    // as close to react-boilerplate's original as possible. It'll be
    // easier to keep up to date--and it has a lot of react-boilerplate
    // configuration within it.
    <ThemeProvider theme={theme}>
      <AppWrapper>
        <Helmet titleTemplate="%s - Oodi kirjasto" defaultTitle="Oodi kirjasto">
          <meta name="description" content="Oodi kirjasto" />
        </Helmet>
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
        <GlobalStyle />
      </AppWrapper>
    </ThemeProvider>
  );
}
