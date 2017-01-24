if (!global.hasOwnProperty('db')) {
  const Sequelize = require('sequelize');
  var sequelize;

  if ( process.env.DATABASE_URL ) {
    var match = process.env.DATABASE_URL.match(/postgres:\/\/([^:]+):([^@]+)@([^:]+):(\d+)\/(.+)/)
    sequelize = new Sequelize(process.env.DATABASE_URL, {
      dialect: 'postgres',
      protocol: 'postgres',
      port: match[4],
      host: match[3],
      logging: true
    })
  } else {
    sequelize = new Sequelize('live_poker', 'root', null);
  }

  global.db = {
    Sequelize: Sequelize,
    sequelize: sequelize,
    User: sequelize.import(__dirname + '/User'),
    Session: sequelize.import(__dirname + '/Session'),
    //more models
  }

  // Association defined here
  // eg global.db.User.hasMany(global.db.SomethingElse)
  global.db.User.hasMany(global.db.Session);
  global.db.Session.belongsTo(global.db.User);
}

module.exports = global.db
