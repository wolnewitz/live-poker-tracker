export const createSession = (body) => {
  return fetch('/sessions', {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(body)
  })
}

export const getAllSessions = () => {
  return fetch('/sessions').then(res => {
    return res.json()
  });
}
