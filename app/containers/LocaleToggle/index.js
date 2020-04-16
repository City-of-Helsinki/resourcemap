/*
 *
 * LanguageToggle
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { FormattedMessage } from 'react-intl';

import { Wrapper, LanguageList, LanguageOption } from './components';
import messages from './messages';
import { appLocales } from '../../i18n';
import { changeLocale } from '../LanguageProvider/actions';
import { makeSelectLocale } from '../LanguageProvider/selectors';

export function LocaleToggle({ currentLocale, onLocaleToggle }) {
  return (
    <Wrapper>
      <LanguageList>
        {appLocales
          .filter(locale => locale !== currentLocale)
          .map(locale => (
            <LanguageOption key={locale} onClick={() => onLocaleToggle(locale)}>
              <FormattedMessage {...messages[locale]} />
            </LanguageOption>
          ))}
      </LanguageList>
    </Wrapper>
  );
}

LocaleToggle.propTypes = {
  onLocaleToggle: PropTypes.func,
  currentLocale: PropTypes.string,
};

const mapStateToProps = createSelector(
  makeSelectLocale(),
  locale => ({
    currentLocale: locale,
  }),
);

export function mapDispatchToProps(dispatch) {
  return {
    onLocaleToggle: locale => dispatch(changeLocale(locale)),
    dispatch,
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LocaleToggle);
