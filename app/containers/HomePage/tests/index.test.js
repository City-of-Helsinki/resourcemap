/**
 * Test the HomePage
 */

import React from 'react';
import { render } from 'tests/utils';
import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router-dom';

import { HomePage, mapDispatchToProps } from '../index';
import configureStore from '../../../configureStore';

describe('<HomePage />', () => {
  let store;

  beforeAll(() => {
    store = configureStore({}, browserHistory);
  });

  it('should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(
      <Provider store={store}>
        <IntlProvider locale="en">
          <HomePage handleLoadResource={() => {}} />
        </IntlProvider>
      </Provider>,
    );
    expect(firstChild).toMatchSnapshot();
  });

  it('should fetch resource on mount', () => {
    const handleLoadResourceSpy = jest.fn();
    render(
      <Provider store={store}>
        <IntlProvider locale="en">
          <HomePage handleLoadResource={handleLoadResourceSpy} />
        </IntlProvider>
      </Provider>,
    );
    expect(handleLoadResourceSpy).toHaveBeenCalled();
  });

  describe('mapDispatchToProps', () => {
    describe('handleLoadResource', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.handleLoadResource).toBeDefined();
      });
    });
  });
});
