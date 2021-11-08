const obj1=require('./logger.js')                          //import statments
const obj2=require('./util/helper.js')
const obj3=require('../validator/formattor.js')
const obj4=require('underscore')
const obj5=require('lodash')
    obj1.logname("aman tandon")
    obj1.welcomemsg()                                        //calling Function from other file
    console.log(obj1.link)
    console.log("__________________________________________________________________________________")
    obj2.date()
    obj2.month()
    obj2.info()
    console.log("___________________________________________________________________________________")
    obj3.resize(" Aman ")
    obj3.up("aman")
    obj3.low("AMAN")
   console.log(obj4.first([1,2,3,4,5,5],2))
   console.log('___________________________________________________________________________________')
    let months=["january","february","march","april","may","june","july","august","september","october","november","december"]
    console.log(obj5.chunk(months,3))
    console.log('____________________________________________________________________________________')
    let odd=[1,3,5,7,9,11,13,15,17,19]
    console.log(obj5.tail(odd))
    console.log('________________________________________________________________________________________')
    let a=[1,1,2,3,4]
    let b=[4,4,5,6,7,7,8]
    let c=[1,2,3,4,5]
    let d=[ 9,5,7,8,3,7]
    let e=[1,5,9,5,3,8]
    console.log(obj5.union(a,b,c,d,e))
    console.log('__________________________________________________________________________________')
    console.log(obj5.fromPairs([['a',2],['b',3]]))