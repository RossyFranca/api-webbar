"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const PORT = 666;
app_1.default.listen(PORT, () => {
    console.log('Servidor rodando na porta  ' + PORT);
});
