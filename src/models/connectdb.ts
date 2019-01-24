import * as mysql from 'mysql';
import { Config } from '../utils/config';
import { promises } from 'fs';
var config = new Config()

export default class DBService {

    /**
     * Cria conexão com o banco de dados para a execuçãod e uma query
     */
    async connectDB() {
        var conn = mysql.createConnection({
            host: config.dbConnectConfig.host,
            user: config.dbConnectConfig.user,
            password: config.dbConnectConfig.password,
            database: config.dbConnectConfig.database
        });
        conn.connect((err) => {
            if (err) throw err;
            console.log('conected!')
        });
        return conn;
    }

    /**
     * Busca todos os usuários do banco
     */
    async getAllUsers() {
        var conn;
        if (!conn) {
            conn = await this.connectDB();
        }

        return new Promise((resolve, reject) => {
            conn.query('SELECT * FROM usuarios', (err, result) => {
                if (err) {
                    reject(err);
                    conn.end(console.log(err.message));
                } else {
                    resolve(result);
                    console.log('usuários listados');
                    conn.end(console.log('conexão finalizada'));
                }
            });
        });
    }


    /**
     * Inserir um usuário
     */
    async insertUser(values) {
        var conn = await this.connectDB();
        return new Promise((resolve, reject) => {
            conn.query(`INSERT INTO usuarios(nome, email, senha) VALUES ('${values.nome}','${values.email}','${values.senha}')`, (err, result) => {
                if (err) {
                    reject(err);
                    conn.end();
                    console.log(err);
                } else {
                    resolve(result);
                    conn.end();
                    console.log('usuário inserido e conexão finalizada');
                }
            });
        });
    }

    async selectUserByID(id: number) {
        var conn = await this.connectDB();
        return new Promise((resolve, reject) => {
            conn.query(`SELECT * FROM usuarios WHERE id = ${id}`, (err, result) => {
                if (err) {
                    reject(err);
                    conn.end();
                    console.log(err);
                } else {
                    resolve(result);
                    conn.end();
                    console.log('usuário localizado e conexão finalizada')
                }
            });
        });
    }


    async authenticateUser(email: string, senha: string) {
        var conn = await this.connectDB();
        return new Promise((resolve, reject) => {
            conn.query(`SELECT * FROM usuarios WHERE senha = '${senha}' and email = '${email}';`, (err, result) => {
                if (err) {
                    reject(err)
                    conn.end();
                    console.log(err)
                } else {
                    resolve(result);
                    conn.end();
                    console.log(result);
                }

            });
        });
    };

    async deleteUser(id: number) {

        var conn = await this.connectDB()
        return new Promise((resolve, reject) => {
            conn.query(`DELETE FROM usuarios WHERE id = ${id}`, (err, result) => {
                if (err) {
                    reject(err);
                    conn.end();
                    console.log(err)
                } else {
                    resolve(result);
                    conn.end();
                    console.log('usuario removido com sucesso e conesão finalizada');
                }
            });
        });
    }

    async updateUser(id: number, values) {
        var conn = await this.connectDB();
        return new Promise((resolve, reject) => {
            conn.query(`UPDATE usuarios SET nome = '${values.nome}', email = '${values.email}', senha = '${values.senha}' WHERE id = ${id};`, (err, result) => {
                if (err) {
                    reject(err);
                    conn.end();
                    console.log(err);
                } else {
                    resolve(result);
                    conn.end();
                }
            });
        });
    }



}



