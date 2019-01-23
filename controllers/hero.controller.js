const heroService = require("../services/hero.service");
const errors = require("restify-errors");

async function retrieveHeroes(req, res, next) {
  try {
    const heroes = await heroService.getAllFromDb();
    res.send(heroes);
    next();
  } catch (err) {
    return next(new errors.InvalidContentError(err));
  }
}

async function retrieveOneHero(req, res, next) {
  try {
    await heroService.getById(req.params.id);
    res.send(hero);
    next();
  } catch (err) {
    return next(
      new errors.ResourceNotFoundError(
        `There is no item with the id of ${req.params.id}`
      )
    );
  }
}

async function saveHero(req, res, next) {
  // Check for JSON
  if (!req.is("application/json")) {
    return next(new errors.InvalidContentError("Expects 'application/json'"));
  }

  try {
    const heroes = await heroService.add(req.body);
    res.send(heroes);
    next();
  } catch (err) {
    return next(new errors.InternalError(err.message));
  }
}

async function updateHero(req, res, next) {
  // Check for JSON
  if (!req.is("application/json")) {
    return next(new errors.InvalidContentError("Expects 'application/json'"));
  }

  const { id } = req.params;
  try {
    await heroService.update(req.body, id);
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

async function removeHero(req, res, next) {
  const { id } = req.params;
  try {
    await heroService.remove(id);
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
  retrieveHeroes,
  retrieveOneHero,
  updateHero,
  saveHero,
  removeHero
};
