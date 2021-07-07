var fs=require("fs")

var streamRead=fs.createReadStream("./myfile.txt",{encoding:'utf-8'})

streamRead.on("data",(ch)=>{
console.log(ch);
})
streamRead.on("open",()=>{
    console.log("File reading starts.....");
})
streamRead.on("end",()=>{
        console.log("Reading complted..!!");
    })