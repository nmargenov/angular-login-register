const { login, register } = require('../managers/userManager');
const { mustBeGuest } = require('../middlewares/authMiddlewares');

const router = require('express').Router();

const paths = {
    login:'/login',
    register:'/register',
}

router.post(paths.login,mustBeGuest,async(req,res)=>{
    try{
        const username = req.body.username?.trim();
        const password = req.body.password?.trim();
        
        const token = await login(username,password);
        res.status(200).json(token);
    }catch(err){
        res.status(400).send({message:err.message});
    }
});

router.post(paths.register,mustBeGuest,async(req,res)=>{
    try{
        const username = req.body.username?.trim();
        const lastName = req.body.lastName?.trim();
        const firstName = req.body.firstName?.trim();
        const password = req.body.password?.trim();
        const rePassword = req.body.rePassword?.trim();
        const email = req.body.email?.trim();
        const age = req.body.age;
        const token = await register(username,firstName,lastName,rePassword,password,email,age);
        res.status(201).json(token);
    }catch(err){
        res.status(400).send({message:err.message});
    }
});

module.exports = router;