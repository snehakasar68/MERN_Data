function emp(eid,ename,sal){
    this.eid=eid;
    this.ename=ename;
    this.sal=sal;
    this.disp=function(){console.log(this.eid+" "+this.ename+" "+this.sal)}
}

var e=new emp(101,"sneha",25000)
e.disp();
