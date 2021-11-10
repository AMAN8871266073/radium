const express = require('express');

const router = express.Router();

router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});

router.get('/movies', function(req,res){
    let array=["ddlj","thor","fast and furious","drishyam"]
    res.send(array)
});

router.get('/movies/:index', function(req,res){
    let i=req.params.index
    let array1=["ddlj","thor","fast and furious","drishyam"]
    let j=array1.length
    if(i>=j)
    {
    res.send('movie not found')
    }
    else
     {
        res.send(array1[i])       
     }
});
router.post('/movies',function(req,res){
    console.log(req.body)
});
router.get('/films', function(req,res){
    let objfilms=[{"id":1,"name":"ddlj"},
    {"id":2,"name":"satya"},
    {"id":3,"name":"troy"},
    {"id":4,"name":"hera pheri"}]
    res.send(objfilms)
});
    router.get('/films/:filmsId',function(req,res){
    let i=req.params.filmsId;   
    let objfilms=[{"id":0,"error":"wrong selection"},
    {"id":1,"name":"ddlj"},
    {"id":2,"name":"satya"},
    {"id":3,"name":"troy"},
    {"id":4,"name":"hera pheri"}]
    if(i<objfilms.length)
    {
      res.send(objfilms[i])
    }
    else
    {
      res.send("movie not found")
    }
});
module.exports = router;