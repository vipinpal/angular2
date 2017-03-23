/// <reference path="./typings.d.ts" />
"use strict";
const express = require("express");
const webpack = require("webpack");
const path = require("path");

import { Router } from "./server/indexRoute";
import { RedisConnection } from "./server/db/redisDb";
import { MongoConnect } from "./server/db/mongoDb";

const app = express();
const port = process.argv[3];
let configFromArg = process.argv[2];
let config = require("./config/" + configFromArg);
let compiler = webpack(config);
console.log(configFromArg);
const mongo = MongoConnect.connectMongo((error, result) => {
  console.log(error);
  console.log(result);
});

app.use(require("webpack-dev-middleware")(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));
app.use("/assets", express.static(path.join(__dirname, "./src/assets")));
app.use(require("webpack-hot-middleware")(compiler));

Router.use(app);

RedisConnection.connectRedis((redisError, redisResult) => {
  if (redisError) return console.log(redisError);
  app.listen(port, (error, result) => {
    if (error) return console.log(error);
    console.log(`your server is start on port ${port}`);
  });
});