"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const usuarios_controller_1 = require("./controllers/usuarios.controller");
class Routes {
    constructor() {
        this.usuariosCtrl = new usuarios_controller_1.UsuariosController();
    }
    routes(app) {
        app.route('/usuarios').get(this.usuariosCtrl.listUsers);
        app.route('/usuarios').post(this.usuariosCtrl.addUser);
        app.route('/usuarios/:id').get(this.usuariosCtrl.listById);
        app.route('/usuarios/:id').delete(this.usuariosCtrl.deleteUser);
        app.route('/usuarios/:id').put(this.usuariosCtrl.modifyUser);
    }
}
exports.Routes = Routes;
