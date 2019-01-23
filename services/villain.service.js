const Villain = require("../models/villain.model");

async function getAllFromDb() {
  try {
    return await Villain.findAll();
  } catch (e) {
    throw e.message;
  }
}

async function getById(id) {
  try {
    return await Villain.findByPk({ where: { id } });
  } catch (e) {
    throw e.message;
  }
}

async function add(newVillain) {
  try {
    return await (rawResult = Villain.create({
      ...newVillain
    }));
  } catch (e) {
    throw e.message;
  }
}

async function update(body, id) {
  try {
    await Villain.update(body, { where: { id } });
  } catch (e) {
    throw e.message;
  }
}

async function remove(id) {
  try {
    await Villain.destroy({
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
