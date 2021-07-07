import React, { Component } from 'react'
import AuthServices from '../../Services/AuthServices'

class dashboard extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            currentUser:""
        }
    }
    componentDidMount(){
        this.setState({
            currentUser:AuthServices.getCurrentUser().name
        })
    }
    logoutHandler=(e)=>{
        e.preventDefault()
        AuthServices.logout()
        this.props.history.push("/")
    }
    render() {
        return (
            <div>
                <input type="text" value={this.state.currentUser}/>
                <button onClick={this.logoutHandler}>Logout</button>
            </div>
        )
    }
}

export default dashboard
