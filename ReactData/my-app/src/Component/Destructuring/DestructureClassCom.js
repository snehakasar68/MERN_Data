import React,{ Component } from "react";

class DestructureClassCom extends Component{
    render(){
        const{name}=this.props;
        return(
        <div>
            <h1>Welcome {name} to TQPP</h1>
        </div>
        )
    }
}
export default DestructureClassCom;
