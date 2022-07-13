//*Exportacion para rutas/accion
const express = require('express');
const router = express.Router();
const user = require('../controllers/user.controller');
const service = require('../controllers/service.controller');
const jwt = require('jsonwebtoken');
const { request } = require('express');

//?Rutas de accion
router.get('/', user.getUsers);
router.post('/register', user.registerUser);
router.post('/login', user.loginUser);
router.put('/dashboard/put', verifyToken, user.updateUser);
router.get('/dashboard', verifyToken, user.getDash)

//?Rutas de accion Servicios
router.get('/services', service.getServices)


module.exports = router; 

function verifyToken(req, res, next) {
    if(!req.headers.authorization){
        return res.status(401).send('No autorizado');
    } 

    const token = req.headers.authorization.split(' ')[1];

    if(token === 'null'){
        return res.status(401).send('No autorizado');
    }

    const payload = jwt.verify(token, 'secret');
    req.userId = payload._id;
    next();
};