export const getTotalHours = (sessions) =>
  sessions.reduce((memo, sesh) => {
    memo = memo + sesh.hours;
    return memo;
  }, 0)

export const getTotalProfit = (sessions) =>
  sessions.reduce((memo, sesh) => {
    memo = memo + sesh.profit;
    return memo;
  }, 0)

export const greenOrRed = (num) => {
  if(num.toString().match(/^-/)) { return 'red'; }
  return 'green'
}
