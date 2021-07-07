import React, { Component } from "react";
import HomePage from "./HomePage";

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fname: "",
      mname: "",
      lnme: "",
      email: "",
      mobno: "",
      gender: "",
      dob: "",
      uname: "",
      pass: "",
      cpass: "",
      user: [],
      error: {},
    };
    this.register = this.register.bind(this);
  }

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  register(e) {
    alert("In Reg")
    let user=JSON.parse(localStorage.getItem('RegisterUser')) 
    if(user==null){
      user=[];
    }
    if (this.isValidForm()) {
      alert("is valide")
      alert(this.isValidForm())
      const { fname, mname, lname, email, mobno, gender, dob, uname, pass } =
        this.state;
        user.push({
          fname,
          mname,
          lname,
          email,
          mobno,
          gender,
          dob,
          uname,
          pass,
        });
        localStorage.setItem("RegisterUser", JSON.stringify(user));      
    }
    e.preventDefault();
    this.props.history.push('/');
    
  }
  isValidForm() {
    const {
      fname,
      mname,
      lname,
      email,
      mobno,
      gender,
      dob,
      uname,
      pass,
      cpass,
      error,
    } = this.state;
    let isValid = true;
    if (!fname) {
      isValid = false;
      error["fname"] = "*First name cannot be empty";
    }
    if (!fname.match(/^[a-zA-Z]*$/)) {
      isValid = false;
      error["fname"] = "*First Name Should contain Alphabet only";
    }
    if (!mname) {
      isValid = false;
      error["mname"] = "*Middle name cannot be empty";
    }
    if (!mname.match(/^[a-zA-Z]*$/)) {
      isValid = false;
      error["mname"] = "*Middle Name Should contain Alphabet only";
    }
    if (!lname) {
      isValid = false;
      error["lname"] = "*Last name cannot be empty";
    }
    if (!lname.match(/^[a-zA-Z]*$/)) {
      isValid = false;
      error["lname"] = "*Last Name Should contain Alphabet only";
    }
    if (!email) {
      isValid = false;
      error["email"] = "*Email-ID cannot be empty";
    }
    if (!mobno) {
      isValid = false;
      error["mobno"] = "*Mobile Number cannot be empty";
    }
    if (!mobno.match(/^[7-9]{1}[0-9]{9}$/)) {
      isValid = false;
      error["mobno"] = "*Please enter valid Mobile number";
    }
    if (!uname) {
      isValid = false;
      error["uname"] = "*User Name cannot be empty";
    }
    if (!pass) {
      isValid = false;
      error["pass"] = "*Password cannot be empty";
    }
    this.setState({
      error
    });
    return isValid;
  }
  render() {
    const {
      fname,
      mname,
      lname,
      email,
      mobno,
      gender,
      dob,
      uname,
      pass,
      cpass,
      error
    } = this.state;
    return (
      <div className="container">
        <form className="form-horizontal">
          <br></br>
          <div className="form-group row">
            <label className="control-label col-2">
              <b>
                Full Name:
                <sup style={{ color: "red", fontSize: "15px" }}>
                  <b>*</b>
                </sup>
              </b>
            </label>
            <div className="col-3">
              <input
                type="text"
                className="form-control"
                placeholder="Enter First Name"
                value={fname}
                name="fname"
                onChange={this.changeHandler}
              />
            </div>
            <div className="col-3">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Middle Name"
                value={mname}
                name="mname"
                onChange={this.changeHandler}
              />
            </div>
            <div className="col-3">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Last Name"
                value={lname}
                name="lname"
                onChange={this.changeHandler}
              />
          </div>

          </div>
          
          <div className="form-group row">
            <label className="col-2"></label>
            <div className="col-3" style={{ color: "red" }}>
              {error.fname}
            </div>
            <div className="col-3" style={{ color: "red" }}>
              {error.mname}
            </div>
            <div className="col-3" style={{ color: "red" }}>
              {error.lname}
            </div>
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
                id="email"
                placeholder="Enter Email ID"
                value={email}
                name="email"
                onChange={this.changeHandler}
              />
            </div>
          </div><br></br>
          <div className="form-group row">
            <label className="col-2"></label>
            <div className="col-5" style={{ color: "red" }}>
              {this.state.error.email}
            </div>
          </div>
          <br></br>
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
                type="text"
                className="form-control"
                placeholder="Enter 10 digit Mobile Number"
                value={mobno}
                name="mobno"
                onChange={this.changeHandler}
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-2"></label>
            <div className="col-3" style={{ color: "red" }}>
              {this.state.error.mobno}
            </div>
          </div>
          <br></br>
          <div className="form-group row">
            <lable className="col-2">
              <b>
                Select Gender:
                <sup style={{ color: "red", fontSize: "15px" }}>
                  <b>*</b>
                </sup>
              </b>
            </lable>
            <div className="radio col-10">
              <label className="col-3">
                <input
                  type="radio"
                  name="gender"
                  checked
                  value={gender}
                  onChange={this.changeHandler}
                />
                Male
              </label>
              <label className="col-7">
                <input
                  type="radio"
                  name="gender"
                  value={gender}
                  onChange={this.changeHandler}
                />
                Female
              </label>
            </div>
          </div>
          <br></br>
          <div className="form-group row">
            <label className="control-label col-2">
              <b>
                Date Of Birth:
                <sup style={{ color: "red", fontSize: "15px" }}>
                  <b>*</b>
                </sup>
              </b>
            </label>
            <div className="col-3">
              <input
                type="date"
                className="form-control"
                value={dob}
                name="dob"
                onChange={this.changeHandler}
              />
            </div>
          </div>
          <br></br>
          <div className="form-group row">
            <label className="control-label col-2">
              <b>
                User Name:
                <sup style={{ color: "red", fontSize: "15px" }}>
                  <b>*</b>
                </sup>
              </b>
            </label>
            <div className="col-9">
              <input
                type="text"
                className="form-control"
                placeholder="Enter your user name"
                value={uname}
                name="uname"
                onChange={this.changeHandler}
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-2"></label>
            <div className="col-3" style={{ color: "red" }}>
              {this.state.error.uname}
            </div>
          </div>
          <br></br>
          <div className="form-group row">
            <label className="control-label col-2">
              <b>
                Password:
                <sup style={{ color: "red", fontSize: "15px" }}>
                  <b>*</b>
                </sup>
              </b>
            </label>
            <div className="col-3">
              <input
                type="text"
                className="form-control"
                placeholder="Password"
                value={pass}
                name="pass"
                onChange={this.changeHandler}
              />
            </div>
            <div className="col-1"></div>
            <label className="control-label col-2">
              <b>
                Confrim Password:
                <sup style={{ color: "red", fontSize: "15px" }}>
                  <b>*</b>
                </sup>
              </b>
            </label>
            <div className="col-3">
              <input
                type="text"
                className="form-control"
                placeholder="Confirm Password"
                value={cpass}
                name="cpass"
                onChange={this.changeHandler}
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-2"></label>
            <div className="col-3" style={{ color: "red" }}>
              {this.state.error.pass}
            </div>
          </div>
          <br></br>
          <div className="form-group row">
            <label className="control-label col-2"></label>
            <div className="col-3">
              <button className="btn btn-primary" onClick={this.register}>
                Add
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Register;
