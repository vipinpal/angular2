/// <reference path="../typings.d.ts" />
"use strict";
import * as path from "path";
const jwt = require("jsonwebtoken");

class Router {
    static use = (app) => {
        // app.use("/", (request, response) => {
        //     response.sendFile(path.join(__dirname + "./../src/index.html"));
        // });
        app.get("/abc/token", (request, response) => {
            console.log("token");
            let token = jwt.sign({
                email: "vipin@gmail.com",
                id: "12344",
                scope: "*"
            }, "12ngjhdimkid", { expiresIn: "1s" });
            response.send(token);
        });
        app.post("/vir", (request, response) => {
                        console.log(request.body);
            let token = request.body.token;
            jwt.verify(token, "12ngjhdimkid", (error, result) => {
                if (error) return response.send(error);
                response.send(result);
            });
        });
    };
};

export { Router };