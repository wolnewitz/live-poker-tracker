var db = require('../models')

exports.test =  (req, res) => {
  db.User.create({email: 'something@gmail.com'})
    .then(user => {
      res.send(user);
    })
};
