import React, { Component } from 'react'

class RefsExample extends Component {
    constructor(props) {
        super(props)
    this.inputRef=React.createRef()
    }
    componentDidMount(){
        console.log(this.inputRef);
        this.inputRef.current.focus()
    }
    clickHandler=()=>{
        alert(this.inputRef.current.value)
    }
    
    render() {
        return (
            <div>
                <input ref={this.inputRef}/>
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default RefsExample
