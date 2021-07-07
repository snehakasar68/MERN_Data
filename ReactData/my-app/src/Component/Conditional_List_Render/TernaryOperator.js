import React, { Component } from 'react'

class TernaryOperator extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLogin:false
        }
    }
    
    render() {
        return this.state.isLogin?<div><h1>Welcome to TQPP</h1></div>:<div><h1>Please Login..!!</h1></div>
    }
}

export default TernaryOperator
