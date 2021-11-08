function chop(x)
{
    console.log(x.trim())
}
function upper(x)
{
    console.log(x.toUpperCase())
}
function lower(x)
{
    console.log(x.toLowerCase())
}
module.exports.resize=chop               //       export statment ;making function's scope global
module.exports.up=upper
module.exports.low=lower