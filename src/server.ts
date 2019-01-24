import app from './app';
import { Config } from './utils/config';
var config = new Config();
var PORT = config.portServer;

app.listen(PORT, () => {
    console.log('Servidor rodando na porta  ' + PORT);
});