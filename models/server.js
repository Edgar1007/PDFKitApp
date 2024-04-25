const express = require('express');
const cors = require('cors');
const fileUpload = require('express-fileupload');


//const { dbConnection } = require('../database/config');
require('dotenv').config();


class Server{
    
    constructor(){
        this.app = express();

        this.port = process.env.PORT;
        this.paths = {
            editar: '/',
        }

        //Conexion a la base de datos
        //this.conectarDB();

        //Middlerwares
        this.middlewares();

        //Rutas de aplicacion
        this.routes();
    }

    // async conectarDB(){
    //     await dbConnection();
    // }

    middlewares(){

        //CORS
        this.app.use(cors());
        
        // Para que pueda recibir datos atraves del body
        this.app.use(express.json());
        this.app.use(fileUpload());
        //Directorio publico
        this.app.use(express.static('public'));//la carpeta que se presenta por default, en este caso el archivo html en la carpeta public
    }

    routes(){
        this.app.use(this.paths.editar, require('../routes/editar'));
    }
    

    listen(){
        this.app.listen(this.port,()=>{
            console.log('Servidor corriendo en el puerto', this.port)
        })

    }
}

module.exports = Server;