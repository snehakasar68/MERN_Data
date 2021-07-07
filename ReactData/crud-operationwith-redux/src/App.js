import React, { Component } from "react";  
import logo from "./logo.svg";  
import "./App.css";  
import { getEmployee, addEmployee, editEmployee, deleteEmployee } from './Redux/action';  
import { connect } from 'react-redux';  
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import Button from "@material-ui/core/Button";
import SaveIcon from '@material-ui/icons/Save';
class App extends Component {  
  constructor(props) {  
    super(props);  
    this.state = {  
      id: 0,  
      employeeName: "",  
      employeeDepartment: ""  
    };  
  }  
  
  
  
  componentDidMount() {  
    this.props.getEmployee();  
  }  
  
  submitData = () => {  
    if (this.state.employeeName && this.state.employeeDepartment && !this.state.id) {  
      const newEmployee = {  
       // id: Math.floor(Math.random() * (999 - 100 + 1) + 100),  
       id: this.props.employees.length+1,
        employeeName: this.state.employeeName,  
        employeeDepartment: this.state.employeeDepartment,  
      };  
  
      this.props.addEmployee(newEmployee);  
    } else if (this.state.employeeName && this.state.employeeDepartment && this.state.id) {  
      const updatedDetails = {  
        id: this.state.id,  
        employeeName: this.state.employeeName,  
        employeeDepartment: this.state.employeeDepartment,  
      };  
  
      this.props.editEmployee(updatedDetails);  
    } else {  
      alert('Enter Employee Details.');  
    }  
  
    this.clearData();  
  }  
  
  editDetails = (data) => {  
    this.setState({  
      id: data.id,  
      employeeName: data.employeeName,  
      employeeDepartment: data.employeeDepartment  
    })  
  }  
  
  deleteEmployee = (id) => {  
    this.clearData();  
    if (window.confirm("Are you sure?")) {  
      this.props.deleteEmployee(id);  
    }  
  }  
  
  handleNameChange = (e) => {  
    this.setState({  
      employeeName: e.target.value  
    });  
  }  
  
  handleDepartmentChange = (e) => {  
    this.setState({  
      employeeDepartment: e.target.value  
    });  
  }  
  
  clearData = () => {  
    this.setState({  
      id: 0,  
      employeeName: "",  
      employeeDepartment: ""  
    });  
  }  
  
  render() {  
    return (  
      <div className="App">  
       <h1 className="App-title">CRUD opeartions Using Redux</h1>  
        <p className="App-intro">  
          <div className="leftsection">  
            Employee Name : <input type="text"  onChange={this.handleNameChange} value={this.state.employeeName}  placeholder="Employee Name" /> <br />  
            Employee Department :  <input  type="text" onChange={this.handleDepartmentChange} value={this.state.employeeDepartment} placeholder="Employee Department" /><br />  
            {this.state.id ? <button className="btn btn-success" onClick={this.submitData}>UPDATE</button> :   <Button
       onClick={this.submitData}
       variant="contained"
        color="primary"
        size="small"
       
        startIcon={<SaveIcon />}
      >
        Save
      </Button>}   <button  onClick={this.clearData}>CLEAR</button>  
          </div>  
          <div className="rightsection">  
            <table>  
              <thead>  
                <tr>  
                  <th>ID</th>  
                  <th>Name</th>  
                  <th>Depatment Name</th>  
                  <th>Action(s)</th>  
                </tr>  
              </thead>  
              <tbody>  
                {this.props.employees && this.props.employees.map((data, index) => {  
                  return <tr key={(data.id )}>  
                    <td>{(data.id)}</td>  
                    <td>{data.employeeName}</td>  
                    <td>{data.employeeDepartment}</td>  
                    <td><button className="btn btn-success" onClick={() => this.editDetails(data)}>EDIT</button> <button className="btn btn-danger" onClick={() => this.deleteEmployee(data.id)}> <DeleteForeverIcon /></button> <Button onClick={() => this.deleteEmployee(data.id)}
        variant="contained"
        color="secondary"
         startIcon={ <DeleteForeverIcon />}
      >
        Delete
      </Button>  </td>  
                  </tr>  
                })}  
              </tbody>  
            </table>  
          </div>  
        </p>  
      </div>  
    );  
  }  
}  
  
const mapStateToProps = state => ({  
  employees: state.employees  
});  
  
export default connect(mapStateToProps, { getEmployee, addEmployee, editEmployee, deleteEmployee })(App); 


{/* <button className="btn btn-primary" onClick={this.submitData}>ADD</button> */}