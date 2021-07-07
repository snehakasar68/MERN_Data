import React, { Component } from 'react'
import InputExample from './InputExample'

class FocusInputExample extends Component {
    constructor(props) {
        super(props)
        this.componentRef=React.createRef()
    }
    clickHandler=()=>{
        this.componentRef.current.focusInput()
    }
    render() {
        return (
            <div>
                <InputExample ref={this.componentRef}></InputExample>
                <button onClick={this.clickHandler}>Focus-Input</button>
            </div>
        )
    }
}

export default FocusInputExample
