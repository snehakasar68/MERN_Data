import React, { Component } from "react";
import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import BorderColorIcon from "@material-ui/icons/BorderColor";
import IconButton from "@material-ui/core/IconButton";
class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
    };
  }
  componentDidMount() {
    this.setState({
      users: JSON.parse(localStorage.getItem("RegisterUser")),
    });
  }
  clickHandler = (e) => {
    this.props.history.push('/register');
    e.preventDefault();
  };
  editHandler=(index)=>{
    window.localStorage.setItem("Id", index);
    this.props.history.push('/editcomponent');
  }
  deleteHandler=(index)=>{
    const confm=window.confirm("Are you sure to delete this record?")
    if(confm){
     var temp = JSON.parse(localStorage.getItem("RegisterUser"));
    temp.splice(index, 1);
    this.setState({
      users: temp,
    });
    localStorage.setItem("RegisterUser", JSON.stringify(temp));
    }   
  }
  render() {
    return (
      <div className="container">
        <label></label>
        <br></br>
        <div className="3">
          <Button
            variant="contained"
            color="secondary"
            startIcon={<AddIcon />}
            onClick={this.clickHandler}
          >
            Add User
          </Button>
        </div>
        <br></br>
        <table className="table table-striped">
          <thead>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>User Name</th>
            <th>Actions</th>
          </thead>
          <tbody>
            {this.state.users != null ? (
              this.state.users.map((rows, index) => (
                <tr key={index}>
                  <td>{rows.fname}</td>
                  <td>{rows.lname}</td>
                  <td>{rows.email}</td>
                  <td>{rows.uname}</td>
                  <td>
                    <IconButton
                      color="primary"
                      onClick={() => this.editHandler(index)}
                    >
                      <BorderColorIcon />
                    </IconButton>
                    <IconButton
                      aria-label="delete"
                      style={{ color: "red" }}
                      onClick={() => this.deleteHandler(index)}
                    >
                      <DeleteForeverIcon />
                    </IconButton>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colspan="5" style={{color:"red"}}>Users Details not available...!!!</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default HomePage;
