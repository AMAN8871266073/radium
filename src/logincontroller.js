const usermodel=require('./usermodel.js')
const login=async function(req,res){
    let name=req.body.userName
    let password=req.body.password
    let user=await usermodel.findOne({userName:name,password:password,isDeletedFlag:false})
    let status
    if(!user){
        res.sta
        res.send({message:"user doesnot exist"})
    }


}