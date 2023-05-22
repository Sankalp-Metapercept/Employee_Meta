const User = require('../Model/UserModel')

exports.register = async(req,res)=>{
    console.log(req.body);

   return res
   .status(200)
   .json({
    message: 'User registered successfully',
    Credentials: req.body
   })
}