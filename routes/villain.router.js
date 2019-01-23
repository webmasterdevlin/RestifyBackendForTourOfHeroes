const villainController = require("../controllers/villain.controller");

module.exports = server => {
  // GET: /villains
  server.get("/api/villains", villainController.retrieveVillains);

  // GET: /departments/{id}
  server.get("/api/villains/:id", villainController.retrieveOneVillain);

  // PUT: /departments/{id}
  server.put("/api/villains/:id", villainController.updateVillain);

  // POST: /villains
  server.post("/api/villains", villainController.saveVillain);

  // DELETE: /villains/{id}
  server.del("/api/villains/:id", villainController.removeVillain);
};
