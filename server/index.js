"use strict";

const Hapi = require("hapi");
// Swagger plugin dependencies
const Inert = require("inert");
const Vision = require("vision");
const HapiSwagger = require("hapi-swagger");
const Pack = require("../package");

const routes = require("./config/routes");

const server = Hapi.server({
  port: 3000,
  host: "localhost"
});

const init = async () => {
  await server.register({
    plugin: require("hapi-pino"),
    options: {
      prettyPrint: true,
      logEvents: ["response", "onPostStart"]
    }
  });

  await server.register([
    Inert,
    Vision,
    {
      plugin: HapiSwagger,
      options: {
        info: {
          title: "Grassroots API Documentation",
          version: Pack.version
        }
      }
    }
  ]);

  server.route(routes);

  await server.start();
  console.log(`Server running at: ${server.info.uri}`);
};

process.on("unhandledRejection", err => {
  console.log(err);
  process.exit(1);
});

init();
