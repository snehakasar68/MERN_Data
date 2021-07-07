import React, { Component } from 'react'

class LifeCycleUpdate extends Component {
    constructor(props) {
        super(props)
        this.state={
            name:"Sneha"
        }
    console.log("LifeCycle Update Constructor Called");
    }
    static getDerivedStateFromProps(){
        console.log("LifeCycle Update getDerivedStateFromProps called");
        return null;
    }
    componentDidMount(){
        console.log("componentDidMount called");
    }
    shouldComponentUpdate(){
        console.log("shouldComponentUpdate called");
        return true;
    }
    getSnapshotBeforeUpdate(){
        console.log("getSnapshotBeforeUpdate called");
        return null;
    }
    componentDidUpdate(){
        console.log("componentDidUpdate called");
    }
    changeState=()=>{
        this.setState({
            name:"TQPP"
        })
    }
        render() {
            console.log("Render called");
        return (
            <div>
                <h1>LifeCycle Update Phase</h1>
                <button onClick={this.changeState}>Click</button>
            </div>
        )
    }
}

export default LifeCycleUpdate
