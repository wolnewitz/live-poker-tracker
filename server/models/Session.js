var Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {
  return sequelize.define("Session", {
    date: DataTypes.DATEONLY,
    hours: DataTypes.INTEGER,
    profit: DataTypes.INTEGER
  });
}
