import { Request, Response } from "express";
import DBService from '../models/connectdb';
import { UsuarioDTO } from "../dto";

var connect = new DBService();

export class UsuariosController {

    public async listUsers(req: Request, res: Response) {
        try {
            let usuarios = await connect.getAllUsers();
            res.json(usuarios);
            res.json(204)
        } catch (error) {
            console.log('error no controller' + error)
        }
    }

    public async listById(req: Request, res: Response) {
        let id = req.params.id
        let user = await connect.selectUserByID(id);
        res.json(user)
    }

    public async addUser(req: Request, res: Response) {
        let novoUsuario = req.body;
        let usuarioCriado = await connect.insertUser(novoUsuario);
        res.json(usuarioCriado);

    }

    public async deleteUser(req: Request, res: Response) {
        let id = req.params.id;

        let resposta = await connect.deleteUser(id)
        res.json(resposta)

    }

    public async modifyUser(req: Request, res: Response) {

        let id = req.params.id;
        let modify = req.body;
        let resposta = await connect.updateUser(id, modify)
        res.json(resposta);


    }

}