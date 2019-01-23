const Sequelize = require("sequelize");
const db = require("../configs/database");

const Hero = db.define("Hero", {
  id: {
    type: Sequelize.UUID,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4
  },
  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastName: Sequelize.STRING,
  house: Sequelize.STRING,
  knownAs: Sequelize.STRING
});

module.exports = Hero;
