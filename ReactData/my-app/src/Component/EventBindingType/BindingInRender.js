import React,{ Component } from "react";

class BindingInRender extends Component{
    constructor() {
        super()
    
        this.state = {
             msg:"Welcome To React"
        }
    }
    clickHandler(){
        this.setState({
            msg:"Thank You For Visiting"
        })
    }
    render(){
        return(
            <div>
            <h1>{this.state.msg}</h1>
                <button onClick={this.clickHandler.bind(this)}>Change Msg</button>
            </div>
        )
    }
}
export default BindingInRender;