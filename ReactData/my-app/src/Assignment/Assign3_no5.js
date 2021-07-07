import React,{ Component } from "react";


class Assign3_no5 extends Component{
    handler(){
        alert("Hello React")
    }
    render(){
        return(
            <div>
                <button onClick={this.handler}>Click Me</button>
            </div>
        )
    }
}
export default Assign3_no5;