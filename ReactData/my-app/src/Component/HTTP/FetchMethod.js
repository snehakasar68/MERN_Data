import React, { Component } from 'react'

class FetchMethod extends Component {
    state = {
             users:[],
             error:null,
             isloading:true
        }
    fetchUser(){
        fetch(`https://jsonplaceholder.typicode.com/users`)
        .then(response=>response.json()).then((data)=>{this.setState({users:data,isloading:false})})
        .catch(error=>{this.setState({error,isloading:false})})
    }
    componentDidMount(){
        this.fetchUser();
    }
    render() {
        const {isloading,users,error}=this.state
        return (
            <React.Fragment>
                <h1>Random user</h1>
                {error?<p>{error.message}</p>:null}
                <table className="table table-striped">
                    <thead>
                        <th>User Name</th>
                        <th>Name</th>
                        <th>Email</th>
                    </thead>
                    <tbody>
                    {!isloading?(users.map(user=>{
                    const {username,name,email}=user
                        return (
                            <tr>
                                <td>{username}</td>
                                <td>{name}</td>
                                <td>{email}</td>
                            </tr>
                        )
                })):<h2>Loading....</h2>}
                    </tbody>
                </table>
               

            </React.Fragment>
        )
    }
}

export default FetchMethod
