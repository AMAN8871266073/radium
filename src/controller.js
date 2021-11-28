const axios=require("axios")
let arr=[]
let temp=async function(req,res){
    try{
        let location=req.query.city
        let id=req.query.appId
    let options={
        method:"get",
        url:`http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${id}`
    }
    let data= await axios(options)
    let details={
        "city":data.data.name,
        "temp":data.data.main.temp
    }
      arr.push(details)
      
     for(let i=(arr.length-1);i>0;i--){
       if(arr[i].temp<arr[i-1].temp){
            let x=arr[i-1]
            arr[i-1]=arr[i]
            arr[i]=x
        }
        }
    res.send({'sorted':arr})   
}
catch(err){
    res.status(500).send({"error":err})
}
}
module.exports.temp=temp