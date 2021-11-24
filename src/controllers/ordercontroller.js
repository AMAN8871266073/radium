const mongoose=require('mongoose')
const ordermodel=require('../models/ordermodel.js')
const productModel = require('../models/productmodel.js')
const moment=require("moment")
const usermodel=require('../models/usermodel.js')
const createOrder=async function(req,res){
    let userId=req.body.userId
    let productId=req.body.productId
    let appTypeFree=req.isFreeAppUser
    let orderAmount
    let orderDate= moment().format()
    let user = await usermodel.findById({_id:userId})
    if(!user){
        res.send({message:"user doesnot exist,please create valid user"})
    }
    let product=await productModel.findById({_id:productId})
    if(!product){
        res.send({message:"product doesnot exist"})
    }
if(!appTypeFree && user.balance<product.price){
    res.send({message:"user  not have enough balance to purchase"})
}
if(appTypeFree){
    orderAmount=0
}
else{
    orderAmount=product.price
}

    let orderDetails={
        userId: userId,
        productId: productId,
        amount: orderAmount,
        isFreeAppUser:appTypeFree, 
        date:orderDate
    }
    let orderCreated=await ordermodel.create(orderDetails)
    console.log(orderCreated)
    //res.send(orderCreated)
    if(!appTypeFree){
        await usermodel.findOneAndUpdate({_id:userId},{balance:user.balance-product.price})
        res.send({"orderBooked":orderCreated})

    }
}
module.exports.createOrder=createOrder