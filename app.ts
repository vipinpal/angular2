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