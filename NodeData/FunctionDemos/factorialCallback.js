const findFact=(num)=>{
    var fact=1
    setTimeout(()=>{
        for(let i=1;i<=num;i++){
            fact=fact*i;
        }
        console.log("factorial of "+num+" is:"+fact)
    },3000)  
}
findFact(5)