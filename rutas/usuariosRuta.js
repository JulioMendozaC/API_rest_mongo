var express = require('express');
var UsuarioControl = require('../controlador/usuarioControlador');
var api=express.Router();

api.get('/probando-controlador', UsuarioControl.prueba);
api.post('/registro', UsuarioControl.registrarUsuario);
api.post('/login', UsuarioControl.accesoUsuario);
api.put('/actualizar', UsuarioControl.actualizarUsuario);
module.exports=api;