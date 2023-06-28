const jsonwebtoken = require('jsonwebtoken');

exports.sign = (payload,secret,options) =>{
    return new Promise((resolve,reject)=>{
        jsonwebtoken.sign(payload,secret,options,(err,token)=>{
            if(err){
                return reject(err);
            }else{
                resolve(token);
            }
        });
    });
};

exports.verify = (payload,secret) =>{
    return new Promise((resolve,reject)=>{
        jsonwebtoken.verify(payload,secret,(err,token)=>{
            if(err){
                return reject(err);
            }else{
                resolve(token);
            }
        });
    });
};