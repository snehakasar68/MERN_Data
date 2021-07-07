const fs=require("fs")

const readStream=fs.createReadStream('myfile.txt')
const writeStream=fs.createWriteStream('output.txt')


readStream.on("end",()=>{
    console.log("File has been read successfully...!!!");
})
readStream.on("open",()=>{
    console.log("File read started...!!!");
})
writeStream.on("open",()=>{
    console.log("strated writting..!");
})
readStream.pipe(writeStream)