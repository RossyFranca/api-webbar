"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_router_1 = require("./routes/user.router");
const express = require("express");
const bodyParser = require("body-parser");
class App {
    constructor() {
        this.routes = new user_router_1.Routes();
        this.app = express();
        this.config();
        this.routes.routes(this.app);
    }
    config() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
}
exports.default = new App().app;
