const router = require('express').Router();

const paths = {
    login:'/login',
    register:'/register',
}

router.post(paths.login,async(req,res)=>{
    res.send('login works');
});


router.post(paths.register,async(req,res)=>{
    res.send('register works');
});

module.exports = router;