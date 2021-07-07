var fs=require("fs")
var EventEmitter=require("events")
var emitter=new EventEmitter();

emitter.on("reading",()=>{
  var data=fs.readFileSync("demo.txt")
  console.log(data.toString());
})

emitter.on("completed",()=>{
    console.log("Reading is Completed..!!!");
})

emitter.emit("reading")
emitter.emit("completed")