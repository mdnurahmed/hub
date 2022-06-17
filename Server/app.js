const express = require("express");
const bodyParser = require("body-parser");

const hubRoutes = require("./routes/hub");
const sequelize = require("./util/database");
const Company = require("./models/company");
const Hub = require("./models/hub");

const app = express();

const server = async () => {
  app.use(bodyParser.json()); // application/json

  app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Methods",
      "OPTIONS, GET, POST, PUT, PATCH, DELETE"
    );
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Content-Type, Authorization"
    );
    next();
  });

  app.use("/api", hubRoutes);
  app.use((error, req, res, next) => {
    console.log(error);
    res.status(500).json({
      error: JSON.stringify(error),
    });
  });
  Hub.belongsTo(Company, { constraints: true, onDelete: "CASCADE" });
  Company.hasMany(Hub);
  try {
    await sequelize.sync();
    app.listen(8080);
  } catch (error) {
    console.log(error);
  }
};

server();
module.exports = app;
