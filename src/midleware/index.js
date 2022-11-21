var cors = require ('cors');
const express = require('express');
const bodyParser =require('body-parser');
const passport =require('passport')

module.exports = (app)=>{
    app.use(cors());
    app.use(express.urlencoded({limit:"25mb",extended:true}));
    app.use(express(express.static("public")));
    app.use(bodyParser.json());
    app.use(passport.initialize());
};