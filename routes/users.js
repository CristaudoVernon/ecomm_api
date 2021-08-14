var express = require('express');
var router = express.Router();
const usersController = require("../controllers/usersController");


/* GET users listing. */

router.get('/', function(req, res, next) {
    res.send("<h1> /registro para alta de usuario y /login para validar (ambos por POST) </h2>")
  });

router.post('/registro', usersController.create); //Por metodo POST creamos el usuario.
router.post('/login', usersController.login) //Por metodo POST se logea al usuario.



module.exports = router;