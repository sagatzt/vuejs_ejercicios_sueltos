const User = require('../models/User')

const daoUsers={}

//función para guardar un usuario
daoUsers.guardar = function guardar(body){
    let usuario = new User(body)
    console.log(usuario)
    usuario.save()
}

//función para listar usurios
daoUsers.listar = function listar(){
    return new Promise((resolved,reject)=>{
        User.find()
        .then(usuarios=>resolved(usuarios))
        .catch(err=>reject(err))
    })    
}

//función para eliminar usuario
daoUsers.eliminar = function eliminar(id){
    console.log("Estoy en dao: ", id)
    User.findOneAndRemove({_id:id},(data)=>{
        console.log("registro eliminado")
    })
}

module.exports=daoUsers