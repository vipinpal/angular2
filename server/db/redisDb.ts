/// <reference path="../../typings.d.ts" />
"use strict";
const redis = require("redis");
const client = redis.createClient();

class RedisConnection {
    static connectRedis = (callback) => {
        client.on("error", (error) => {
            console.log("Redis Error " + error);
            return callback(error, null);
        });

        client.on("connect", () => {
            console.log(`Redis connected on host 127.0.0.1 port 6379`);
            callback(null, "connected");
        });
    };
};

export { RedisConnection, client }