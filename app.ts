/// <reference path="./typings.d.ts" />
"use strict";
import * as express from "express";
// import * as webpack from "webpack";

import { Router } from "./server/indexRoute";
// import { RedisConnection } from "./server/db/redisDb";
// import { MongoConnect } from "./server/db/mongoDb";

const app = express();
const port = process.argv[3];
let configFromArg = process.argv[2];
console.log(configFromArg);
// const mongo = MongoConnect.connectMongo((error, result) => {
//     console.log(error);
//     console.log(result);
// });

console.log(port);

Router.use(app);
// RedisConnection.connectRedis((redisError, redisResult) => {
//     if (redisError) return console.log(redisError);
//     app.listen(port, (error, result) => {
//         if (error) return console.log(error);
//         console.log(`your server is start on port ${port}`);
//     });
// });

 app.listen(port, (error, result) => {
        if (error) return console.log(error);
        console.log(`your server is start on port ${port}`);
    });
/*
"use strict";
let path = require('path');
let express = require('express');
let webpack = require('webpack');
let configFromArg = process.argv[2];
let port = process.argv[3];
let html = process.argv[4];
let config = require('./config/' + configFromArg);

let app = express();
let compiler = webpack(config);
app.all('/', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
 });
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));
app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use(require('webpack-hot-middleware')(compiler));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, html + '.html'));
});

app.listen(port, 'localhost', err => {
  if (err) {
    console.log(err);
    return;
  }

  console.log(`leanKart Development Instance - config ${configFromArg}  - Listening at http://localhost:${port}`);
});
*/