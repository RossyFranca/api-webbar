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
const mysql = require("mysql");
const config_1 = require("./utils/config");
var config = new config_1.Config();
class DBService {
    /**
     * Cria conexão com o banco de dados para a execuçãod e uma query
     */
    connectDB() {
        return __awaiter(this, void 0, void 0, function* () {
            var conn = mysql.createConnection({
                host: config.dbConnectConfig.host,
                user: config.dbConnectConfig.user,
                password: config.dbConnectConfig.password,
                database: config.dbConnectConfig.database
            });
            conn.connect((err) => {
                if (err)
                    throw err;
                console.log('conected!');
            });
            return conn;
        });
    }
    /**
     * Busca todos os usuários do banco
     */
    getAllUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            var conn;
            if (!conn) {
                conn = yield this.connectDB();
            }
            return new Promise((resolve, reject) => {
                conn.query('SELECT * FROM usuarios', (err, result) => {
                    if (err) {
                        reject(err);
                        conn.end(console.log(err));
                    }
                    else {
                        resolve(result);
                        console.log('usuários listados');
                        conn.end(console.log('conexão finalizada'));
                    }
                });
            });
        });
    }
    /**
     * Inserir um usuário
     */
    insertUser(values) {
        return __awaiter(this, void 0, void 0, function* () {
            var conn = yield this.connectDB();
            return new Promise((resolve, reject) => {
                conn.query(`INSERT INTO usuarios(nome, email, senha) VALUES ('${values.nome}','${values.email}','${values.senha}')`, (err, result) => {
                    if (err) {
                        reject(err);
                        conn.end();
                        console.log(err);
                    }
                    else {
                        resolve(result);
                        conn.end();
                        console.log('usuário inserido e conexão finalizada');
                    }
                });
            });
        });
    }
    selectUserByID(id) {
        return __awaiter(this, void 0, void 0, function* () {
            var conn = yield this.connectDB();
            return new Promise((resolve, reject) => {
                conn.query(`SELECT * FROM usuarios WHERE id = ${id}`, (err, result) => {
                    if (err) {
                        reject(err);
                        conn.end();
                        console.log(err);
                    }
                    else {
                        resolve(result);
                        conn.end();
                        console.log('usuário localizado e conexão finalizada');
                    }
                });
            });
        });
    }
    deleteUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            var conn = yield this.connectDB();
            return new Promise((resolve, reject) => {
                conn.query(`DELETE FROM usuarios WHERE id = ${id}`, (err, result) => {
                    if (err) {
                        reject(err);
                        conn.end();
                        console.log(err);
                    }
                    else {
                        resolve(result);
                        conn.end();
                        console.log('usuario removido com sucesso e conesão finalizada');
                    }
                });
            });
        });
    }
    updateUser(id, values) {
        return __awaiter(this, void 0, void 0, function* () {
            var conn = yield this.connectDB();
            return new Promise((resolve, reject) => {
                conn.query(`UPDATE usuarios SET nome = '${values.nome}', email = '${values.email}', senha = '${values.senha}' WHERE id = ${id};`, (err, result) => {
                    if (err) {
                        reject(err);
                        conn.end();
                        console.log(err);
                    }
                    else {
                        resolve(result);
                        conn.end();
                    }
                });
            });
        });
    }
}
exports.default = DBService;
