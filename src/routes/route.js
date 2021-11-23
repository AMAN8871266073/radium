const express = require('express');
const router = express.Router();
const middleware=require("../middlewares/middleware.js")
const productcontroller=require("../controllers/productcontroller.js")

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

module.exports = router;