//*Exportacion para rutas/accion
const express = require('express');
const { JsonWebTokenError } = require('jsonwebtoken');
const router = express.Router();
const user = require('../controllers/user.controller');
const jwt = require('jsonwebtoken');
const { request } = require('express');

//?Rutas de accion
router.get('/', user.getUsers);
router.post('/register', user.registerUser);
router.post('/login', user.loginUser);
router.get('/dashboard', verifyToken, user.getDash)
//router.get('/user/:id', user.getUser);
//router.put('/user/:id', user.editUser)
//router.get('/:id', user.getUser);
//router.put('/:id', user.editUser);
//router.delete('/:id', user.deleteUser);

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