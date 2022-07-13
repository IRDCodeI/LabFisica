//*Definicion de Modelo de Servicio
const { Schema, model } = require('mongoose');

const serviceSchema = new Schema(
    {
       type: String,
       scope: String,
       subject: String,
       desc: String,
       urlimg: String
    }, 
    {
        timestamps: true
    }   
);

module.exports = model('Service', serviceSchema);