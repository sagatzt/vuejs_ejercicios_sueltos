const mongoose = require('mongoose')
const {Schema} = mongoose

const schemaUsuario = new Schema({
    nombre: {type:String},
    apellidos: {type:String},
})

class User{



}

schemaUsuario.loadClass(User)
module.exports=mongoose.model('user',schemaUsuario)