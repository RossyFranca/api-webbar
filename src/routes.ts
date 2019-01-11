import { UsuariosController } from "./controllers/usuarios.controller";



export class Routes {


    public usuariosCtrl: UsuariosController = new UsuariosController();


    public routes(app: any): void {
        app.route('/usuarios').get(this.usuariosCtrl.listUsers)
        app.route('/usuarios').post(this.usuariosCtrl.addUser)
        app.route('/usuarios/:id').get(this.usuariosCtrl.listById);
        app.route('/usuarios/:id').delete(this.usuariosCtrl.deleteUser);
        app.route('/usuarios/:id').put(this.usuariosCtrl.modifyUser);

    }
}