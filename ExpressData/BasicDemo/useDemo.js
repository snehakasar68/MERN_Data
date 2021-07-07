var express=require("express");
var app=express();
app.use(function(req,res,next){
    console.log('%s %s', req.method,req.url);
    next();
});
app.get("/",function(req,res){
    res.send("welcome to SevenMentor")
   
})
app.get("/help",function(req,res){
    res.send("how can i help you?")
   
})
app.listen(8000);
console.log("Server started......");