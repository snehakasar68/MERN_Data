var events=require("events");
var EventEmitter=new events.EventEmitter();

var conHandler=function connected(){
    console.log("connection successfull..!!")
    EventEmitter.emit('data_received');
}
EventEmitter.on("connection",conHandler);

EventEmitter.on("data_received",function(){
    console.log("data recived successfully..!!");
})
EventEmitter.emit('connection');
console.log("program ended");