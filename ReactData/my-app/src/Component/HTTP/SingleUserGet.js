import React, { Component } from 'react'
import axios from 'axios'
class SingleUserGet extends Component {
    state={
        users:{},
        msg:null,
        userId:""
    }
    fetchRecord(){
        const {userId}=this.state
        axios.get(`https://reqres.in/api/users/${userId}`)
        .then(response=>{
            console.log(response.data.data);
            this.setState({users:response.data.data,msg:null})
        }).catch(error=>{
            console.log("in catch");
            this.setState({msg:"Record Not available..!!!!"})
        })
    }
    changeHandler=(e)=>{
        this.setState({userId:e.target.value})
    }
    serchHandler=(e)=>{
        this.fetchRecord()
        e.preventDefault()
    }
    render() {
        const{msg,users,userId}=this.state
        return (
            <div>
                <input type="number" name="userId" value={userId}
                onChange={this.changeHandler} placeholder="Enter 1-6 number"/>
                <button onClick={this.serchHandler}>Serach Details</button><br></br>
                {msg==null?(<React.Fragment>
                <h2>First Name:{users.first_name}</h2>
                <h3>Last Name:{users.last_name}</h3>
                <p>Email:{users.email}</p>
                </React.Fragment>):(<h1 style={{color:"red"}}>"Record not available...!!!"</h1>)}
            </div>
        )
    }
}

export default SingleUserGet