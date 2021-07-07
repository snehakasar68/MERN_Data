import React, { Component } from "react";

class EmployeeCRUD1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fname: "",
      lname: "",
      mobno: "",
      email: "",
      state: "",
      city: "",
      cityArr:[],
      act: 0,
      index: 0,
      Emp: [],
      error:{},
      stateArr:[],
    };
  }

  componentDidMount(){
      this.setState({
          Emp:JSON.parse(localStorage.getItem('Emp')),
          stateArr:[
              {name:'Maharastra',city:["Pune","Mumbai","Nashik","Aurangabad","Nagpur"]},
              {name:'Karnataka' ,city:["Bangalore","Hubli","Mysore","Gulbarga","Vijaypura"]},
              {name:'AndraPradesh',city:["Visakhapatnam","Tirupati","Hyderabad","Vijaywada"]},
              {name:'TamilNadu',city:["Chennai","Coimbatore","Tirunelveli","Tiruchirappalli","Tiruvannamalai"]}
          ]
      })
  }
  chnageState=(e)=>{
    this.setState({
        state:e.target.value
    })
    const cities=this.state.stateArr.find(state=>state.name==e.target.value).city
    this.setState({
        cityArr:cities
    })
  }
  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  sumbitHandler(e){
    let emp=JSON.parse(localStorage.getItem('Emp')) 
    const { fname, lname, mobno, email, state, city } = this.state;
    if(emp==null){
        emp=[];
    }  
    if(this.isValidForm()){
      
        if(this.state.act===0){       
            emp.push({
                fname:fname,
                lname:lname,
                mobno:mobno,
                email:email,
                state:state,
                city:city
                
            })
            localStorage.setItem('Emp',JSON.stringify(emp))

        }
        else{
            var Employee=JSON.parse(localStorage.getItem('Emp'));
            var temp={ fname, lname, mobno, email, state, city } 
            Employee[this.state.index]=temp;
            localStorage.setItem('Emp',JSON.stringify(Employee))
        }    
        this.setState({
            Emp:JSON.parse(localStorage.getItem('Emp')),
            act:0,
            fname:"",
            lname:"",
            mobno:"",
            email:"",
            state:"",
            city:"",
            error:{},
        })
    }  
    e.preventDefault();
  }
  isValidForm(){
      let isValid=true;
      const { fname, lname, mobno, email, state, city,error } = this.state;
      if (!fname) {
        isValid = false;
        error["fname"] = "*First name cannot be empty";
      }
      if (!fname.match(/^[a-zA-Z]*$/)) {
        isValid = false;
        error["fname"] = "*First Name Should contain Alphabet only";
      }
      if (!lname) {
        isValid = false;
        error["lname"] = "*Last name cannot be empty";
      }
      if (!lname.match(/^[a-zA-Z]*$/)) {
        isValid = false;
        error["lname"] = "*Last Name Should contain Alphabet only";
      }
      if (!mobno) {
        isValid = false;
        error["mobno"] = "*Mobile Number cannot be empty";
      }
      if (!mobno.match(/^[7-9]{1}[0-9]{9}$/)) {
        isValid = false;
        error["mobno"] = "*Please enter valid Mobile number";
      }
      if (!email) {
        isValid = false;
        error["email"] = "*Email cannot be empty";
      }
      if (!state) {
        isValid = false;
        error["state"] = "*Please select State";
      }
      if (!city) {
        isValid = false;
        error["city"] = "*Please select City";
      }
      this.setState({
        error
      });
      return isValid;
  }
  editHandler=(i)=>{
    var temp=JSON.parse(localStorage.getItem('Emp')) 
      this.setState({
        act:1,
        index:i,
        fname:temp[i].fname,
        lname:temp[i].lname,
        mobno:temp[i].mobno,
        email:temp[i].email,
        state:temp[i].state,
        city:temp[i].city,
      })
    
  }
  deleteHandler=(i)=>{
    const confm=window.confirm("Are you sure to delete this record?")
    if(confm){
        var temp=JSON.parse(localStorage.getItem('Emp'))
    temp.splice(i,1)
    this.setState({
      Emp:temp
    })
    }
      localStorage.setItem('Emp',JSON.stringify(temp))
  }
  render() {
    const { fname, lname, mobno, email, state, city , Emp, error,msg} = this.state;
    return (
      <div className="container">
        <form className="form-horizontal">
          <br></br>
          <div className="form-group row">
            <label className="control-label col-5"></label>
            <label
              className="control-label col-4"
              style={{ fontSize: "25px" }}
            >
              <b>Employee Details</b>
            </label>
          </div>
          <div className="form-group row">
            <label
              className="control-label col-4"
              style={{ color:"red"}}
            >
              <b>*All Fields are Mandatory.</b>
            </label>
          </div>
          <br></br>
          <div className="form-group row">
            <label className="control-label col-2">
              <b>Employee Name:</b>
              <sup style={{ color: "red", fontSize: "15px" }}>
                  <b>*</b>
                </sup>
            </label>
            <div className="col-5">
              <input
                type="text"
                className="form-control"
                placeholder="Enter First Name"
                name="fname"
                value={fname}
                onChange={this.changeHandler}
              />
            </div>
            <div className="col-5">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Last Name"
                name="lname"
                value={lname}
                onChange={this.changeHandler}
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-2"></label>
            <div className="col-5" style={{ color: "red" }}>
              {error.fname}
            </div>
            <div className="col-5" style={{ color: "red" }}>
              {error.lname}
            </div>
          </div>
          <br></br>
          <div className="form-group row">
            <label className="control-label col-2">
              <b>Mobile No:</b>
              <sup style={{ color: "red", fontSize: "15px" }}>
                  <b>*</b>
                </sup>
            </label>
            <div className="col-10">
              <input
                type="number"
                className="form-control"
                placeholder="Enter 10 digit mobile number"
                name="mobno"
                value={mobno}
                onChange={this.changeHandler}
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-2"></label>
            <div className="col-5" style={{ color: "red" }}>
              {error.mobno}
            </div>
          </div>
          <br></br>
          <div className="form-group row">
            <label className="control-label col-2">
              <b>Email-Id:</b>
              <sup style={{ color: "red", fontSize: "15px" }}>
                  <b>*</b>
                </sup>
            </label>
            <div className="col-10">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Email-ID"
                name="email"
                value={email}
                onChange={this.changeHandler}
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-2"></label>
            <div className="col-5" style={{ color: "red" }}>
              {error.email}
            </div>
          </div>
          <br></br>
          <br></br>
          <div class="form-group row">
            <label className="col-2">
              <b>Select State:</b>
              <sup style={{ color: "red", fontSize: "15px" }}>
                  <b>*</b>
                </sup>
            </label>
            <div className="col-4">
              <select
                className="form-control"
                name="state"
                value={state}
                onChange={this.chnageState}
              >
              <option>Select State</option>
                <option value="Maharastra">Maharastra</option>
                <option value="Karnataka">Karnataka</option>
                <option value="AndraPradesh">Andra Pradesh</option>
                <option value="TamilNadu">TamilNadu</option>
              </select>
            </div>
            <lable className="col-2">
              <b>Select city:</b>
              <sup style={{ color: "red", fontSize: "15px" }}>
                  <b>*</b>
                </sup>
            </lable>
            <div className="col-4">
              <select
                className="form-control"
                name="city"
                value={city}
                onChange={this.changeHandler}
              >
                <option>---Select city---</option>
                {this.state.cityArr.map((cname)=>(
                     <option value={cname}>{cname}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="form-group row">
            <label className="col-2"></label>
            <div className="col-6" style={{ color: "red" }}>
              {error.state}
            </div>
            <div className="col-2" style={{ color: "red" }}>
              {error.city}
            </div>
          </div>
          <br></br>
          <br></br>
          <div className="form-group row">
            <div className="col-2"></div>
            {this.state.act == 0 ? (
              <div className="col-10 ">
                <button
                  className="btn btn-primary"
                  onClick={this.sumbitHandler.bind(this)}
                >
                  Save
                </button>
              </div>
            ) : (
              <div className="col-10 ">
                <button
                  className="btn btn-primary"
                  onClick={this.sumbitHandler.bind(this)}
                >
                  Update
                </button>
              </div>
              
            )}
            <div className="form-group row">
              <div className="col-2"></div>
              <div className="col-10"><h2>{msg}</h2></div>
            </div>
          </div>
        </form>
        <br></br>
        <table className="table table-striped table-bordered">
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Mobile no</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
            <tbody>
              {Emp !=null ? Emp.map((rows,index)=>(
                <tr key={index}>
                  <td>{rows.fname}</td>
                  <td>{rows.lname}</td>
                  <td>{rows.mobno}</td>
                  <td>{rows.email}</td>
                  <td>
                    <button className="btn btn-primary" onClick={()=>this.editHandler(index)}>Edit</button>
                    <button className="btn btn-danger" onClick={()=>this.deleteHandler(index)}>Delete</button>
                  </td>
                </tr>
              )):(<tr>
                <td  colspan="4" style={{color:"red"}}>Employee records not exists..!!!</td>
              </tr>)}
            </tbody>

          </table>
      </div>
    );
  }
}

export default EmployeeCRUD1;
