export const getTotalHours = (sessions) =>
  sessions.reduce((memo, sesh) => {
    memo = memo + sesh.hours;
    return memo;
  }, 0)
