module.exports={
    squre:function square(a){
        // console.log("Sqaure of "+a +" is:"+(a*a));
        return a*a
    },
    fact:function fact(a){
        let res=1;
        for(let i=1;i<=a;i++)
        res=res*i;
        console.log("Factorial of "+a+" is:"+res);
    },
    add:function add(a,b){
        console.log("Addition is:"+(a+b));
    }
    
}