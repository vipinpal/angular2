/// <reference path="../../typings.d.ts" />
"use strict";
const mongoose = require("mongoose");
const dbUrl = "mongodb://localhost:27017/myApp";
mongoose.connect(dbUrl);

class MongoConnect {
    static connectMongo = (callback) => {
        mongoose.connection.on("error", (error) => {
            console.log("error while connection" + error);
            callback(error, null);
        });

        mongoose.connection.on("connected", () => {
            console.log("mongodb is connect on " + dbUrl);
            callback(null, { result: "connected" });
        });
    };
};

mongoose.connection.on("disconnected", () => {
    console.log("mongodb is disconnected");
});

process.on("SIGINT", () => {
    mongoose.connection.close(() => {
        console.log("Mongoose default connection disconnected through app termination");
        process.exit(0);
    });
});

export { MongoConnect };