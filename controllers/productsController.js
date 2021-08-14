const productsModel = require("../models/productsModel")

module.exports = {
    getAll: async function(req, res, next) {
        try{
        const documents = await productsModel.find() //find es como el 'select * from'.
        res.status(200).json(documents)
        }catch(e){
            next(e)
        }
      },
    getById: async function(req, res, next) {
        try{
        const documents = await productsModel.findById(req.params.id).populate("categorias") //con 'findByID()' buscamos por ID o por el parametro definido (en este caso ID).
        res.status(200).json(documents)
        }catch(e){
            next(e)
        }
    },
    create: async function(req, res, next) {
        try{
            console.log(req.body)
            const product = new productsModel({ //con 'new' creamos.
                name: req.body.name,
                price: req.body.price,
                code: req.body.code,
                description: req.body.description,
                category: req.body.category,
                destacados: req.body.destacados
            })
            const document = await product.save()
            res.status(201).json(document);
        }catch(e){
            console.log(e)
                if(e.message){
                    return res.status(500).json({status:"error", message: e.message})
                }
             next(e)
        }
    },
    update: async function(req, res, next){
        try{
        console.log(req.params)
        console.log(req.body)
        const product = await productsModel.updateOne({_id:req.params.id}, req.body) //updateOne actualiza en base al id (en este caso), actualiza el body.
        res.json(product)
        }catch(e){
            next(e)
        }
    },
    delete: async function(req, res, next){
        try{
        console.log(req.params)
        console.log(req.body)
        const product = await productsModel.deleteOne({_id:req.params.id}, req.body) //deleteOne borra en base al id (en este caso), actualiza el body.
        res.json(product)
        }catch(e){
            next(e)
        }
    }
};

