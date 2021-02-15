import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import mongoose from 'mongoose'

//mongoose.connect('mongodb://facturacion:1234@localhost:27017/pruebaFacturacion', {
//mongoose.createConnection('mongodb://facturacion:1234@localhost:27017/pruebaFacturacion',{
/*mongoose.startSession('mongodb://facturacion:1234@localhost:27017/pruebaFacturacion',{    
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}).then(data=>console.log("Conexión ok",data))
.catch(err=>console.log(err))*/
//.on('error',console.error.bind(console,"Error de conexion mongo"))
//.once('open',()=>console.log("Conexión mongo OK!!"))


createApp(App).use(store).use(router).mount('#app')
