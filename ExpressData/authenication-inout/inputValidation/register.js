const validator=require("validator")
const isEmpty=require("is-empty")

module.exports=function validateRegistrationInputs(data){
    let errors={};
    data.name=!isEmpty(data.name)?data.name:"";
    data.email=!isEmpty(data.email)?data.email:"";
    data.password=!isEmpty(data.password)?data.password:""
    data.password2=!isEmpty(data.password2)?data.password2:"";

    if(validator.isEmpty(data.name)){
        errors.name="Name field is required..!!"
    }
    if(validator.isEmpty(data.email)){
        errors.name="Email is required.!"
    }else if(!validator.isEmail(data.email)){
        errors.email="Email is invalid"
    }
    if(validator.isEmpty(data.password)){
        errors.password="Password is required..!!"
    }

    if(validator.isEmpty(data.password2)){
        errors.password2="Confirm Password is required..!!"
    }
    if(!validator.isLength(data.password,{min:6,max:15})){
        errors.password="Password must be at least 6 character"
    }
    if(!validator.equals(data.password,data.password2)){
        errors.password2="Passwords must be match"
    }
    return {
        errors,
        isValid:isEmpty(errors)
    }

}