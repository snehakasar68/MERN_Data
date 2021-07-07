import React, { Component } from 'react'

class Calculator extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             num1:"",
             num2:"",
             result:""
        }
    }
    
    handlerChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }    
    add=(e)=>{
       //alert("Addition is:"+(parseInt(this.state.num1)+parseInt(this.state.num2)))
       this.setState({result:(parseInt(this.state.num1)+parseInt(this.state.num2))})
       e.preventDefault();
    }
    sub=(e)=>{
        alert("Subtraction is:"+(parseInt(this.state.num1)-parseInt(this.state.num2)))
        this.setState({result:(parseInt(this.state.num1)+parseInt(this.state.num2))})
        e.preventDefault();
     }
     mul=(e)=>{
        alert("Multiplication is:"+(parseInt(this.state.num1)*parseInt(this.state.num2)))
        this.setState({result:(parseInt(this.state.num1)*parseInt(this.state.num2))})
        e.preventDefault();
     }
     div=(e)=>{
        alert("Division is:"+(parseInt(this.state.num1)/parseInt(this.state.num2)))
        this.setState({result:(parseInt(this.state.num1)/parseInt(this.state.num2))})
         e.preventDefault();
     }
    render() {
        return (
            <form>
                <label>Enter 1st no:</label>
                <input type="number" name="num1" onChange={this.handlerChange} value={this.state.num1}/><br></br><br></br>
                <label>Enter 2nd no:</label>
                <input type="number" name="num2" onChange={this.handlerChange} value={this.state.num2}/><br></br><br></br>
                <h1>"Result is:"{this.state.result}</h1>
                <button onClick={this.add}>Addition</button>
                <button onClick={this.sub}>Subtraction</button>
                <button onClick={this.mul}>Multiplication</button>
                <button onClick={this.div}>Division</button>
            </form>
        )
    }
}

export default Calculator
