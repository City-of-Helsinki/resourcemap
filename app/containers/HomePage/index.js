/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import styled from 'styled-components';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import Container from 'components/Container';
import { loadResource } from './actions';
import reducer from './reducer';
import saga from './saga';

const key = 'home';

const Article = styled.article`
  width: 100%;
  display: flex;
  height: 100vh;
`;

export function HomePage({ handleLoadResource }) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {
    handleLoadResource();

    const id = setInterval(() => {
      handleLoadResource();
    }, 10 * 60 * 1000);

    return () => clearInterval(id);
  }, []);

  return (
    <Article>
      <Helmet>
        <title>Map</title>
        <meta name="description" content="" />
      </Helmet>
      <Container />
    </Article>
  );
}

HomePage.propTypes = {
  handleLoadResource: PropTypes.func.isRequired,
};

export function mapDispatchToProps(dispatch) {
  return {
    handleLoadResource: () => dispatch(loadResource()),
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(HomePage);
