var Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {
  return sequelize.define("User", {
    email: DataTypes.STRING
  });
}
