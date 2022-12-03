
var TrenSupModelo = require('../modelo/tren_sup');
var rutina = new TrenSupModelo();


function prueba(req, res) {
    res.status(200).send({
        mesagge: 'Probando una accion del controlador de usuarios del api REST con node y mongo'
    });
}


function nuevaRutina(req, res) {
    
    var rutina = new TrenSupModelo();

    var params = req.body; //recibe todos los datos por Por el Metodo POST
    console.log(params);

    rutina.Nombre = params.Nombre;
    rutina.Descripcion = params.Descripcion;
    rutina.Beneficios = params.Beneficios;
    rutina.Repeticiones = 'No';
    rutina.Foto = 'null';

   
}

function actualizarRutinas(req, res) { //PUT
    var rutinaId = req.params.id; //GET
    var update = req.body //POST

    TrenSupModelo.findByIdAndUpdate(rutinaId, update, (err, rutinaUpdate) => {
        if (err) {
            res.status(500).send({ message: 'Error al actualizar el usuario en el servidor' });
        } else {
            if (!rutinaUpdate) {
                res.status(404).send({ message: 'No se ha podido encontar el usuario' });
            } else {
                res.status(200).send({ user: rutinaUpdate });
            }
        }
    });
}


module.exports = {
   prueba,
   nuevaRutina,
   actualizarRutinas
};
