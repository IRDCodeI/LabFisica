
const service = require('../models/service');
const serviceController = {};
const jwt = require('jsonwebtoken');

serviceController.getServices = async(req, res) => {     
    const servicios = await service.find();
    res.json(servicios);
}  
 

module.exports = serviceController; 