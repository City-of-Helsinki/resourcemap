import get from 'lodash/get';

import DEFAULT_LOCALE from '../i18n';

function getLocalizedString(localizationObject, locale = DEFAULT_LOCALE) {
  if (!localizationObject) {
    return '';
  }

  const localizedString = get(localizationObject, locale, null);

  // If we do not find a localized string, we'll try to use the default
  // locale.
  if (localizedString === null) {
    return get(localizationObject, DEFAULT_LOCALE);
  }

  return localizedString;
}
export default getLocalizedString;
