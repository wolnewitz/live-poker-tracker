var Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {
  return sequelize.define("Session", {
    date: DataTypes.DATE,
    hours: DataTypes.INTEGER,
    profit: DataTypes.INTEGER
  });
}
