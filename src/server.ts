import express from 'express'
import colors from 'colors'
import cors, { CorsOptions } from 'cors'
import morgan from 'morgan'
import swaggerUI from 'swagger-ui-express'
import swaggerSpec, {swaggerUiOptions} from './config/swagger'
import router from './router'
import db from './config/db'

// CONECTAR A BASE DE DATOS
export async function connectDB() {
    try {
        await db.authenticate()
        db.sync()
        // console.log(colors.magenta('Conexion exitosa a la BD')); 
    } catch (error) {
        // console.log(error);
        console.log(colors.red.bold('Hubo un error al conectarse a la BD'));
    }
}

connectDB()

// INSTANCIA DE EXPRESS
const server = express()

// Permitir Conexiones
const corsOptions: CorsOptions = {
    origin: function(origin, callback) {
        if(origin === process.env.FRONTEND_URL){
            callback(null, true)
        }else{
            callback(new Error('Error de CORS'))    
        }
    }
}
server.use(cors(corsOptions))

// LEER DATOS DE FORMULARIOS
server.use(express.json())

server.use(morgan('dev'))

server.use('/api/products', router)

// DOCS
server.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec, swaggerUiOptions))

export default server
