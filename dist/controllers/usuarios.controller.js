"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const connectdb_1 = require("../connectdb");
var connect = new connectdb_1.default();
class UsuariosController {
    listUsers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let usuarios = yield connect.getAllUsers();
            res.json(usuarios);
        });
    }
    listById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let id = req.params.id;
            let user = yield connect.selectUserByID(id);
            res.json(user);
        });
    }
    addUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let novoUsuario = req.body;
            let usuarioCriado = yield connect.insertUser(novoUsuario);
            res.json(usuarioCriado);
        });
    }
    deleteUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let id = req.params.id;
            let resposta = yield connect.deleteUser(id);
            res.json(resposta);
        });
    }
    modifyUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let id = req.params.id;
            let modify = req.body;
            let resposta = yield connect.updateUser(id, modify);
            res.json(resposta);
        });
    }
}
exports.UsuariosController = UsuariosController;
