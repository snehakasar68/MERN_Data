var fs=require("fs")
function fileSearch(filename){
    fs.readdir("./",(err,files)=>{
        if(err){
            console.log(err);
        }
        else {
            var file=files.filter((file)=>filename==file)
            console.log(file);
            fs.readFile(`./${file}`,(err,data)=>{
                if(err){
                    console.log(err);
                }
                else{
                    console.log(data.toString());
                }

            
            })
        }
    })
}
fileSearch("input.txt")