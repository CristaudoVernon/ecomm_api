const usersModel = require("../models/usersModel");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

module.exports={
    create: async function (req, res, next){
        try{
            const user = new usersModel({
                username: req.body.username,
                email: req.body.email,
                password: req.body.password
            })
            const document = await user.save()

            res.json(document)
        }catch(e){
            if(e.message){
                return res.status(500).json({status:"error", message: e.message})
            }
            next(e)
        }
    },
    login: async function (req, res, next){
        try{
            const usuario = await usersModel.findOne({email:req.body.email})
            if (!usuario){
                return res.json({error:true, message:"Email incorrecto"})
            }
            if (bcrypt.compareSync(req.body.password, usuario.password)){
                const token = jwt.sign({userID:usuario._id}, req.app.get("secretKey"), {expiresIn:"1h"})
                res.json({error:false, message: "Login correcto", token:token})
            }else{
                res.json({error:true, message: "Contraseña incorrecta"})
                return
            }
        }catch(e){
            if(e.message){
                return res.status(500).json({status:"error", message: e.message})
            }
            next(e)
        }
    },
}