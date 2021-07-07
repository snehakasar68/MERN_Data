var server=require("http")
server.createServer((req,res)=>{
res.writeHead(200,{"content-type":"text/html"})
res.write("<b>Hello World...!!</b>")
res.end()
}).listen(8080);
console.log("Server is started at port 8080")

