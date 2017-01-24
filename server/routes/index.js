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
