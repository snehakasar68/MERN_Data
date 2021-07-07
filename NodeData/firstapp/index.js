// var server=require("http")
// app=server.createServer((req,res)=>{
//     if(req=='/')
//     res.writeHead(200,{"content-type":"txt/html"})
//     res.write("Home page")
//     res.end();
// })
// app.listen(3001)
// console.log("Server started...");

var mysql=require('mysql')

var con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"password",
    database:"bookdetails"
})

con.connect(function(err){
    if(err)throw err;
    con.query("SELECT * FROM book",function(err,res,fileds){
        if(err) throw err
        console.log(res);
    })
})