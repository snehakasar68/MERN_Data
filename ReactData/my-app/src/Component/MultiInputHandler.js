import React, { Component } from 'react'

class MultiInputHandler extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             uname:"",
             comments:"",
             topic:"React"
        }
    }
    handleUnameChange=e=>{
        this.setState({
            uname:e.target.value
        })
    }
    handleCommentChange=e=>{
        this.setState({
            comments:e.target.value
        })
    }
    handleTopicChange=e=>{
        this.setState({
            topic:e.target.value
        })
    }
    handleOnSubmit=e=>{
       alert(`${this.state.uname} ${this.state.comments} ${this.state.topic}`)
       e.preventDefault();
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleOnSubmit}>
                    <table>
                        <tr>
                            <td><label>UserName:</label></td>
                            <td><input type="text" value={this.state.uname} onChange={this.handleUnameChange}/></td>
                        </tr>
                        <tr>
                            <td><label>Comments:</label></td>
                            <td><input type="text" value={this.state.comments} onChange={this.handleCommentChange}/></td>
                        </tr>
                        <tr>
                            <td><label>Topic:</label></td>
                            <td><select value={this.state.topic} onChange={this.handleTopicChange}>
                            <option value="react">React</option>
                            <option value="angular">Angular</option>
                            <option value="java">Java</option>

                            </select></td>
                        </tr>
                        <tr>
                            <td><button type="submit">Submit</button></td>
                        </tr>
                    </table>

                </form>
            </div>
        )
    }
}

export default MultiInputHandler
