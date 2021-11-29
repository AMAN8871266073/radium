const express = require('express');
const axios=require("axios")
const router = express.Router();
const coinmodel=require('../coinmodel.js')
router.get('/coin_data',async function(req,res){
        let options={
            method:'get',
            url:'http://api.coincap.io/v2/assets'
        }
        req.headers['authorization']='b59ef6aa-f22f-4874-9954-e132a1942c64'
        let response=await axios(options)
        let array=response.data.data
        array.sort(function(a,b){return a.changePercent24Hr-b.changePercent24Hr})
        
        for(let i=0;i<100;i++){
            let obj={
               'symbol':array[i].symbol,
              'name':array[i].name,
               'marketCapUsd':array[i].marketCapUsd,
                'priceUsd':array[i].priceUsd
                  }
                 await coinmodel.findOneAndUpdate({ symbol: array[i].symbol }, obj, { upsert: true, new: true } );
               
            }  
          
            console.log(array)
            res.send(array)
        
       // let sortedcoin=await coinmodel.find()
       // console.log(sortedcoin)
       // res.send({'message':saved})
    })

      module.exports = router;