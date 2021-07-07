const express=require("express");
const cors=require("cors")
const app=express();
var corsOptions = {
    origin: "http://localhost:3000"
  };
  
  app.use(cors(corsOptions));

  app.use(express.json());
  app.use(express.urlencoded({extended:true}));

  const db=require("./app/models");
  db.mongoose.connect(db.url,
    {
        useNewUrlParser:true,
        useUnifiedTopology:true})
  .then(()=>{
    console.log("Connected to database..!!");
  })
  .catch(err=>{
console.log("Cannot connect to the database"+err);
  })
require("./app/routes/tutorial.routes.js")(app)
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});