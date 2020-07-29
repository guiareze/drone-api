const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')

//Criando o DroneSchema 

/**
 * @swagger
 * components:
 *  schemas:
 *      Drone:
 *        type: object
 *        properties:
 *          name:
 *              type: string
 * 
 *        required:
 *          - name
 *          
 */
const DroneSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
})

// Registrando o mongoose paginate da Aplicação
DroneSchema.plugin(mongoosePaginate)

// Registrando o schema
mongoose.model('Drone', DroneSchema)