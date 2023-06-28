const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

exports.expressConfig = (app) =>{
    app.use(express.urlencoded({extended:false}));
    app.use(express.json());
    app.use(bodyParser.json());
    app.use(cors());
};