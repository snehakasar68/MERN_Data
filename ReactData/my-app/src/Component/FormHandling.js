import React, { Component } from 'react'

class FormHandling extends Component {
    state={
        name:""
    }
    handlerChange=(e)=>{
        this.setState({
            name:e.target.value
        })
    }
    render() {
        return (
            <div>
              <form>
                  <label>Name:</label>
                  <input type="text" onChange={this.handlerChange} value={this.state.name}/>
              </form>  
              <strng>You have type name:<span>{this.state.name}</span></strng>
            </div>
        )
    }
}

export default FormHandling
