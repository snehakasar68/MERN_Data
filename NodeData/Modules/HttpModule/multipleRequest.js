var server=require('http')

var obj=server.createServer((req,res)=>{
    if(req.url=='/')
    {
        res.writeHead(200,{"content-type":"text/html"})
        res.write("<b>This is Home page</b>")
        res.end()
    }
    else if(req.url=='/student')
    {
        res.writeHead(200,{"content-type":"text/html"})
        res.write("<b>This is student page</b>")
        res.end()
    }
    else if(req.url=='/admin')
    {
        res.writeHead(200,{"content-type":"text/html"})
        res.write("<b>This is admin page</b>")
        res.end()
    }
    else {
        res.write("Invalid Required");
        res.end()
    }
        

})
obj.listen(8001)
console.log("Server Started")