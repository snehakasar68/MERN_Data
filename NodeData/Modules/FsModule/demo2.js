var fs=require('fs')

fs.appendFile('input.txt',"This is Appended content",function (error){
    if(error) throw error
    else
    console.log("Append successfully");
})