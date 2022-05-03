const express = require('express');
const cors = require('cors')

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        //middlewares
        this.middlewares();
        //rutas de la app
        this.routes();
    }

    middlewares() {
        //cors
        this.app.use(cors());

        //lectura y pareseo de boddy
        this.app.use(express.json());

        //directorio publico
        this.app.use(express.static('public'))
        this.userPath = '/api/users';
    }


    routes() {
        this.app.use(this.userPath, require('../routes/users'));

    }

    listen() {
        this.app.listen(this.port, () => {
            console.log("Server listening on port :: " + this.port);
        });
    }

}

module.exports = Server;