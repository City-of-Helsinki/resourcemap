/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import styled from 'styled-components';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { makeSelectLoading, makeSelectError } from 'containers/App/selectors';

import Container from 'components/Container';
import H2 from 'components/H2';
import Section from './Section';
import messages from './messages';
import reducer from './reducer';
import saga from './saga';
import { loadResource } from './actions';

/* eslint-disable react/prefer-stateless-function */
export class HomePage extends React.PureComponent {
  componentDidMount() {
    // Load resources.
    this.props.loadResource();

    // Update resource in every ten minutes.
    setInterval(() => {
      this.props.loadResource();
    }, 10 * 60 * 1000);
  }

  render() {
    const Article = styled.article`
      width: 100%;
      display: flex;
      height: 100vh;
    `;
    const { loading, error } = this.props;
    const reposListProps = {
      loading,
      error,
    };

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
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
};

const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

export function mapDispatchToProps(dispatch) {
  return {
    loadResource: () => dispatch(loadResource()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HomePage);
