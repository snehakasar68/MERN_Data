import React, { Component, PureComponent } from 'react'
import MemoComp from './MemoComp'
import PureComp from './PureComp'
import RegComp from './RegComp'

class ParentComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'Ansh'
        }
    }
    componentDidMount(){
        setInterval(()=>{this.setState({name:'Ansh'})},2000)
    }
    render() {
        console.log("Parent Component");
        return (
            <div>
                Parent Component
                {/* <RegComp name={this.state.name}/>
                <PureComp name={this.state.name}/> */}
                <MemoComp name={this.state.name}/>
            </div>
        )
    }
}

export default ParentComp
