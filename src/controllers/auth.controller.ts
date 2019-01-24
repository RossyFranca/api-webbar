
import { Request, Response } from "express";
import DBService from '../models/connectdb'
var connect = new DBService
export class AuthController {

    public async authenticate(req: Request, res: Response, next) {
        let email = req.body.email;
        let senha = req.body.senha;
        let login = await connect.authenticateUser(email, senha);
        res.status(200).send('Logado')
        res.send(login[0].id)
        console.log(login[0].id)
    }

}

