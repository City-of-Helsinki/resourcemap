import dateFormat from 'dateformat';

import getResourceOpeningHoursForDay from '../getResourceOpeningHoursForDay';

describe('getResourceOpeningHoursForDay helper', () => {
  test('should find opening hours for matching date', () => {
    const date = new Date(2017, 6, 7);
    const openingHours = [
      {
        date: dateFormat(date, 'yyyy-mm-dd'),
        start: '1',
        end: '2',
      },
    ];

    expect(getResourceOpeningHoursForDay(openingHours, date)).toEqual(
      openingHours[0],
    );
  });

  test('should return undefined if it does not find a matching date', () => {
    const date = new Date(2017, 6, 8);
    const openingHours = [
      {
        date: dateFormat(new Date(2017, 6, 7), 'yyyy-mm-dd'),
        start: '1',
        end: '2',
      },
    ];

    expect(getResourceOpeningHoursForDay(openingHours, date)).toEqual(
      undefined,
    );
  });
});
