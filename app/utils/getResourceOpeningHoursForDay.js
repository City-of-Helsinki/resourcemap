import dateFormat from 'dateformat';

function getOpeningHoursForDay(openingHours, day) {
  return openingHours.find(openingHour => {
    const date = dateFormat(day, 'yyyy-mm-dd');
    const openingHourDate = dateFormat(
      new Date(openingHour.date),
      'yyyy-mm-dd',
    );

    return date === openingHourDate;
  });
}

export default getOpeningHoursForDay;
