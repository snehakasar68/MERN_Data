import React, { Component } from "react";
import { Link} from "react-router-dom";
import HomePage from "./HomePage";
import RegistrationForm from "./RegistrationForm";
 class LoginPage extends Component {
   constructor(props) {
     super(props)
   
     this.state = {
        uname:"",
        pass:""
     }
   }
   
     loginHndler=(e)=>{
        let users=JSON.parse(localStorage.getItem('user'));
        const {uname,pass}=this.state
        let obj=users.some((ob)=> {
          if(ob.uname==uname && ob.pass==pass)
          return true
          else 
          return false
        })
        if(obj==false)
          alert("Please Enter correct creditential")
        else
        this.props.history.push('/homepage')
        e.preventDefault();
     }
     changeHandler=(e)=>{
      this.setState({
        [e.target.name]:e.target.value
      })
     }
    render(){
        return (
            <div className="container" style={{backgroundImage:"./s3BcM.png"}}>
                <form className="form-horizontal">
                <br></br>
                <div className="form-group row">
                    <label className="control-label col-5">
                    </label>
                    <div className="col-6">
                      <h1> <b>Login Form</b></h1>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="control-label col-3">
                    </label>
                    <div className="col-6">
                      <input
                        type="text"
                        className="form-control"
                        id="email"
                        placeholder="Enter User Name"
                        value={this.state.uname}
                        name="uname" onChange={this.changeHandler}
                      />
                    </div>
                  </div><br></br>
                  <div className="form-group row">
                    <label className="control-label col-3">
                    </label>
                    <div className="col-6">
                      <input
                        type="text"
                        className="form-control"
                        id="email"
                        placeholder="Enter Password"
                        value={this.state.pass}
                        name="pass" onChange={this.changeHandler}
                      />
                    </div>
                  </div><br></br>
                  <div className="form-group row">
                    <label className="control-label col-4">
                    </label>
                    <div className="col-2">
                      <button className="btn btn-primary" onClick={this.loginHndler}>Login</button>
                    </div>
                    <div className="col-3"> 
                        <ul>
                          <Link to='/registration'>Create new account</Link>
                        </ul>            
                    </div>
                    </div>
                  </form>
              </div>
        
    );
    }
       
    
}
export default LoginPage