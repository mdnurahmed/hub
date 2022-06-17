const Sequelize = require("sequelize");
const user = "myusername";
const host = "db";
const database = "postgres";
const password = "mypassword";
const port = "5432";
const sequelize = new Sequelize(database, user, password, {
  host,
  port,
  dialect: "postgres",
  logging: false,
});

module.exports = sequelize;
