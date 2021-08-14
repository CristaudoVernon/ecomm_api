const mongoose = require("../bin/mongodb");
const errorMessage = require("../util/errorMessage");
const validators = require("../util/validators");
const bcrypt = require("bcrypt");

const usersSchema = new mongoose.Schema({
    username:{
        type:String,
        required:[true, errorMessage.GENERAL.campo_obligatorio],
        minlength:[4, errorMessage.GENERAL.minlength],
        maxlength:[10, errorMessage.GENERAL.maxlength],
        unique:[true, errorMessage.USERSWEB.userExist]
    },
    email:{
        type:String,
        required:[true, errorMessage.GENERAL.campo_obligatorio],
        unique:[true, errorMessage.USERSWEB.userExist]
    },
    password:{
        type:String,
        required:[true, errorMessage.GENERAL.campo_obligatorio],
        validate:{
            validator:function (v){
                return validators.isGoodPassword(v)
            },
            message: errorMessage.USERSWEB.passwordIncorrect
        }
    }
});
usersSchema.pre("save",function(next){
    this.password = bcrypt.hashSync(this.password, 10)
    next()
})
usersSchema.statics.findBydIdAndValidate = async function(id){
    const document = await this.findById(id);
    if(!document){
        return{
            error:true,
            message:"Usuario incorrecto o inexistente"
        }
    }
    return document
}

module.exports = mongoose.model("usuarios", usersSchema)
