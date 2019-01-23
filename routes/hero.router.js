const heroController = require("../controllers/hero.controller");

module.exports = server => {
  // GET: /heroes
  server.get("/api/heroes", heroController.retrieveHeroes);

  // GET: /departments/{id}
  server.get("/api/heroes/:id", heroController.retrieveOneHero);

  // PUT: /departments/{id}
  server.put("/api/heroes/:id", heroController.updateHero);

  // POST: /heroes
  server.post("/api/heroes", heroController.saveHero);

  // DELETE: /api/heroes/{id}
  server.del("/api/heroes/:id", heroController.removeHero);
};
