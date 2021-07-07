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
        console.log("Connection established..!!");
        con.query("DELETE FROM book1 WHERE book_id='7'",function(err,res,fields){
            if(err) throw err
            console.log("Number of rows Deleted:"+res.affectedRows);
        })
    }
    

})