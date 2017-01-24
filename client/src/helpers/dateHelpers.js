const checkCurrentYear = (date, year) =>
  date.getYear() === year

export const selectButtonsFilter = (select, sessions) => {
  var currentDate = new Date();
  var currentYear = new Date().getYear();

  if ( select === 'currentMonth' ) {
    return sessions.filter(s => {
      var date = new Date(s.date)
      return date.getMonth() === currentDate.getMonth() && checkCurrentYear(date, currentYear);
    })
  }

  if ( select === 'currentYear' ) {
    return sessions.filter(s => {
      var date = new Date(s.date)
      return checkCurrentYear(date, currentYear);
    })
  }

  if ( select === 'threeMonths' ) {
    currentDate.setMonth(currentDate.getMonth() - 3);
    return sessions.filter(s => {
      var date = new Date(s.date)
      return date >= currentDate;
    })
  }

  if ( select === 'sixMonths' ) {
    currentDate.setMonth(currentDate.getMonth() - 6);
    return sessions.filter(s => {
      var date = new Date(s.date)
      return date >= currentDate;
    })
  }

  return sessions;
};
