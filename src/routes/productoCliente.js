
const express = require('express');

const productoSchema = require('../models/productosschema');
const carritoSchema = require('../models/carrito')

const routes = express.Router();

//Obtener lista productos
routes.get('/producto/cliente/lista',(req,res)=>{
    productoSchema.find().then((data)=>{
        res.json(data)
    }).catch((error)=>{
        res.json(error)
    })
})

//Añadir productos al carrito
function Arrayproduct(Arrayproduct) {

    
    

    setTimeout(() => {
        console.log("1 Segundo esperado")
      }, 5000);
    console.log("esto es el resultado: "+result)
    return result

}

routes.get('/productos/cliente/carrito',(req,res)=>{

    const productos =req.body;
    
    //console.log(productos.productos[0])
    for (let index = 0; index < productos.productos.length; index++) {
        console.log(productos.productos[index])
        productoSchema.findById(productos.productos[index]).then((data)=>{
            let result =[];
            result.push(data)
            res.send(result)
            
        }).catch((error)=>{
            res.json(error)
        })
        
    }
    //var json =JSON.stringify(carrito)
    

})

routes.post('/prueba',(req,res)=>{
    const nuevoCarrito =req.body;
    
    for (let index = 0; index < nuevoCarrito.productos.length; index++) {
        productoSchema.findById(nuevoCarrito.productos[index]).then((data)=>{

        
        }).catch((error)=>{
            res.json(error)
        })
        
    }
    const carritoDB = carritoSchema(nuevoCarrito);

    carritoDB.save().then((data)=>{
        res.json(data)
    }).catch((error)=>{
        console.log(error)
        res.json(error)
    })

})

module.exports=routes;