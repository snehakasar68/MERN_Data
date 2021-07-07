import axios from 'axios';
import React,{useEffect,useState} from 'react'
import { useHistory, useParams } from 'react-router'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Link } from 'react-router-dom';
const EditUser=()=> {
     const {id}=useParams();
     const history=useHistory();
     const [error,setError]=useState({})
     const [user, setUser]=useState({
         name:"",
         email:"",
         mobile:""
     });
     const {name,email,mobile}=user;
     useEffect(() => {
         loadUSer();
     }, [])
     const loadUSer=async()=>{
        let res=await axios.get(`http://localhost:3001/usersDetails/${id}`)
        setUser(res.data)
     }
     const onChangeHandler=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})
     }
     const updateHandler=async(e)=>{
        e.preventDefault();
        if(isValidForm()){
        let res= await axios.put(`http://localhost:3001/usersDetails/${id}`,user)
        if(res.status=== 200||res.statusText==="OK")
           history.push("/");
        }
       
     }
     const isValidForm=()=>{
      let err={}
      let valid=true;
      if(!name){
        valid=false;
        err["ename"]="*Please Enter Name.";
      }
      if(!email){
        valid=false;
        err["eemail"]="*Please Enter Email.";
      }
      if(!mobile){
        valid=false;
        err["emobile"]="*Please Enter Mobile Number."
      }
      if (!mobile.match(/^[7-9]{1}[0-9]{9}$/)) {
        valid = false;
        err["emobile"] = "*Please enter valid Mobile number";
      }
    setError(err)
      return valid;
    }
    return (
        <div>
        <br></br>
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Update Information</h2>
        <form className="form-inline">
          <div className="form-group">
          <label style={{color:"red"}}><b>* All Fields are mandatory</b></label><br></br>
          <br></br>
          <label><b>Name:</b></label>
          <sup style={{ color: "red", fontSize: "15px" }}>
                  <b>*</b>
                </sup>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Name"
              name="name" 
              value={name}  
              onChange={(e)=>onChangeHandler(e)}
            />
          </div>
          <div className="form-group">
            <label style={{color:"red"}}><b>{error.ename}</b></label>
          </div>
          <div className="form-group">
          <label><b>Email:</b></label>
          <sup style={{ color: "red", fontSize: "15px" }}>
                  <b>*</b>
                </sup>
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Enter Your E-mail Address"
              name="email"
              value={email}
              onChange={(e)=>onChangeHandler(e)}
            />
          </div>
          <div className="form-group">
            <label style={{color:"red"}}><b>{error.eemail}</b></label>
          </div>
          <div className="form-group">
          <label><b>Mobile No:</b></label>
          <sup style={{ color: "red", fontSize: "15px" }}>
                  <b>*</b>
                </sup>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Phone Number"
              name="mobile"
              value={mobile}
              onChange={(e)=>onChangeHandler(e)}
            />
          </div>
          <div className="form-group">
            <label style={{color:"red"}}><b>{error.emobile}</b></label>
          </div><br></br>
          <Link
             className="btn btn-outline-primary mr-2 "
             to="/"  
            ><ArrowBackIcon/>
            Back
            </Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button className="btn btn-dark btn-block" onClick={e=>updateHandler(e)}>Update</button>            
        </form>
      </div>
     
    </div>
        </div>
   
    )
}
export default EditUser