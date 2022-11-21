const mongoose = require('mongoose');

const productoSchema=mongoose.Schema({
    nombre:{
        type:String,
        required : true
    },
    descripcion:{
        type:String,
        required: true
    },
    valor:{
        type:Number,
        required: true
    },
    cantidad:{
        type:Number,
        required: true
    },
    imagen:{
        type:String,
        required: true
    },
    
    
})

module.exports = mongoose.model("Producto",productoSchema)