const restify = require("restify");
const app = new restify.createServer();
require("./routes/hero.router")(app);
require("./routes/villain.router")(app);

// Set request handling and parsing
app.use(restify.plugins.acceptParser(app.acceptable));
app.use(restify.plugins.queryParser());
app.use(
  restify.plugins.bodyParser({
    mapParams: false
  })
);

app.pre(restify.pre.sanitizePath());

module.exports = app;
