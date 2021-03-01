const express = require('express')
const app = express()
const rtMain = require('./routers/rtMain')

//base de datos
const conexion = require('./conexion')
conexion.on('error',console.error.bind(console,"Error de conexion mongo"))
conexion.once('open',()=>console.log("Conexión mongo OK!!"))

//configuracion handlebars


//middlewares
app.use(express.json())

//enrutadores
app.use('/api',rtMain)


app.listen(8081,(err)=>{
    if(err) console.log("Errores: ", err)
    console.log("Servidor backend arrancado en 8081")
})