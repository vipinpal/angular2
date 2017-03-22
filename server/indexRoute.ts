/// <reference path="../typings.d.ts" />
"use strict";
import * as path from "path";

class Router {
    static use = (app) => {
        app.use("/", (request, response) => {
            response.sendFile(path.join(__dirname + "./../index.html"));
        });
    };
};

export { Router };