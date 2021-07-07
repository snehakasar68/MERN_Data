var EventEmitter=require("events")

 var emitter=new EventEmitter();

 var ringbell=()=>{
     console.log("ring ring ring");
 }

 emitter.on("doorOpen",ringbell)

 emitter.on("bellrings",function(msg){
     console.log(msg);
 })

 emitter.on("add",function(a,b){
     var sum=0;
     sum=a+b
     console.log("Addition is:"+sum);
 })
console.log("A");
 emitter.emit("doorOpen");
 console.log("B");
 emitter.emit("bellrings","Hello")
 console.log("C");
 emitter.emit("add",10,15)
 emitter.emit("doorOpen");