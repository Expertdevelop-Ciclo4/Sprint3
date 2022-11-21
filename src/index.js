const express = require ('express');
const mongoose = require('mongoose');
require ('dotenv').config();

const productoRoute=require('../src/routes/productoAdministrador')
const clienteRoute=require('../src/routes/productoCliente')


const app = express();
app.use(express.json());
app.use(productoRoute);  
app.use(clienteRoute);
app.listen(9000,()=>{
    console.log("Servidor conectado")
});

app.get("/",(req,res)=>{
    res.send("Iniciando programa")
})

mongoose.connect(process.env.mongoDbConnection)
.then(()=>{
    console.log("Conectado a MongoDB")
}).catch((error)=>{
    console.log(error)
});