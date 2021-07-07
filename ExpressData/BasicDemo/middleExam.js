var express=require("express");
var app=express();
function checkLogin(){
    return false;
}
function logRequest(){
    console.log("New request");
}
app.get("/dash",function(req,res,next){
    logRequest();
    if(checkLogin()){
        res.send("This is dashboared page..!!");
    }
    else{
        res.send("You are not loggined..!!")
    }
})
app.get("/profile",function(req,res,next){
    logRequest();
    if(checkLogin()){
        res.send("This is dashboared page..!!");
    }
    else{
        res.send("You are not loggined..!!")
    }
})
app.listen(8000);
console.log("server Started...!!");