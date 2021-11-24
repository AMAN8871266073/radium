const express = require('express');
const router = express.Router();
const middleware=require("../middlewares/middleware.js")
const productcontroller=require("../controllers/productcontroller.js")
const usercontroller=require('../controllers/usercontrollers.js')
const ordercontroller=require('../controllers/ordercontroller.js')

router.post('/test-me', function (req, res, next) {    
    console.log('Inside the route handler checking the header batch: '+req.headers['batch'])
    let host = req.headers['host']
    let hostWithName = host + " " + "Sabiha Khan"
    console.log('My response headers: '+res.getHeaderNames())
    res.setHeader('hostWithName', hostWithName)
    //res.send({data: 'I was in the handler'})
    res.finalData = {data: 'I was in the handler'}
    next()
});
router.post('/createProduct',middleware.headerValidation,productcontroller.productcontroller)
router.post('/createUser',middleware.headerValidation,usercontroller.createUser)
router.post('/createOrder',middleware.headerValidation,ordercontroller.createOrder)

module.exports = router;