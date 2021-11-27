const jwt=require('jsonwebtoken')
const usermodel=require('./usermodel.js')
const middleware=require('./middleware')
const registerUser=async function(req,res){
    let details=req.body
    let userData=await usermodel.create(details)
    res.send(userData)
}





module.exports.registerUser=registerUser