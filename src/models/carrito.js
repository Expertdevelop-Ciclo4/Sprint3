const mongoose = require('mongoose');

const carritoSchema=mongoose.Schema({
    productos:{
        type:Array,
        required : true
    },
    total:{
        type:Number,
        required: true
    }
    
    
})

module.exports = mongoose.model("Carrito",carritoSchema)