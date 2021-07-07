var fs=require("fs")

let index=0;
const readStream=fs.createReadStream('./demo.txt')

readStream.on("open",()=>{
    console.log("Reading Started....");
})

readStream.on("end",()=>{
    console.log("Reading Completed....");
})
readStream.on("data",chunk=>{
    console.log("Chunk:"+ ++index);
    console.log("------------------------------");
    console.log(chunk);
    console.log("\n");

})