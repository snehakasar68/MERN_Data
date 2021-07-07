var buf1=new Buffer("abcd");
var buf2=new Buffer("abcd");
var res=buf1.compare(buf2);

if(res<0){
    console.log(buf1+" comes before "+buf2);
}
else if(res>0){
    console.log(buf1+" comes after "+buf2);
}
else{
    console.log(buf1+" is same as "+buf2);
}