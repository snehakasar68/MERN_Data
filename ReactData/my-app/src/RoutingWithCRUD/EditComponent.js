import React, { Component } from 'react'

class EditComponent extends Component {
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
          error: {},
        };
       this.loadData=this.loadData.bind(this)
      }
    
    componentDidMount(){
        this.loadData();
    }
    loadData(){
        let row=localStorage.getItem("Id")
        let users=JSON.parse(localStorage.getItem("RegisterUser"))
        let obj=users.filter((rows,index)=>{
                return row==index
        })
        
            this.setState({
             fname:obj[0].fname,
             mname:obj[0].mname,
             lname:obj[0].lname,
             email:obj[0]. email,
             mobno:obj[0].mobno,
             gender:obj[0].gender,
             dob:obj[0].dob,
             uname:obj[0].uname,
             pass:obj[0].pass,
            cpass:obj[0].pass
            })
    }
    changeHandler = (e) => {
        this.setState({
          [e.target.name]: e.target.value,
        });
      };
      updateHandler=(e)=>{
        let row=localStorage.getItem("Id")
        var users = JSON.parse(localStorage.getItem("RegisterUser"));
        const {
            fname,
            mname,
            lname,
            email,
            mobno,
            gender,
            dob,
            uname,
            pass
          } = this.state;
        var temp = { fname, mname, lname, email, mobno,gender, dob,uname,pass};
        users[row] = temp;
        localStorage.setItem("RegisterUser", JSON.stringify(users));
        this.props.history.push('/');
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
                required
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
                required
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
                required
                onChange={this.changeHandler}
              />
            </div>
          </div><br></br>
          <div className="form-group row">
            <label className="col-2"></label>
            <div className="col-3" style={{ color: "red" }}>
              {this.state.error.fname}
            </div>
            <div className="col-3" style={{ color: "red" }}>
              {this.state.error.mname}
            </div>
            <div className="col-3" style={{ color: "red" }}>
              {this.state.error.lname}
            </div>
          </div>
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
          </div>
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
              <button className="btn btn-primary" onClick={this.updateHandler}>
                Update
              </button>
            </div>
          </div>
        </form>
      </div>
        )
    }
}

export default EditComponent
