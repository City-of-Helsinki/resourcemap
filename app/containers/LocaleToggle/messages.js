/*
 * LocaleToggle Messages
 *
 * This contains all the text for the LanguageToggle component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'containers.LocaleToggle';

export default defineMessages({
  en: {
    id: `${scope}.en`,
    defaultMessage: 'In English',
  },
  fi: {
    id: `${scope}.fi`,
    defaultMessage: 'Suomeksi',
  },
  sv: {
    id: `${scope}.sv`,
    defaultMessage: 'På svenska',
  },
});
