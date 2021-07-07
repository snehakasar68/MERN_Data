import React,{ Component } from "react";

class OnClickInClass extends Component{
    clickE(){
        alert("Welcome to React");
    }
    render(){
        return(
        <div>
            <button onClick={this.clickE}>Click Me</button>
        </div>)
    }
}
export default OnClickInClass;