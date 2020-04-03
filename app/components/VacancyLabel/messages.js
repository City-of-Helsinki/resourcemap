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
  nonReservable: {
    id: `${scope}.nonReservable`,
    defaultMessage: 'Ei varattavissa',
  },
});
