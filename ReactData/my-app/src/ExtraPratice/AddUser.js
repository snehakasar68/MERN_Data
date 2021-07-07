import React, { Component } from "react";
class AddUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uid: "",
      uname: "",
      uemail: "",
      user: JSON.parse(localStorage.getItem('users')),
      act:0,
      index:0
    };
  }
  handler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  submitHandler(e) {
    if(this.state.act==0){
      if(localStorage.getItem('users')==null)
      {
        var users=[];
        users.push({
          uid: this.state.uid,
          uname: this.state.uname,
          uemail: this.state.uemail,
      })
      localStorage.setItem('users',JSON.stringify(users))
      }
      else{
        var users=JSON.parse(localStorage.getItem('users'));
        users.push({
          uid: this.state.uid,
          uname: this.state.uname,
          uemail: this.state.uemail,
      })
      localStorage.setItem('users',JSON.stringify(users))
      }
    }
    else{
      var users=JSON.parse(localStorage.getItem('users'));
      var index=this.state.index;
      var uid=this.state.uid;
      var uname=this.state.uname;
      var uemail=this.state.uemail;
      var temp={uid,uname,uemail}
      users[index]=temp;
      localStorage.setItem('users',JSON.stringify(users))
    }
    this.setState({
      user:JSON.parse(localStorage.getItem('users')),
      uid:'',
      uname:'',
      uemail:'',
      act:0
    }) 
    e.preventDefault()
  };

  delHandler(e){
    var i=e.target.getAttribute('data-key');
    var temp=JSON.parse(localStorage.getItem('users'))
    temp.splice(i,1);
    this.setState({
      user:temp
    })
    localStorage.setItem('users',JSON.stringify(temp))
    e.preventDefault();
  }
  editHandler(e) {
    var i=e.target.getAttribute('data-key');
    var temp=JSON.parse(localStorage.getItem('users'))
    this.setState({
      uid:temp[i].uid,
      uname:temp[i].uname,
      uemail:temp[i].uemail,
      act:1,
      index:i
    })
    e.preventDefault();
  }
  dispBtn=()=>{
    if(this.state.act==0){
      return(
        <button className="btn btn-success" onClick={this.submitHandler.bind(this)}>
      Submit
    </button>
      )
    }
    else 
    return (
      <button className="btn btn-success" onClick={this.submitHandler.bind(this)}>
      Update
    </button>
    )
  }
  render() {
    return (
      <div className="container">
        <form>
          <div className="form-group">
            <label>Enter User ID:</label>
            <input
              type="text"
              placeholder="Enter User ID"
              className="form-control"
              name="uid"
              onChange={this.handler}
              value={this.state.uid}
            />
            <br></br>
          </div>
          <div className="form-group">
            <label>Enter Name:</label>
            <input
              type="text"
              placeholder="Enter Your Name"
              className="form-control"
              name="uname"
              onChange={this.handler}
              value={this.state.uname}
            />
            <br></br>
          </div>
          <div className="form-group">
            <label>Enter EmailID:</label>
            <input
              type="text"
              placeholder="Enter Your EmailID"
              className="form-control"
              name="uemail"
              onChange={this.handler}
              value={this.state.uemail}
            />
            <br></br>
          </div>
          <div>   
            {this.dispBtn()}
          </div>

          <table className="table">
            <tr>
              <th>User ID</th>
              <th>User Name</th>
              <th>EmailID</th>
              <th>Action</th>
            </tr>
            <tbody>
              {this.state.user.map((row, index) => (
                <tr key={index}>
                  <td>{row.uid}</td>
                  <td>{row.uname}</td>
                  <td>{row.uemail}</td>
                  <td>
                    <button
                      className="btn btn-primary"
                      onClick={this.editHandler.bind(this) } data-key={index}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={this.delHandler.bind(this)} data-key={index}  >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </form>
      </div>
    );
  }
}

export default AddUser;
