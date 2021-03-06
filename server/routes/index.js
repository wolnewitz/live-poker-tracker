var db = require('../models')

exports.getSessions = (req, res) => {
  var order = req.query.order || 'DESC';
  db.Session.findAll({order: [['date', order]]}).then(sessions => {
    res.json(sessions);
  });
}

exports.saveSession = (req, res) => {
  var date = req.body.date;
  var hours = req.body.hours;
  var profit = req.body.profit;

  db.Session.create({date: date, hours: hours, profit: profit})
    .then(session => {
      res.send(session);
    })
    .catch(err => {
      res.send("Error");
    });
}

exports.notFound = (req, res) => {
  res.redirect('/');
}
