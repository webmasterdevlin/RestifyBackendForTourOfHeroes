const villainService = require("../services/villain.service");
const errors = require("restify-errors");

async function retrieveVillains(req, res, next) {
  try {
    const villains = await villainService.getAllFromDb();
    res.send(villains);
    next();
  } catch (err) {
    return next(new errors.InvalidContentError(err));
  }
}

async function retrieveOneVillain(req, res, next) {
  try {
    await villainService.getById(req.params.id);
    res.send(villain);
    next();
  } catch (err) {
    return next(
      new errors.ResourceNotFoundError(
        `There is no item with the id of ${req.params.id}`
      )
    );
  }
}

async function saveVillain(req, res, next) {
  // Check for JSON
  if (!req.is("application/json")) {
    return next(new errors.InvalidContentError("Expects 'application/json'"));
  }
  try {
    const villains = await villainService.add(req.body);
    res.send(villains);
    next();
  } catch (err) {
    return next(new errors.InternalError(err.message));
  }
}

async function updateVillain(req, res, next) {
  // Check for JSON
  if (!req.is("application/json")) {
    return next(new errors.InvalidContentError("Expects 'application/json'"));
  }
  const { id } = req.params;
  try {
    await villainService.update(req.body, id);
    res.send({ updated: id });
    next();
  } catch (err) {
    return next(
      new errors.ResourceNotFoundError(
        `There is no item with the id of ${req.params.id}`
      )
    );
  }
}

async function removeVillain(req, res, next) {
  const { id } = req.params;
  try {
    await villainService.remove(id);
    res.send({ deleted: id });
    next();
  } catch (err) {
    return next(
      new errors.ResourceNotFoundError(
        `There is no item with the id of ${req.params.id}`
      )
    );
  }
}

module.exports = {
  retrieveVillains,
  retrieveOneVillain,
  updateVillain,
  saveVillain,
  removeVillain
};
