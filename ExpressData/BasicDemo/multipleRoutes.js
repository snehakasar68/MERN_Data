var express=require("express");
var app=express();
app.get("/",function(req,res,next){
    res.write("Hello")
    next();
})
app.get("/",function(req,res){
    res.write("World");
    res.end();
})
// app.listen(8000);
// console.log("Server started......");
// app.get("/",(req,res,next)=>{
//     res.write("Hello ");
//     next()
// },function(req,res){
//     res.write("World");
//     res.end();
// })
app.listen(8000);
console.log("Server started......");
 