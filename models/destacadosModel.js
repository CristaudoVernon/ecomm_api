const mongoose = require("../bin/mongodb");

const destacadosSchema = new mongoose.Schema({
    name:Boolean
});

destacadosSchema.statics.findBydIdAndValidate = async function(id){
    const document = await this.findById(id);
    if(!document){
        return{
            error:true,
            message:"El producto no es destacado"
        }
    }
    return document
}

module.exports = mongoose.model("destacados", destacadosSchema)