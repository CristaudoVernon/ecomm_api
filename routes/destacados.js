var express = require('express');
var router = express.Router();

const destacadosController = require('../controllers/destacadosController');
const productsController = require('../controllers/productsController');



router.get('/', destacadosController.getAll);
router.post('/', destacadosController.create);


module.exports = router;