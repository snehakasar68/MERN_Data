var http=require('http')
var fs=require('fs')
var url=require('url')

http.createServer((req,res)=>{
    var pathname=url.parse(req.url).pathname
    console.log("request for " +pathname+" received");
    console.log(pathname.substr(1));
    fs.readFile(pathname.substr(1),function(err,data){
        if(err){
            console.log(err);
            res.writeHead(404,{"content-type":'text/html'})
        }
        else{
            res.writeHead(200,{"content-type":"text/html"})
            res.write(data.toString())
        }
        res.end()
    })

}).listen(8000)
console.log("Server start");