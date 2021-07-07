import React, { Component } from 'react'

class CallBackRefsExam extends Component {
    constructor(props) {
        super(props)
    this.cbRefs=null
    this.setCbRefs=ele=>{
        this.cbRefs=ele
    }
    }
    componentDidMount(){
        if(this.cbRefs){
            this.cbRefs.focus()
        }
    }
    clickHandler=()=>{
        alert(this.cbRefs.value)
    }
    render() {
        return (
            <div>
                <input ref={this.setCbRefs}/>
                <button onClick={this.clickHandler}>Click Me</button>
            </div>
        )
    }
}

export default CallBackRefsExam
