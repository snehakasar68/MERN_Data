const express=require("express");
const mongoose=require("mongoose");
const db=require("./config/db.config").url;
const passport=require("passport")
const users=require("./routes/user-routes")
const cors=require("cors")
const app=express();
var corsOptions = {
    origin: "http://localhost:3000"
  };
  
  app.use(cors(corsOptions));

app.use(express.urlencoded({extended:false}))
app.use(express.json())
//connection with database
mongoose.connect(db,{useNewUrlParser:true})
.then(()=>{
    console.log("Connected to database");
}).catch(err=>{
    console.log(err);
})

app.use(passport.initialize());
require("./config/passport")(passport)

app.use("/users",users)

app.listen(4000,()=>{
    console.log("server started on port 4000..!!");
})