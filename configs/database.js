const Sequelize = require("sequelize");

const conf = require("./configs");
const { name, user, pass } = conf().postgres;

const db = new Sequelize(name, user, pass, {
  host: "localhost",
  dialect: "postgres",
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

db.sync({ logging: console.log })
  .then(() => console.log("Connection to database established successfully."))
  .catch(err => console.log("Unable to connect to the database:", err));

module.exports = db;
