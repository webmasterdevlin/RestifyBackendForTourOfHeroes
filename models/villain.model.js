const Sequelize = require("sequelize");
const db = require("../configs/database");

const Villain = db.define("Villain", {
  id: {
    type: Sequelize.UUID,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4
  },
  firstName: Sequelize.STRING,
  lastName: Sequelize.STRING,
  house: Sequelize.STRING,
  knownAs: Sequelize.STRING
});

module.exports = Villain;
