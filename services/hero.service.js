const Hero = require("../models/hero.model");

async function getAllFromDb() {
  try {
    return await Hero.findAll();
  } catch (e) {
    throw e.message;
  }
}

async function getById(id) {
  try {
    return await Hero.findByPk({ where: { id } });
  } catch (e) {
    throw e.message;
  }
}

async function add(newHero) {
  try {
    return await (rawResult = Hero.create({
      ...newHero
    }));
  } catch (e) {
    throw e.message;
  }
}

async function update(body, id) {
  try {
    await Hero.update(body, { where: { id } });
  } catch (e) {
    throw e.message;
  }
}

async function remove(id) {
  try {
    await Hero.destroy({
      where: { id }
    });
  } catch (e) {
    throw e.message;
  }
}

module.exports = {
  getAllFromDb,
  getById,
  add,
  update,
  remove
};
