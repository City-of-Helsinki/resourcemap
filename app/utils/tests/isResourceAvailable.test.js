import isResourceAvailable from '../isResourceAvailable';

describe('isResourceAvailable', () => {
  const testResource = {
    reservations: [
      {
        begin: '2017-07-07T17:07+02:00',
        end: '2017-07-07T18:07+02:00',
      },
    ],
  };
  const freeTime = new Date('2017-07-07T15:07+02:00');
  const takenTime = new Date('2017-07-07T17:27+02:00');

  test('should return true when no reservations takes place during the given time', () => {
    expect(isResourceAvailable(freeTime, testResource)).toEqual(true);
  });

  test('should return false when a reservation is ongoing during the given time', () => {
    expect(isResourceAvailable(takenTime, testResource)).toEqual(false);
  });
});
