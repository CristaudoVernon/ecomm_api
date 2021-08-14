const mongoose = require("../bin/mongodb");

const categorySchema = new mongoose.Schema({
    name:String
});

categorySchema.statics.findBydIdAndValidate = async function(id){
    const document = await this.findById(id);
    if(!document){
        return{
            error:true,
            message:"Categoria inexistente"
        }
    }
    return document
}

module.exports = mongoose.model("categorias", categorySchema)