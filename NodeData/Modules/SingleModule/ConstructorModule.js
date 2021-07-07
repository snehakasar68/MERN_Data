module.exports=function(fname,lname){
        this.fname=fname,
        this.lname=lname,
        this.disp=function(){
            console.log(fname+" "+lname);
        }
    }
