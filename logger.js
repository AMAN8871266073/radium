function log(name)
{
    console.log("logging name is " +name);
}
function welcome()
{
    console.log("hello,welcome to my first node demo app")
}
const url="https:google.com"
module.exports.logname = log;
module.exports.welcomemsg = welcome;
module.exports.link = url;