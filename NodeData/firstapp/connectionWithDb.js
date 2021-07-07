var mysql=require("mysql")

var con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"bookdetails"
})

con.connect(function(err){
    if(err)throw err;
    con.query("select * from book",function(err,res,fileds){
        if(err) throw err
        console.log(res);
    })
})