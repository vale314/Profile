const express = require('express');
const router = new express.Router();

router.get('/grietas',(req,res,next)=>{
    res.status(200).json(
        [
        {
                    "comentario": "La verdad Se Encuentra En Muy Mal",
                    "createdOn": "0 de mes año",
                    "diagonalesLosa": "true",
                    "diagonalesPiso": "false",
                    "filters":{
                        "gravedad":"Baja",
                        "tipoGrieta":'Ambas',
                        "tipoHogar":"Casa",
                        "domicilio":"xxxxx",
                        "tamaño":"Chica",
                        "revisada": true
                    },
                    
                    "estadoDeObra": {
                      "desplomes": "true",
                      "desprendimiento": "true",
                      "golpeteo": "true",
                      "hundimientos": "true",
                      "mas20porciento": "true",
                      "pisosHuecos": "true",
                      "vibraciones": "true"
                    },
                    "files": [
                      "string"
                    ],
                    "geolocalizacion": {
                      "latitude": 50.55,
                      "longitude": 40.9
                    },
                    "id": 6546546546546546546,
                    "modifiedOn": "0 de mes año",
                    "paralelasPiso": "true",
                    "revisada": "true",
                    "revisiones": [
                      {
                        "comentarios": "esta muy mal",
                        "createdOn": "0 de mes año",
                        "diagonalesLosa": "true",
                        "diagonalesPiso": "true",
                        "modifiedOn": "0 de mes año",
                        "paralelasPiso": "true",
                        "peligroInminente": "true",
                        "revisadaPor": "Valentine"
                      }
                    ],
                    "tweet": "string",
                    "userId": "valentine"
                  },
                  {
                    "comentario": "La verdad Se Encuentra En Muy Mal",
                    "createdOn": "0 de mes año",
                    "diagonalesLosa": "true",
                    "diagonalesPiso": "false",
                    "filters":{
                        "gravedad":"Media",
                        "tipoGrieta":'Ambas',
                        "tipoHogar":"Edificio",
                        "domicilio":"yyyyy",
                        "tamaño":"Chica",
                        "revisada": true
                    },
                    
                    "estadoDeObra": {
                      "desplomes": "true",
                      "desprendimiento": "true",
                      "golpeteo": "true",
                      "hundimientos": "true",
                      "mas20porciento": "true",
                      "pisosHuecos": "true",
                      "vibraciones": "true"
                    },
                    "files": [
                      "string"
                    ],
                    "geolocalizacion": {
                      "latitude": 50.55,
                      "longitude": 40.9
                    },
                    "id": 6546546546546546546,
                    "modifiedOn": "0 de mes año",
                    "paralelasPiso": "true",
                    "revisada": "true",
                    "revisiones": [
                      {
                        "comentarios": "esta muy mal",
                        "createdOn": "0 de mes año",
                        "diagonalesLosa": "true",
                        "diagonalesPiso": "true",
                        "modifiedOn": "0 de mes año",
                        "paralelasPiso": "true",
                        "peligroInminente": "true",
                        "revisadaPor": "Valentine"
                      }
                    ],
                    "tweet": "string",
                    "userId": "valentine"
                  },
                  {
                    "comentario": "La verdad Se Encuentra En Muy Mal",
                    "createdOn": "0 de mes año",
                    "diagonalesLosa": "true",
                    "diagonalesPiso": "false",
                    "filters":{
                        "gravedad":"Alta",
                        "tipoGrieta":'Interna',
                        "tipoHogar":"Casa",
                        "domicilio":"wwwww",
                        "tamaño":"Grande",
                        "revisada": true
                    },
                    
                    "estadoDeObra": {
                      "desplomes": "true",
                      "desprendimiento": "true",
                      "golpeteo": "true",
                      "hundimientos": "true",
                      "mas20porciento": "true",
                      "pisosHuecos": "true",
                      "vibraciones": "true"
                    },
                    "files": [
                      "string"
                    ],
                    "geolocalizacion": {
                      "latitude": 50.55,
                      "longitude": 40.9
                    },
                    "id": 6546546546546546546,
                    "modifiedOn": "0 de mes año",
                    "paralelasPiso": "true",
                    "revisada": "true",
                    "revisiones": [
                      {
                        "comentarios": "esta muy mal",
                        "createdOn": "0 de mes año",
                        "diagonalesLosa": "true",
                        "diagonalesPiso": "true",
                        "modifiedOn": "0 de mes año",
                        "paralelasPiso": "true",
                        "peligroInminente": "true",
                        "revisadaPor": "Valentine"
                      }
                    ],
                    "tweet": "string",
                    "userId": "valentine"
                  },{
                    "comentario": "La verdad Se Encuentra En Muy Mal",
                    "createdOn": "0 de mes año",
                    "diagonalesLosa": "true",
                    "diagonalesPiso": "false",
                    "filters":{
                        "gravedad":"Alta",
                        "tipoGrieta":'Ambas',
                        "tipoHogar":"Terreno",
                        "domicilio":"aaaaa",
                        "tamaño":"Media",
                        "revisada": true
                    },
                    
                    "estadoDeObra": {
                      "desplomes": "true",
                      "desprendimiento": "true",
                      "golpeteo": "true",
                      "hundimientos": "true",
                      "mas20porciento": "true",
                      "pisosHuecos": "true",
                      "vibraciones": "true"
                    },
                    "files": [
                      "string"
                    ],
                    "geolocalizacion": {
                      "latitude": 50.55,
                      "longitude": 40.9
                    },
                    "id": 6546546546546546546,
                    "modifiedOn": "0 de mes año",
                    "paralelasPiso": "true",
                    "revisada": "true",
                    "revisiones": [
                      {
                        "comentarios": "esta muy mal",
                        "createdOn": "0 de mes año",
                        "diagonalesLosa": "true",
                        "diagonalesPiso": "true",
                        "modifiedOn": "0 de mes año",
                        "paralelasPiso": "true",
                        "peligroInminente": "true",
                        "revisadaPor": "Valentine"
                      }
                    ],
                    "tweet": "string",
                    "userId": "valentine"
                  },
                  {
                    "comentario": "La verdad Se Encuentra En Muy Mal",
                    "createdOn": "0 de mes año",
                    "diagonalesLosa": "true",
                    "diagonalesPiso": "false",
                    "filters":{
                        "gravedad":"Alta",
                        "tipoGrieta":'Ambas',
                        "tipoHogar":"Terreno",
                        "domicilio":"aaaaa",
                        "tamaño":"Media",
                        "revisada": true
                    },
                    
                    "estadoDeObra": {
                      "desplomes": "true",
                      "desprendimiento": "true",
                      "golpeteo": "true",
                      "hundimientos": "true",
                      "mas20porciento": "true",
                      "pisosHuecos": "true",
                      "vibraciones": "true"
                    },
                    "files": [
                      "string"
                    ],
                    "geolocalizacion": {
                      "latitude": 50.55,
                      "longitude": 40.9
                    },
                    "id": 6546546546546546546,
                    "modifiedOn": "0 de mes año",
                    "paralelasPiso": "true",
                    "revisada": "true",
                    "revisiones": [
                      {
                        "comentarios": "esta muy mal",
                        "createdOn": "0 de mes año",
                        "diagonalesLosa": "true",
                        "diagonalesPiso": "true",
                        "modifiedOn": "0 de mes año",
                        "paralelasPiso": "true",
                        "peligroInminente": "true",
                        "revisadaPor": "Valentine"
                      }
                    ],
                    "tweet": "string",
                    "userId": "valentine"
                  },
                  {
                    "comentario": "La verdad Se Encuentra En Muy Mal",
                    "createdOn": "0 de mes año",
                    "diagonalesLosa": "true",
                    "diagonalesPiso": "false",
                    "filters":{
                        "gravedad":"Alta",
                        "tipoGrieta":'Ambas',
                        "tipoHogar":"Terreno",
                        "domicilio":"aaaaa",
                        "tamaño":"Media",
                        "revisada":true
                    },
                    
                    "estadoDeObra": {
                      "desplomes": "true",
                      "desprendimiento": "true",
                      "golpeteo": "true",
                      "hundimientos": "true",
                      "mas20porciento": "true",
                      "pisosHuecos": "true",
                      "vibraciones": "true"
                    },
                    "files": [
                      "string"
                    ],
                    "geolocalizacion": {
                      "latitude": 50.55,
                      "longitude": 40.9
                    },
                    "id": 6546546546546546546,
                    "modifiedOn": "0 de mes año",
                    "paralelasPiso": "true",
                    "revisada": "true",
                    "revisiones": [
                      {
                        "comentarios": "esta muy mal",
                        "createdOn": "0 de mes año",
                        "diagonalesLosa": "true",
                        "diagonalesPiso": "true",
                        "modifiedOn": "0 de mes año",
                        "paralelasPiso": "true",
                        "peligroInminente": "true",
                        "revisadaPor": "Valentine"
                      }
                    ],
                    "tweet": "string",
                    "userId": "valentine"
                  },
                  {
                    "comentario": "La verdad Se Encuentra En Muy Mal",
                    "createdOn": "0 de mes año",
                    "diagonalesLosa": "true",
                    "diagonalesPiso": "false",
                    "filters":{
                        "gravedad":"Alta",
                        "tipoGrieta":'Ambas',
                        "tipoHogar":"Terreno",
                        "domicilio":"aaaaa",
                        "tamaño":"Media",
                        "revisada":true
                    },
                    
                    "estadoDeObra": {
                      "desplomes": "true",
                      "desprendimiento": "true",
                      "golpeteo": "true",
                      "hundimientos": "true",
                      "mas20porciento": "true",
                      "pisosHuecos": "true",
                      "vibraciones": "true"
                    },
                    "files": [
                      "string"
                    ],
                    "geolocalizacion": {
                      "latitude": 50.55,
                      "longitude": 40.9
                    },
                    "id": 6546546546546546546,
                    "modifiedOn": "0 de mes año",
                    "paralelasPiso": "true",
                    "revisada": "true",
                    "revisiones": [
                      {
                        "comentarios": "esta muy mal",
                        "createdOn": "0 de mes año",
                        "diagonalesLosa": "true",
                        "diagonalesPiso": "true",
                        "modifiedOn": "0 de mes año",
                        "paralelasPiso": "true",
                        "peligroInminente": "true",
                        "revisadaPor": "Valentine"
                      }
                    ],
                    "tweet": "string",
                    "userId": "valentine"
                  },
                ]
    )
})

module.exports = router