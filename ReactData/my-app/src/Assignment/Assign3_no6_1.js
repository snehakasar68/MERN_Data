import React,{ Component } from "react";

class Assign3_no6_1 extends Component{
    constructor(){
        super()
        this.state={
            msg:"Hello How are you..??"
        }
      //  this.handler=this.handler.bind(this);
    }

     // handler(){
       // this.setState(
         //   {msg:"I am Fine..!!!"}
        //)
    //} 
     handler=()=>{
         this.setState({
             msg:"I am Fine..!!!"
         })
     }
     render(){
         return(

            <div>
                <h1>{this.state.msg}</h1>
                {/* <button onClick={this.handler.bind(this)}>Click</button> 
                <button onClick={()=>this.handler()}>Click</button>
                <button onClick={this.handler}>Click</button> */}
                <button onClick={this.handler}>Click</button>

            </div>
         )
     }
}
export default Assign3_no6_1;