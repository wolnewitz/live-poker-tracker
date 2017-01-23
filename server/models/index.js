if (!global.hasOwnProperty('db')) {
  const Sequelize = require('sequelize');
  var sequelize;

  if ( process.env.DATABASE_URL ) {
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
    User: sequelize.import(__dirname + '/User')
    //more models
  }

  // Association defined here
  // eg global.db.User.hasMany(global.db.SomethingElse)
}

module.exports = global.db
