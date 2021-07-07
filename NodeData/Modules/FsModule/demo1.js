var fs=require("fs")
fs.readFile('input.txt',(error,data)=>{
    if(error){
        console.log(error)
    }
    else{
       // console.log("Async data:"+data.toString());
        var lines=(data.toString()).split('\n');
        // console.log("number of lines:"+lines);
        var cnt=0; 
        lines.forEach(element => {
            cnt++;
           var warr=element.split(" ");
           var wcnt=0;
           warr.forEach(e=>{
               wcnt++;
           })
           console.log(wcnt);
        });
        console.log(cnt);
        }
})
fs.writeFile('input.txt','Im Added Content',function(error){
if(error) throw error
else
console.log("Successfully!!");
})
console.log("Im excute ");


// var data=fs.readFileSync('input.txt')
// console.log("sync data :"+data.toString());