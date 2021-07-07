import React, { Component } from "react";
import SaveIcon from '@material-ui/icons/Save'
import Button from "@material-ui/core/Button";
import CancelIcon from '@material-ui/icons/Cancel';
class EditContact extends Component {
  constructor(props) {
    super(props);
    const {id,name,email,mobile}=this.props.location.state.contact;
    this.state = {
      id,
     name,
     email,
     mobile,
     error:{}
    };
  }
  cancel=()=>{
    this.props.history.push("/");
  }
  update=(e)=>{
    if(this.isValidForm()){
      this.props.updateContactHandler(this.state);
    this.setState({ name: "", email: "" , mobile:""});
    this.props.history.push("/");
    }
    
  }
  isValidForm=()=>{
    const { name, email, mobile ,error} = this.state;
    let valid=true;
    if(!name){
      valid=false;
      error["ename"]="*Please Enter Name."
    }
    if(!email){
      valid=false;
      error["eemail"]="*Please Enter Email.";
    }
    if(!mobile){
      valid=false;
      error["emobile"]="*Please Enter Mobile Number."
    }
    this.setState({error})
    return valid;
  }
  
  render() {
    const { name, email, mobile ,error} = this.state;
    return (
      <div className="container">
        <br></br>
        <div className="form-group row">
          <label className="control-label col-4"> </label>
          <label className="control-label col-4"><b>Update Your Contact Details</b></label>
        </div> <br></br>
        <div className="form-group row">
          <label className="control-label col-2">
            <b>
              Name:
              <sup style={{ color: "red", fontSize: "15px" }}>
                <b>*</b>
              </sup>
            </b>
          </label>
          <div className="col-9">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your name"
              value={name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
            </div>
          </div><div className="form-group row">
          <label className="control-label col-2"></label>
            <label className="control-label col-2" style={{color:"red"}}><b>{error.ename}</b></label>
          </div><br></br>
          <div className="form-group row">
          <label className="control-label col-2">
            <b>
              Email:
              <sup style={{ color: "red", fontSize: "15px" }}>
                <b>*</b>
              </sup>
            </b>
          </label>
          <div className="col-9">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Email ID"
              value={email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
            </div>
          </div><div className="form-group row">
          <label className="control-label col-2"></label>
            <label className="control-label col-2" style={{color:"red"}}><b>{error.eemail}</b></label>
          </div><br></br>
          
      <div className="form-group row">
          <label className="control-label col-2">
            <b>
              Mobile No:
              <sup style={{ color: "red", fontSize: "15px" }}>
                <b>*</b>
              </sup>
            </b>
          </label>
          <div className="col-9">
            <input
              type="number"
              className="form-control"
              placeholder="Enter 10 digit mobile number"
              value={mobile}
              name="mobile"
              onChange={(e) => this.setState({ mobile: e.target.value })}
            />
          </div>
          </div><div className="form-group row">
          <label className="control-label col-2"></label>
            <label className="control-label col-3" style={{color:"red"}}><b>{error.emobile}</b></label>
          </div><br></br>
          <div className="form-group row">
          <label className="control-label col-2"></label>
          <div className="col-2">
          <Button
            variant="contained"
            color="secondary"
            startIcon={<SaveIcon />}
            onClick={this.update}
          >
            Update
          </Button>
          </div>
          <div className="col-2">
          <Button
            variant="contained"
            color="secondary"
            startIcon={<CancelIcon />}
            onClick={this.cancel}
          >Cancel     
          </Button>
          </div>       
          </div>
      </div>

    );
  }
}

export default EditContact;
