import React,{ Component } from "react";

class Assign3_no3 extends Component{
       
      render(){
        const{comName,add}=this.props;
      return(
        <div>
            <h1>Company Details:</h1>
            <h2>Comapany Name:{comName}</h2>
            <h2>Comapany Address:{add}</h2>
        </div>
    )
}
}
export default Assign3_no3;