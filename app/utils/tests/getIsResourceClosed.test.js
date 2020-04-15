import getIsResourceClosed from '../getIsResourceClosed';

const getMockResource = openingHour => ({
  opening_hours: [
    {
      date: '2017-07-07',
      opens: null,
      closes: null,
      ...openingHour,
    },
  ],
});
const mockOpeningHourDate = new Date('2017-07-07T14:00+0300');

describe('getIsResourceClosed', () => {
  test('should return true when opening time are null', () => {
    expect(getIsResourceClosed(getMockResource(), mockOpeningHourDate)).toEqual(
      true,
    );
  });

  test('should return true when checked time is before or after closing hours', () => {
    const mockResource = getMockResource({
      opens: '2017-07-07T09:00+0300',
      closes: '2017-07-07T17:00+0300',
    });
    const beforeOpeningTime = new Date('2017-07-07T08:00+0300');
    const afterClosingTime = new Date('2017-07-07T18:00+0300');

    expect(getIsResourceClosed(mockResource, beforeOpeningTime)).toEqual(true);
    expect(getIsResourceClosed(mockResource, afterClosingTime)).toEqual(true);
  });

  test('should return false otherwise', () => {
    expect(
      getIsResourceClosed(
        getMockResource({ opens: '2017-07-07T12:00' }),
        mockOpeningHourDate,
      ),
    ).toEqual(false);
    expect(
      getIsResourceClosed(
        getMockResource({ closes: '2017-07-07T12:00' }),
        mockOpeningHourDate,
      ),
    ).toEqual(false);
    expect(
      getIsResourceClosed(
        getMockResource({ closes: undefined, opens: undefined }),
        mockOpeningHourDate,
      ),
    ).toEqual(false);
  });
});
