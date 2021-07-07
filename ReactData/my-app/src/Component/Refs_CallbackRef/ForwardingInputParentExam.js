import React, { Component } from 'react'
import ForwardingInputExam from './ForwardingInputExam'
class ForwardingInputParentExam extends Component {
    constructor(props) {
        super(props)
    this.inputRef=React.createRef()
    }
    clickHandler=()=>{
        this.inputRef.current.focus()
    }
    
    render() {
        return (
            <div>
                <ForwardingInputExam ref={this.inputRef}/>
                <button onClick={this.clickHandler}>Focus Input</button>
            </div>
        )
    }
}

export default ForwardingInputParentExam
