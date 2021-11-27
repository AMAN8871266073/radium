const usermodel=require('./usermodel.js')
const jwt=require('jsonwebtoken')
        const login=async function(req,res){
        let id=res.id
        let generatedtoken= jwt.sign({userId:id},"key")
        //console.log(generatedtoken)
        let data={
            'status':'true',
            'data':{
                'userId':id
            },
          'token':generatedtoken
        }
        res.setHeader('x-auth-token',generatedtoken)
        res.send(data )
        }

        const getuser=async function(req,res){
             let id=req.params.userId                                                  //Add an additional check to ensure that api is requesting the details of the logged-in user only. (
          let data=await usermodel.findById(id)
          res.send({'message':data})
         }
         const update=async function(req,res){
           let id=req.params.userId
           let new_email=req.body.email
           let data=await usermodel.findById(id).updateOne({$set:{'email':new_email}})
           res.send(data)
         }
    module.exports.login=login
    module.exports.getuser=getuser
    module.exports.update=update