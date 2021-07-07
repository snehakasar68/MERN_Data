import React, { Component } from 'react'
import axios from 'axios'
class PostForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             userId:'',
             title:'',
             body:''
        }
    }
    changeHandler=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    submitHandler=(e)=>{
        e.preventDefault();
        axios.post('https://jsonplaceholder.typicode.com/posts',this.state)
        .then((response)=>{
            alert("Data send successfully....!!!!")
            console.log(response)})
        .catch(error=>console.log(error))
    }
    render() {
        const {userId,title,body}=this.state
        return (
            <div>
                <input type="text" name="userId" value={userId} placeholder="Enter user id" onChange={this.changeHandler}/><br></br>
                <input type="text" name="title" value={title} placeholder="Enter title" onChange={this.changeHandler}/><br></br>
                <input type="text" name="body" value={body} placeholder="Enter body" onChange={this.changeHandler}/><br></br>
                <button onClick={this.submitHandler}>Send Data</button>
            </div>
        )
    }
}

export default PostForm
