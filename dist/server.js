"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const config_1 = require("./utils/config");
var config = new config_1.Config();
var PORT = config.portServer;
app_1.default.listen(PORT, () => {
    console.log('Servidor rodando na porta  ' + PORT);
});
