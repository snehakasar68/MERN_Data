import { Component } from "react";

class StateEx extends Component{
    constructor(){
        super()
        this.state={
            info:"Welcome Visitor"
        }
    }
     ChangeState=()=>{
        this.setState({
            info:"Thank You for Visiting"
        })
    }
    render(){
        return <div>
            <h2>{this.state.info}</h2>
            <button onClick={this.ChangeState}>Subscribe</button>
        </div>
    }
}
export default StateEx;