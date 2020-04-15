import {
  getClosestAvailableSlot,
  getNextReservedSlot,
  getSlotSizeInTime,
  getSlots,
  findTZOffsetString,
  findTZOffsetTime,
} from '../resourceSlots';

const mockCurrentDate = '2017-07-07';
const useFixedDate = () => {
  const RealDate = Date;
  const mockDate = new Date(`${mockCurrentDate}T10:20:30+03:00`);

  beforeAll(() => {
    global.Date = jest.fn((...args) => {
      if (args.length > 0) {
        return new RealDate(...args);
      }

      return mockDate;
    });
  });

  afterAll(() => {
    global.Date = RealDate;
  });
};

const mockResource = {
  slot_size: '00:30:00',
  opening_hours: [
    {
      date: mockCurrentDate,
      opens: `${mockCurrentDate}T09:00:00+03:00`,
      closes: `${mockCurrentDate}T17:00:00+03:00`,
    },
  ],
};
const availableResource = {
  ...mockResource,
  reservations: [],
};
const reservedResource = {
  ...mockResource,
  reservations: [
    {
      begin: `${mockCurrentDate}T10:00:00+03:00`,
      end: `${mockCurrentDate}T10:29:59+03:00`,
    },
    {
      begin: `${mockCurrentDate}T10:30:00+03:00`,
      end: `${mockCurrentDate}T11:59:59+03:00`,
    },
  ],
};
const closedResource = {
  ...mockResource,
  opening_hours: [
    {
      date: mockCurrentDate,
      opens: null,
      closes: null,
    },
  ],
};

describe('getClosestAvailableSlot', () => {
  describe('findTZOffsetString', () => {
    test('should find the UTC offset', () => {
      const testDate0 = '2017-07-07T10:00:00+03:00';
      const testDate1 = '2017-07-07T10:00:00+0300';

      expect(findTZOffsetString(testDate0)).toEqual('+03:00');
      expect(findTZOffsetString(testDate1)).toEqual('+0300');
    });
  });

  describe('findTZOffsetTime', () => {
    const getInMs = (hours = 0, minutes = 0) => {
      const hoursInMs = hours * 60 * 60 * 1000;
      const minutesInMs = minutes * 60 * 1000;

      return hoursInMs + minutesInMs;
    };

    test('should find the UTC offset', () => {
      const testOffset0 = '+03:00';
      const testOffset1 = '+0300';
      const testOffset2 = '-0300';

      expect(findTZOffsetTime(testOffset0)).toEqual(getInMs(3));
      expect(findTZOffsetTime(testOffset1)).toEqual(getInMs(3));
      expect(findTZOffsetTime(testOffset2)).toEqual(getInMs(-3));
    });
  });

  describe('getSlotSizeInTime', () => {
    test('throws error when slotSize is not give', () => {
      expect(() => {
        getSlotSizeInTime();
      }).toThrowErrorMatchingSnapshot();
    });

    test('transforms the slot size string into milliseconds', () => {
      const halfAnHourInMs = 0.5 * 60 * 60 * 1000;

      expect(getSlotSizeInTime('00:30:00')).toEqual(halfAnHourInMs);
    });
  });

  describe('getSlots', () => {
    useFixedDate();

    const validResource = {
      slot_size: '00:30:00',
      opening_hours: [
        {
          date: mockCurrentDate,
          opens: `${mockCurrentDate}T09:00:00+03:00`,
          closes: `${mockCurrentDate}T17:00:00+03:00`,
        },
      ],
    };

    test('should throw error when resource parameter is missing', () => {
      expect(() => {
        getSlots();
      }).toThrowErrorMatchingSnapshot();
    });

    test('should throw error when slotSize field is missing from resource', () => {
      expect(() => {
        getSlots({
          ...validResource,
          slot_size: undefined,
        });
      }).toThrowErrorMatchingSnapshot();
    });

    test('should throw error when openingHours field is missing from resource', () => {
      expect(() => {
        getSlots({
          ...validResource,
          opening_hours: undefined,
        });
      }).toThrowErrorMatchingSnapshot();
    });

    test('should throw error when no opening hours are found for current date', () => {
      expect(() => {
        getSlots({
          ...validResource,
          opening_hours: [],
        });
      }).toThrowErrorMatchingSnapshot();
    });

    test('should throw error when the opening hours object is missing opens or closes fields', () => {
      expect(() => {
        getSlots({
          ...validResource,
          opening_hours: [
            {
              date: mockCurrentDate,
            },
          ],
        });
      }).toThrowErrorMatchingSnapshot();
    });

    test('should return an empty array when resource is closed', () => {
      expect(
        getSlots({
          ...validResource,
          opening_hours: [
            {
              date: mockCurrentDate,
              opens: null,
              closes: null,
            },
          ],
        }),
      ).toEqual([]);
    });

    test('should return all slot sizes for the day', () => {
      expect(getSlots(validResource).length).toEqual(16);
    });

    test('should retain timezone offset', () => {
      const [firstSlot] = getSlots(validResource);

      expect(firstSlot.start).toEqual(`${mockCurrentDate}T09:00:00+03:00`);
    });

    test('the slots it returns should not overlap', () => {
      const [firstSlot, secondSlot] = getSlots(validResource);

      expect(
        new Date(firstSlot.end).getTime() <
          new Date(secondSlot.start).getTime(),
      );
    });
  });

  describe('getClosestAvailableSlot', () => {
    useFixedDate();

    test('should return the current slot for an available resource', () => {
      const { start, end } = getClosestAvailableSlot(availableResource);

      // Because of useFixedDate, the current time is mocked to be
      // 10:20:30+03:00
      expect(start).toEqual('2017-07-07T10:00:00+03:00');
      expect(end).toEqual('2017-07-07T10:29:59+03:00');
    });

    test('should return the next available slot for a reserved resource', () => {
      const { start, end } = getClosestAvailableSlot(reservedResource);

      expect(start).toEqual('2017-07-07T12:00:00+03:00');
      expect(end).toEqual('2017-07-07T12:29:59+03:00');
    });

    test('should return null when resource is closed', () => {
      expect(getClosestAvailableSlot(closedResource)).toEqual(null);
    });
  });

  describe('getNextReservedSlot', () => {
    useFixedDate();

    test('should find next reserved slot', () => {
      expect(getNextReservedSlot(reservedResource)).toBeDefined();
    });

    test('should return null when there are no slots', () => {
      expect(getNextReservedSlot(closedResource)).toEqual(null);
    });

    test('should return last slot when there are no reservations', () => {
      expect(getNextReservedSlot(availableResource)).toBeDefined();
    });
  });
});
