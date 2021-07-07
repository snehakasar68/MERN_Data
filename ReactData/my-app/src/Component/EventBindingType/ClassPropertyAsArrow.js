import React,{ Component } from "react";

class ClassPropertyAsArrow extends Component{
    constructor(){
        super()
        this.state={msg:"Welcome to TQPP"}
    }
    clickMe=()=>{
        this.setState({
            msg:"Thank you for Visiting..!!"
        })
    }
    render(){
        return(
            <div>
                <h1>{this.state.msg}</h1>
                <button onClick={this.clickMe}>Change msg</button>
            </div>
        )
    }
}
export default ClassPropertyAsArrow