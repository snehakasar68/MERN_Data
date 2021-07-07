const { json } = require("express");
var express=require("express");
var app=express();
app.use(express.json());
app.use(express.urlencoded({
    extended:true
}))
app.get('/index.html',function(req,res){
    res.sendFile(__dirname+"/"+"index.html")
})
app.post("/details",function(req,res){
    console.log("post request");
   response={
       fname:req.body.first_name,
       lname:req.body.last_name

   }
   console.log(response);
   res.end(JSON.stringify(response));
})
app.get("/",function(req,res){
    console.log("get request");
    res.send("Welome to express js")
})

app.delete("/delete",function(req,res){
    console.log("Delete request");
    res.send("Delete request...!!!")

})
app.get("/ab*cd",function(req,res){
    console.log("get pattern request");
    res.send("Pattern Matched")

})

var server=app.listen(3001,()=>{
    console.log("server started..!!!!");
})