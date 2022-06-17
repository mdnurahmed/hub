const Sequelize = require("sequelize");

const sequelize = require("../util/database");

const Hub = sequelize.define("hub", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: Sequelize.STRING,
  address: Sequelize.STRING,
  unit_number: Sequelize.STRING,
  city: Sequelize.STRING,
  state: Sequelize.STRING,
  zip_code: Sequelize.STRING,
  country_code: Sequelize.STRING,
  note: Sequelize.STRING,
});

module.exports = Hub;
