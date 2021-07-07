import { Component } from "react";


class Counter extends Component{
    constructor(){
        super();
        this.state={
            cnt:0
        }
    }
    increaseCount=()=>{
        this.setState({
            cnt:this.state.cnt+1
        })
    }
    render(){
        return <div>
            <p>{this.state.cnt}</p>
            <button onClick={this.increaseCount}>Increment Count</button>
        </div>
    }
}
export default Counter;