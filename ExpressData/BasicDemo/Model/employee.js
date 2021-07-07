const mongoose=require('mongoose');

const employeeSchema=new mongoose.Schema({
name:{
    type:String,
    required:true
},
// salary:{
//     type:Double,
//     required :true
// }

})
module.exports=employeeSchema