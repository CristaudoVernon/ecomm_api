var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("<h1> Trabajo Practico Final </h1> <h2> - /destacados (GET) para retornar productos destacados (Introducirlos previamente por POST en /productos como 'boolean':true) <br> - /productos por metodos POST, GET, POST, PUT y DELETE <br> - /users por metodo GET ,y /users/login y /users/registro (ambos por POST) </h2>")
});

module.exports = router;