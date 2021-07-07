var buf1=new Buffer([10,20,30,40,50])
var buf2=Buffer.from([10,20,30,40,50])
console.log(buf1);
console.log(buf2);


var buf3=new Buffer("hi mern students!","utf-8")
var buf4=Buffer.from("hello welcome","utf-8")
console.log(buf3);
console.log(buf4);

var len=buf3.write(" hello all for node","utf-8")
console.log(len);

console.log(buf3.toString("utf-8",0,17));