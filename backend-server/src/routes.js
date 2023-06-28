const router = require('express').Router();

const userController = require("./controllers/userController");

const paths = {
    users:'/api/users',
}

router.use(paths.users,userController);

router.all('*',(req,res)=>{
    res.status(404).send({message:'Not found!'});
})

module.exports = router;

