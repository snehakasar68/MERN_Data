const express=require("express");
const mongoose=require("mongoose");
const CON_URL='mongodb://localhost/Aliendb';
const app=express();
mongoose.connect(CON_URL,{useNewUrlParser:true})
const con=mongoose.connection

con.on("open",function(){
    console.log("Connected with db...");
})
app.use(express.json())
const aliens=require('./Routes/aliens')
app.use("/",aliens)
app.listen(3000,()=>{
    console.log("Server started...");
})