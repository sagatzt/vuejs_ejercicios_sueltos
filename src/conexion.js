const mongoose = require('mongoose')

mongoose.connect('mongodb://facturacion:1234@localhost:27017/pruebaFacturacion', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
})

module.exports=mongoose.connection