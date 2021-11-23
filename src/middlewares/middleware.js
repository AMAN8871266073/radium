const headerValidation = function (req, res, next) {
    let acceptHeaderValue = req.headers.isFreeApp;
    console.log(acceptHeaderValue)
   // if(acceptHeaderValue==true)
  //  {
  //  console.log('validation done succesfully')
   // next()
  //  }
  //  else
  //  {
   // res.send('validation failed')
   // }
}

module.exports.headerValidation = headerValidation