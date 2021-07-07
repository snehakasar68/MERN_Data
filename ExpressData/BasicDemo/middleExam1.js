var express=require("express");
var app=express();
function checkLogin(){
    return false
}
function logRequest(){
    console.log("New Request");
}
app.get("/*",function(req,res,next){
    logRequest();
    next();
})
app.get("/*",function(req,res,next){
    if(checkLogin()){
        next();
    }
    else{
        res.send("You are not login...!!!")
    }
})
app.get("/dash",function(req,res,next){
    res.send("This is dashboard page...")
})
app.get("/profile",function(req,res,next){
    res.send("This is dashboard page...")
});
app.listen(8001)
console.log("server started....");