'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Cardio = Schema({

    Principiante: {
        Pecho: {
          Foto: String,
          nombre: String,
          Descrpcion: String,
          Beneficios: String,
          Repeticiones: String,
        },
        Brazo: {
         
            Foto: String,
            nombre: String,
            Descrpcion: String,
            Beneficios: String,
            Repeticiones: String,
          },
        },
        Bisep: {
          Foto: String,
          nombre: String,
          Descrpcion: String,
          Beneficios: String,
          Repeticiones: String,
        },
        Abdomen: {
          Foto: String,
          nombre: String,
          Descrpcion: String,
          Beneficios: String,
          Repeticiones: String,
        },
        Espalda: {
          Foto: String,
          nombre: String,
          Descrpcion: String,
          Beneficios: String,
          Repeticiones: String,
        },
  
  
      Intermedio: {
        Pecho: {
          Foto: String,
          nombre: String,
          Descrpcion: String,
          Beneficios: String,
          Repeticiones: String,
        },
        Brazo: {
          Levant_MancuernasP1: {
            Foto: String,
            nombre: String,
            Descrpcion: String,
            Beneficios: String,
            Repeticiones: String,
          },
        },
        Bisep: {
          Foto: String,
          nombre: String,
          Descrpcion: String,
          Beneficios: String,
          Repeticiones: String,
        },
        Abdomen: {
          Foto: String,
          nombre: String,
          Descrpcion: String,
          Beneficios: String,
          Repeticiones: String,
        },
        Espalda: {
          Foto: String,
          nombre: String,
          Descrpcion: String,
          Beneficios: String,
          Repeticiones: String,
        },
      },
  
      Avanzado: {
        Pecho: {
          Foto: String,
          nombre: String,
          Descrpcion: String,
          Beneficios: String,
          Repeticiones: String,
        },
        Brazo: {
          
          Levant_MancuernasP1: {
            Foto: String,
            nombre: String,
            Descrpcion: String,
            Beneficios: String,
            Repeticiones: String,
          },
        },
        Bisep: {
          Foto: String,
          nombre: String,
          Descrpcion: String,
          Beneficios: String,
          Repeticiones: String,
        },
        Abdomen: {
          Foto: String,
          nombre: String,
          Descrpcion: String,
          Beneficios: String,
          Repeticiones: String,
        },
        Espalda: {
          Foto: String,
          nombre: String,
          Descrpcion: String,
          Beneficios: String,
          Repeticiones: String,
        },
      }
    
})


module.exports = mongoose.model('Cardio', Cardio);