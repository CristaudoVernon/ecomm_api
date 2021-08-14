var express = require('express');
var router = express.Router();

const productsController = require("../controllers/productsController");


router.get('/', productsController.getAll); //getAll
router.get('/:id', productsController.getById); //getByID
router.post('/', (req,res,next)=>{req.app.validateUser(req,res,next)}, productsController.create); //create
router.put('/:id',(req,res,next)=>{req.app.validateUser(req,res,next)}, productsController.update); //update
router.delete('/:id', (req,res,next)=>{req.app.validateUser(req,res,next)}, productsController.delete); //delete


module.exports = router;

/*{
    "name":"",
    "price":,
    "code":"",
    "description":"",
    "category":"",
    "destacados":
}*/

/*categorias:
celular: 61101d93b7fc551288ee6b72
tv: 61101da5b7fc551288ee6b74
notebooks: 61101db3b7fc551288ee6b76
electrodomesticos: 61101dc5b7fc551288ee6b78
*/