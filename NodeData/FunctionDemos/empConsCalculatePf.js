function employee(eid,ename,salary,pf,da,hra){
    this.eid=eid;
    this.ename=ename;
    this.salary=salary;

    this.calPfDaHr=function(){
        var pfAmt=(salary*(pf/100))
        var hraAmt=(salary*(hra/100));
        var daAmt=(salary*(da/100));
        console.log("Pf amount:"+pfAmt+" Hra:"+hraAmt+" DA:"+daAmt);
    }

}
var emp1=new employee(101,"sneha",10000,10,25,15);
console.log(emp1.calPfDaHr());