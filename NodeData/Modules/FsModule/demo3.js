var fs=require('fs')

fs.unlink('sample.txt',function (err){
    if(err) throw err
    else console.log("Deleted Successfully...!!!");
})