const express = require('express')
const rtMain = express.Router()
const daoUsers = require('../dao/daoUsers')
const fs = require('fs')

rtMain.get('/welcome',(req,res)=>{
    res.json({respuesta: 'ok'})
})

rtMain.post('/guardar',(req,res)=>{
    console.log(req.body)
    daoUsers.guardar(req.body)
    res.json({respuesta: 'ok'})
})

rtMain.get('/listar',(req,res)=>{
    daoUsers.listar()
        .then(usuarios=>{
            res.json(usuarios)
        })
})

rtMain.post('/eliminar',(req,res)=>{
    daoUsers.eliminar(req.body.id)
    res.json({respuesta: 'ok'})
})

rtMain.get('/lang/:language',(req,res)=>{
    let lang=req.params.language
    console.log(lang)
    fs.readFile(`./locales/${lang}.json`,'utf8',(err,data)=>{
        res.json(JSON.parse(data))
    })
})
module.exports= rtMain