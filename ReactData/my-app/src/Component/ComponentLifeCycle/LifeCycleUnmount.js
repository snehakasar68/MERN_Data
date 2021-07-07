import React, { Component } from 'react'

class LifeCycleUnmount extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             show:true
        }
        console.log("constructos");
    }
    delHeader=()=>{
        this.setState({
            show:false
        })
    }
    render() {
        let myheader;
        if(this.state.show){
            myheader=<Child/>;
        }
        return (
            <div>
                {myheader}
                <button type="button" onClick={this.delHeader}>Delete Header</button>
            </div>
        )
    }
}

export default LifeCycleUnmount
class Child extends Component{
    componentWillUnmount(){
        alert("The Component named Header is about to be unmounted!!")
        console.log("Child component unmounted");
    }
    render(){
        return(
            <h1>Hello</h1>
        )
    }
}