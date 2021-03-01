const mongoose = require('mongoose')

mongoose.connect('mongodb://prueba:1234@localhost:27017/pruebadb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: true,
  useCreateIndex: true
})

module.exports=mongoose.connection