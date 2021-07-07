const fs=require("fs")
const http=require("http")

const server=http.createServer((req,res)=>{
    const rstream=fs.createReadStream("output.txt")
    // rstream.on("data",(chunk)=>{
    //     res.write(chunk)
    // })
    // rstream.on("end",()=>{
    //     res.end()
    // })
    // rstream.on("error",(err)=>{
    //     console.log(err);
    //     res.end("File not found..")
    // })
    rstream.pipe(res)
})
server.listen(3001)
console.log("server started...");