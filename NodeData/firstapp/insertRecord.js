var mysql=require("mysql")

var con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"password",
    database:"bookdetails"

})

con.connect(function(err){
    if(err) throw err
    else{
        console.log("connection established...!!!");
        con.query("insert into book1  values(9,250,'rich dad',5)",function(err,res,fields){
            if(err) throw err
            else{
                console.log("number of rows affected:"+res.affectedRows);
            }
        })
    }
})