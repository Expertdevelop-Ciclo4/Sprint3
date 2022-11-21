const e = require('express');
const express = require('express');
const { set } = require('mongoose');
const productoSchema = require('../models/productosschema');

const route = express.Router();

//Crear nuevos productos
route.post('/producto/crear',(req,res)=>{
    const nuevoProdcuto =req.body;
    const productoDB = productoSchema(nuevoProdcuto);

    productoDB.save().then((data)=>{
        res.json(data)
    }).catch((error)=>{
        console.log(error)
        res.json(error)
    })
})
//Obtener lista productos
route.get('/producto/lista',(req,res)=>{
    productoSchema.find().then((data)=>{
        res.json(data)
    }).catch((error)=>{
        res.json(error)
    })
})

//Obtener producto por id
route.get('/producto/findid/:id',(req,res)=>{
    let {id}=req.params;
    productoSchema.findById(id).then((data)=>{
        res.json(data)
    }).catch((error)=>{
        res.json(error)
    })
})

//Modificar productos
route.put('/producto/update/:id',(req,res)=>{
    let {id}=req.params;
    const {nombre,descripcion,valor,imagen}=req.body;

    productoSchema.updateOne({_id:id},{$set:{nombre,descripcion,valor,imagen}}).then((data)=>{
        res.json(data)
    }).catch((error)=>{
        res.json(error);
    })
})
//Modificar unidades producto
route.put('/producto/updateunidad/:id',(req,res)=>{
    let {id}=req.params;
    const {cantidad}=req.body;

    productoSchema.updateOne({_id:id},{$set:{cantidad}}).then((data)=>{
        res.json(data)
    }).catch((error)=>{
        res.json(error);
    })
})


module.exports=route;