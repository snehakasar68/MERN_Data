var express=require("express");
var app=express();
app.use(function frontCntrolMiddleWare(req,res,next){
console.log("(1) Front contol middle ware excuted");
next();
})
app.all("/hi",function frontCntrolMiddleWare(req,res,next){
    console.log("Checking");
    next();
})
app.all("*",function (req,res,next){
console.log("(2) all method and *  middle ware excuted");
next();
});
app.all("/hello",function frontCntrolMiddleWare(req,res,next){
console.log("(3) all method and /hello path middle ware excuted");
next();
});
app.use(function(req,res,next){
    console.log('(4) this frontControllerMiddlewareNotExecuted is not executed');
    next();
})
app.get('/hello', function(req, res){
    console.log('(5) route middleware for method GET and path patter "/hello", executed last and I do my stuff sending response');
    res.send('Hello World');
});
app.listen(8000);
console.log("Server strated..");