import { defineMessages } from 'react-intl';

const scope = 'components.VacancyLabel';

export default defineMessages({
  available: {
    id: `${scope}.available`,
    defaultMessage: 'Vapaa',
  },
  taken: {
    id: `${scope}.taken`,
    defaultMessage: 'Varattu',
  },
  closed: {
    id: `${scope}.closed`,
    defaultMessage: 'Suljettu',
  },
  noData: {
    id: `${scope}.noData`,
    defaultMessage: 'Tietoja saatavuudesta ei löydetty',
  },
  unknown: {
    id: `${scope}.unknown`,
    defaultMessage: 'Saatavuutta ei osattu määrittää',
  },
  notReservable: {
    id: `${scope}.notReservable`,
    defaultMessage: 'Ei varattavissa',
  },
});
