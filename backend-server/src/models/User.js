const mongoose = require('mongoose');

const emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:[true,'Username is required!'],
        minLength:[3,'Username must be between 3 and 20 characters!'],
        maxLegnth:[20,'Username must be between 3 and 20 characters!'],
    },
    firstName:{
        type:String,
        required:[true,'First name is required!'],
        minLength:[3,'First name must be between 3 and 30 characters!'],
        maxLegnth:[30,'First Name must be between 3 and 30 characters!'],
    },
    lastName:{
        type:String,
        required:[true,'Last name is required!'],
        minLength:[3,'Last name must be between 3 and 30 characters!'],
        maxLegnth:[30,'Last name must be between 3 and 30 characters!'],
    },
    email:{
        type:String,
        required:[true,'Email is required!'],
        minLength:[3,'Email must be between 3 and 50 characters!'],
        maxLegnth:[50,'Email must be between 3 and 50 characters!'],
        validate: {
            validator: (value) => emailRegex.test(value),
            message: 'Invalid email format!',
          },
    },
    age:{
        type:Number,
        required:[true,'Age is required!'],
        min:[1,"Age must be between 1 and 100"],
        max:[100,"Age must be between 1 and 100"],
    },
    password:{
        type:String,
        required:[true,'Password is required!'],
    }
});

const User = mongoose.model('User',userSchema);

module.exports = User;