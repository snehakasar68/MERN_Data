import React, { Component } from 'react'

class ElementVariable extends Component {
    constructor(props){
        super(props)
        this.state={
            isLogin:true
        }
    }
    render() {
        let msg;
        if(this.state.isLogin){
            msg=<h1>Welcome To TQPP...</h1>
        }
        else{
            msg=<h1>Please Login..!!</h1>
        }
        return <div>{msg}</div>
    }
}

export default ElementVariable
