import React, { Component } from 'react'
import DisplayMsg from './DisplayMsg'
import Login from './Login'
import Logout from './Logout'

class Home extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLogin:false
        }
    }
    isLoginClick(){
        
    }
    render() {
        if(this.state.isLogin){
            return(
                <>
                <DisplayMsg status={this.state.isLogin}/>
                <Logout/>
                </>
            )          
        }
        else{
            return(
                <>
                <DisplayMsg status={this.state.isLogin}/>
                <Login/>
                </>
            )
        }
    }
}

export default Home
