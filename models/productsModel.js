const mongoose = require("../bin/mongodb");
const errorMessage = require("../util/errorMessage");

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, errorMessage.GENERAL.campo_obligatorio]
    },
    price:{
        type:Number,
        required:[true, errorMessage.GENERAL.campo_obligatorio]
    },
    code:String,
    description:String,
    category:{
        type:mongoose.Schema.ObjectId,
        ref:"categorias",
        required: [true, errorMessage.GENERAL.campo_obligatorio]
    },
    destacados:{
        type:mongoose.Schema.Types.Boolean, //Al dar un post de productos darle un valor true a "destacados" para que ese producto sea destacado. Despues con un GET en /destacados devuelve solo los 'true'
        ref:"destacados",
        required: [true, errorMessage.GENERAL.campo_obligatorio]
    }
})

module.exports = mongoose.model("products", productSchema)