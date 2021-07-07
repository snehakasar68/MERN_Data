var buf1=new Buffer("Hello....");
var buf2=new Buffer("Welcome to node js");
var buf3=Buffer.concat([buf1,buf2]);

console.log(buf3.toString());
