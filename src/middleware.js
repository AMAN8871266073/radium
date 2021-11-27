const usermodel = require("./usermodel")
const jwt = require("jsonwebtoken")
const check = async function (req, res, next) {
    try {
        let nam = req.body.userName
    let userPassword = req.body.userPassword
    let user = await usermodel.findOne({ userName: nam, password: userPassword, isDeletedFlag: 'false' })
    if (!user) {
        let error = {
            'status': 'false',
            'message': 'user doesnot exist'
        }
        res.status(404).send(error)
    }
    else {
        res.id = user._id
        next()
    }
}
catch(err){
    res.status(500).send({"server side error":err})
         }
}

const tokencheck = async function (req, res, next) {
try {
    let token = req.headers['x-auth-token']
    if (!token) {
        let flag = {
            'status': 'false',
            'message': 'token doesnot exist'
        }
        res.status(404).send({ "message": flag })
    }
    else {
        let decodedtoken = jwt.verify(token, "key")
        res.userId = decodedtoken.userId
        next()
    }
}
    catch(err){
        res.status(500).send({"message":err})
    }

}

const usercheck = async function (req, res, next) {
    try {
     let  id = req.params.userId       
    let token_id = res.userId
    if (id == token_id) {  
        let user=await usermodel.findById(id)
            if(!user){
                res.status(404).send({'status':'failed','flag':'user doesnot exist by this userId'})
            }
        next()
    }
    else {
        let error = {
            'status': 'false',
            'message': 'invalid userId'
        }
        res.status(404).send(error)
    }
}
catch(err){
    res.status(500).send({"error":err})
}

}


module.exports.check = check
module.exports.tokencheck = tokencheck
module.exports.usercheck = usercheck