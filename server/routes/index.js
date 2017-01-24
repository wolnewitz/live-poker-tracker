var db = require('../models')

exports.test =  (req, res) => {
  db.User.create({email: 'something@gmail.com'})
    .then(user => {
      console.log('user', user);
      db.Session.create({user: user, profit: 1000, hours: 2})
        .then(session => {
          console.log('session', session);
          session.setUser(user).then((sesh) => {
            sesh.getUser().then(u => {
              res.send(u);
            })
          })
        });
    })
};

exports.getSessions = (req, res) => {
  db.Session.findAll().then(sessions => {
    res.json(sessions);
  });
}

exports.saveSession = (req, res) => {
  console.log('req body', req);
  var date = req.body.date;
  var hours = req.body.hours;
  var profit = req.body.profit;
  console.log('dhp', date, hours, profit);

  db.Session.create({date: date, hours: hours, profit: profit})
    .then(session => {
      res.send(session);
    });
}
