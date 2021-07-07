function student(roll,name,marks){
    this.roll=roll;
    this.name=name;
    this.marks=marks;
    this.calPercentage=function(){
        var total=marks.reduce((a,b)=>a+b)
        return (total/400)*100;
    }
    this.calGrade= function(){
        var per=this.calPercentage()
        var res="";
        if(per>=90)
        res="A";
        else if(per>=80)
        res="B"
        else if(per>=60)
        res="C"
        else if(per>=35)
        res="D"
        else
        res="Fail"
        return res;
    }
    this.disp=function(){
        console.log("Name:"+this.name+" Percentage is:"+this.calPercentage()+" Grade is:"+this.calGrade());
    }
}
var stud=new student(1,"sneha",[75,70,65,40])
stud.disp()