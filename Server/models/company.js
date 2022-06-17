const Sequelize = require("sequelize");

const sequelize = require("../util/database");

const Company = sequelize.define("company", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: Sequelize.STRING,
  contact_email: Sequelize.STRING,
});

module.exports = Company;
