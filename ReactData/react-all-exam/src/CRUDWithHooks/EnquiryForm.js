import React,{useState} from 'react'
import SendIcon from '@material-ui/icons/Send';
import { Link, useHistory } from "react-router-dom";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import axios from 'axios';
const EnquiryForm=()=> {
  let history = useHistory();
  const [error, setError]=useState({});
   const [user, setUser] = useState({
    name: "",
    email: "",  
    mobile: ""
  });
  const onChangeHandler=(e)=>{
    setUser({...user, [e.target.name]:e.target.value})
  }
  
  const {name,email,mobile}=user;

  const submitHandler=async(e)=>{
    e.preventDefault();
    if(isValidForm()){
      const res=await axios.post(`http://localhost:3001/usersDetails`,user)
      if(res.status===201|| res.statusText==="Created")
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
        <h2 className="text-center mb-4">Enquiry Form</h2>
        <form>
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
          <label><b>Email-Id:</b></label>
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
             className="btn btn-outline-primary mr-2"
             to="/" 
            ><ArrowBackIcon/>
            Back
            </Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button className="btn btn-dark " onClick={e=>submitHandler(e)}>Send <SendIcon/></button>
        </form>
      </div>
    </div>

        </div>
    )
}

export default EnquiryForm