import React, { Component } from 'react'

class ShortCircuit extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLogin:true
        }
    }
    
    render() {
      return (this.state.isLogin && <div><h1>Welcome to TQPP</h1></div>)
    }
}

export default ShortCircuit
