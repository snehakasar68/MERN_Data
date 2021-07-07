import React, { Component } from "react";

class EmployeeCRUD extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      empId: "",
      empName: "",
      add:"",
      salary: "",
      gender:"",
      design: "Software Engineer",
      act:0,
      index:0,
      Employee:JSON.parse(localStorage.getItem('Employee'))   
    }
  }

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
   
  };
  sumbitHandler(e){
    if(this.state.act==0){
      if(localStorage.getItem('Employee')==null){
        var Employee=[];
        Employee.push({
          empId: this.state.empId,
          empName: this.state.empName,
          add:this.state.add,
          salary: this.state.salary,
          gender:this.state.gender,
         design:this.state.design,
        })
        localStorage.setItem('Employee',JSON.stringify(Employee))
      }
      else{
        var Employee=JSON.parse(localStorage.getItem('Employee'))
        Employee.push({
          empId: this.state.empId,
          empName: this.state.empName,
          add:this.state.add,
          salary: this.state.salary,
          gender:this.state.gender,
         design:this.state.design,
        })
        localStorage.setItem('Employee',JSON.stringify(Employee))
      }
    }
    else{
      var Employee=JSON.parse(localStorage.getItem('Employee'));
      var empId= this.state.empId;
      var empName=this.state.empName;
      var add=this.state.add;
      var salary=this.state.salary;
      var gender=this.state.gender;
      var design=this.state.design;
      var temp={empId,empName,add,salary,gender,design}

      Employee[this.state.index]=temp;
      localStorage.setItem('Employee',JSON.stringify(Employee))
    }
    this.setState({
      Employee:JSON.parse(localStorage.getItem('Employee')),
      empId: "",
      empName: "",
      add:"",
      salary: "",
      gender:"",
      design: "",
      act:0
     
    });
    e.preventDefault();
  };
  deleteHandler=(e,i)=>{
    var temp=JSON.parse(localStorage.getItem('Employee'))
    temp.splice(i,1)
    this.setState({
      Employee:temp
    })
    localStorage.setItem('Employee',JSON.stringify(temp))
  }
  editHandler=(e,index)=>{
    var temp=JSON.parse(localStorage.getItem('Employee'))
    let obj=temp.filter((ob)=>{
        return ob.empId==e;
    })
    console.log(obj);
    if(obj!=null){
      this.setState({
        act:1,
        index:index,
        empId:obj[0].empId,
        empName:obj[0].empName,
        add:obj[0].add,
        salary:obj[0].salary,
        gender:obj[0].gender,
        design:obj[0].design,
      })
    }
  }
  render() {
    const {Employee,empId,empName,salary,design}=this.state;
    return (
      <div>
        <div className="container">
          <form className="form-horizontal"><br></br>
          <div className="form-group row">
          <label className="control-label col-5">
              </label>
              <label className="control-label col-4" style={{color:"Red" ,fontSize:"20px"}}>
                <b>Employee Details</b>
              </label>
          </div><br></br>
            <div className="form-group row">
              <label className="control-label col-2">
                <b>Employee Name:</b>
              </label>
              <div className="col-10">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Employee Name"
                  name="empName"
                  value={empName}
                  onChange={this.changeHandler}
                />
                
              </div>
            </div>
            <br></br>
            <div className="form-group row">
              <label className="control-label col-2">
                <b>Employee Address:</b>
              </label>
              <div className="col-10">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Employee Name"
                  name="add"
                  value={this.state.add}
                  onChange={this.changeHandler}
                />
              </div>
            </div>
            <br></br>
            <div className="form-group row">
              <label className="control-label col-2">
                <b>Employee Salary:</b>
              </label>
              <div className="col-10">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Enter Salary"
                  name="salary"
                  value={salary}
                  onChange={this.changeHandler}
                />
              </div>
            </div>
            <br></br>
            <div className="form-group row">
              <lable className="col-2">
                <b>Select Gender:</b>
              </lable>
              <div className="radio col-10">
                <label className="col-3">
                  <input type="radio" name="gender" value="male" onChange={this.changeHandler} />
                  Male
                </label>
                <label className="col-7">
                  <input type="radio" name="gender" value="female" onChange={this.changeHandler}/>
                  Female
                </label>
              </div>
              <br></br>
              <br></br>
              <div class="form-group row">
                <label className="col-2">
                  <b>Select Designation:</b>
                </label>
                <div className="col-10">
                  <select className="form-control" name="design" onChange={this.changeHandler} value={design}>
                    <option value="software engineer" >Software Engineer</option>
                    <option value="Team Leader">Team Leader</option>
                    <option value="Project manager">Project manager</option>
                    <option value="Manager">Manager</option>
                  </select>
                </div>
              </div><br></br>
              <br></br>
              <div className="form-group row">
                <div className="col-2"></div>
                {this.state.act==0 ?  <div className="col-10 ">
        <button
          className="btn btn-primary"
          onClick={this.sumbitHandler.bind(this)}
        >
          Save
        </button>
      </div> :  <div className="col-10 ">
        <button
          className="btn btn-primary"
          onClick={this.sumbitHandler.bind(this)}
        >
          Update
        </button>
      </div>}
              </div>
            </div>
          </form>
          <br></br>
          <table className="table table-striped table-bordered">
            <tr>
              <th>Emp Id</th>
              <th>Name</th>
              <th>Salary</th>
              <th>Action</th>
            </tr>
            <tbody>
              {Employee !=null ? Employee.map((rows,index)=>(
                <tr key={rows.empId}>
                  <td>{rows.empId}</td>
                  <td>{rows.empName}</td>
                  <td>{rows.salary}</td>
                  <td>
                    <button className="btn btn-primary" onClick={()=>this.editHandler(rows.empId,index)}>Edit</button>
                    <button className="btn btn-danger" onClick={()=>this.deleteHandler(rows.empId,index)}>Delete</button>
                  </td>
                </tr>
              )):(<tr>
                <td  colspan="4" style={{color:"red"}}>Employee records not exists..!!!</td>
              </tr>)}
            </tbody>

          </table>
        </div>
      </div>
    );
  }
}

export default EmployeeCRUD;
