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
  availableUntilTimeLabel: {
    id: `${scope}.availableUntilTimeLabel`,
    defaultMessage: 'Tila on vapaana {time} asti',
  },
  nextAvailableTimeLabel: {
    id: `${scope}.nextAvailableTimeLabel`,
    defaultMessage: 'Tila on varattu {time} asti',
  },
  groupRoomOneSpecialLabel: {
    id: `${scope}.groupRoomOneSpecialLabel`,
    defaultMessage: ', vapautuu klo {time}',
  },
});
