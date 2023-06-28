const router = require('express').Router();

const userController = require("./controllers/userController");
const { mustBeAuth } = require('./middlewares/authMiddlewares');

const paths = {
    users:'/api/users',
    testToken:'/api/testYourToken',
}

router.use(paths.users,userController);

router.get(paths.testToken,mustBeAuth,(req,res)=>{
    res.status(200).send({message:'Token is good'});
})

router.all('*',(req,res)=>{
    res.status(404).send({message:'Not found!'});
})

module.exports = router;

