const mongoose = require('mongoose');
const { URI } = require('./settings');

exports.connectToDB = () =>{
    return mongoose.connect(URI);
};