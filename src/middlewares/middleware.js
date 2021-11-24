const headerValidation = function (req, res, next) {
    let acceptHeaderValue = req.headers.isfreeapp;
    console.log(acceptHeaderValue)
    if(acceptHeaderValue)
     {
    console.log('validation done succesfully')
     next()
     }
     else
     {
    res.send('validation failed')
     }
}

module.exports.headerValidation = headerValidation