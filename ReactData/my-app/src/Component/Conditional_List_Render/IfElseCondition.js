import React, { Component } from 'react'

 class IfElseCondition extends Component {
     constructor(){
         super()
         this.state={
             isLogin:false
             
         }
     }
    render() {
        
        if(this.state.isLogin){
            return(
                <div>
                    <h1>Welcome to TQPP</h1>
                </div>
            )
        }
        else{
            return(
                <div>
                    <h1>Please Login..!!</h1>
                </div>
            )
        }
    }
}

export default IfElseCondition
