var server=require('http')

server.createServer((req,res)=>{
    if(req.url=='/'){
        res.writeHead(200,{"content-type":"text/html"})
        res.write("<b>Home Page</b>")
        res.end()
    }
    else if(req.url=='/about'){
        res.writeHead(200,{"content-type":"text/html"})
        res.write("<b>About Page</b>")
        res.end()
    }
    else if(req.url=='/contact'){
        res.writeHead(200,{"content-type":"text/html"})
        res.write("<b>contact Page</b>")
        res.end()
    }
    else if(req.url=='/menu'){
        res.writeHead(200,{"content-type":"text/html"})
        res.write("<b>Select your choice</b>")
        res.end()
    }
    else{
        res.write("<b>Invalid Request..!!</b>")
        res.end()
    }

}).listen(8002)
console.log("Server Started");