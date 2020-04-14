import { defineMessages } from 'react-intl';

const scope = 'components.Tooltip';

export default defineMessages({
  reservableStatusLabel: {
    id: `${scope}.reservableStatusLabel`,
    defaultMessage: 'varattavissa',
  },
  notReservableStatusLabel: {
    id: `${scope}.notReservableStatusLabel`,
    defaultMessage: 'Ei varattavissa',
  },
  reservationStatusLabel: {
    id: `${scope}.reservationStatusLabel`,
    defaultMessage: 'Varaustilanne',
  },
});
