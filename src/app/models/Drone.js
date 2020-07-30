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
 *          temperature:
 *              type: integer
 *          humidity:
 *              type: integer
 *          tracking:
 *              type: boolean
 *        required:
 *          - name
 *          - temperature
 *          - humidity
 *          - tracking
 *          
 */
const DroneSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    temperature:{
        type: Number,
        required: true,
    },
    humidity:{
        type: Number,
        required: true,
    },
    tracking:{
        type: Boolean,
        required: true,
    },
})

// Registrando o mongoose paginate da Aplicação
DroneSchema.plugin(mongoosePaginate)

// Registrando o schema
mongoose.model('Drone', DroneSchema)