var express = require('express');
var rutinasControl = require('../controlador/rutinasControlador');
var api=express.Router();

api.get('/probando', rutinasControl.prueba);
api.post('/nuevaRutina', rutinasControl.nuevaRutina);
api.put('/actualizarRutina', rutinasControl.actualizarRutinas);

module.exports=api;