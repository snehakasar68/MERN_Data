import React,{ Component } from "react";
import BindingInRender from "./BindingInRender";

class BindingInConstructor extends Component{
    constructor(){
        super()
        this.state={msg:"Welcome to TQPP"}
        this.clickMe=this.clickMe.bind(this)
    }
    clickMe(){
        this.setState({
            msg:"Thank you for Visiting..!!"
        })
    }
    render(){
        return(
            <div>
                <h1>{this.state.msg}</h1>
                <button onClick={this.clickMe}>Change Msg</button>
            </div>

        )
    }
}
export default BindingInConstructor;