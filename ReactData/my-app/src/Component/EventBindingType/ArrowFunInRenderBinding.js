import React, { Component } from "react";

class ArrowFunInRenderBinding extends Component{
    constructor(){
        super()
        this.state={
            msg:"Welcome to TQPP"
        }
    }
    clickMe(){
        this.setState({
            msg:"Thank you for visiting..!!"
        })
    }
    render(){
        return(
            <div>
                <h1>{this.state.msg}</h1>
                <button onClick={()=>this.clickMe()}>Change Msg</button>
            </div>
        )
    }
}

export default ArrowFunInRenderBinding;