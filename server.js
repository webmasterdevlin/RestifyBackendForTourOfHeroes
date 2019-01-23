require("dotenv").config();
const winston = require("winston");
const server = require("./app");
const port = "5000";

// start server
server.listen(port, () =>
  console.log(`Backend server started on port:${port}`)
);
