var express=require("express");
var app=express();

function checkLogin(){
    return true;
}
function logRequest(){
    console.log("New Request");
}
app.use((req,res,next)=>{
    logRequest();
    next();
})
app.use((req,res,next)=>{
    if(checkLogin()){
        next()
    }
    else{
        res.send("You are not logged in..!!!")
    }

})
app.get("/dashboard", function(req, res, next){
    res.send("This is the dashboard page");
});

app.get("/profile", function(req, res, next){
    res.send("This is the dashboard page");
});
app.listen(8000);
console.log("Server strated..");
