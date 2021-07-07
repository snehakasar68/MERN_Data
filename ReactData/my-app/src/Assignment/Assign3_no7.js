import React,{ Component } from "react";

class Assign3_no7 extends Component{
    constructor(){
        super()
        var currdate=new Date().toLocaleString();
        this.state={
            time:currdate
        }
        this.handler=this.handler.bind(this)
    }
    handler(){
        this.setState({
            time:new Date().toLocaleString()
        })
    }
      render(){
          return(
              <div>
                    <h1>Current Time:</h1>
                    <p>{this.state.time}</p>
                    <button onClick={this.handler}>Refresh Time</button>
              </div>
          )
      }
}
export default Assign3_no7;