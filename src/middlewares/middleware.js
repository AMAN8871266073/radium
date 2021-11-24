const headerValidation = function (req, res, next) {
    let acceptHeaderValue = req.headers.isfreeapp;
    console.log(acceptHeaderValue)
    let isFreeApp
    if(acceptHeaderValue)
     {
    console.log('validation done succesfully')
    if(acceptHeaderValue===false){
        isFreeApp=false
    }
    else{
        isFreeApp=true
    }
    req.isFreeAppUser=isFreeApp
    console.log(isFreeAppUser)
     next()
     }
     else
     {
    res.send('validation failed')
     }
}

module.exports.headerValidation = headerValidation