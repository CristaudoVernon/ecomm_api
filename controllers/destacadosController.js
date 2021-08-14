const destacadosModel = require('../models/destacadosModel');
const productsModel = require('../models/productsModel');

module.exports={
getAll: async function(req, res, next) {
    try{
    const documents = await productsModel.find({destacados: true})
    res.json(documents)
    }catch(e){
        next(e)
    }
  },
  create: async function(req, res, next){
    try{
        console.log(req.body)
        console.log(req.body.name)
        
        const document = new destacadosModel({
            name: req.body.name
        })

        const response = await document.save()
        res.json(response)
    }catch(e){
        next(e)
    }
}
}
