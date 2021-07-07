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
        con.query("update book1 set book_name='poor dad' where book_id='2'",function(err,res,fields){
            if(err) throw err
            else{
                console.log("number of rows affected:"+res.affectedRows);
            }
        })
    }
})