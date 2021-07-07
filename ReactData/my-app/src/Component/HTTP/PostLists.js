import React, { Component } from 'react'
import axios from 'axios'
class PostLists extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             posts:[],
             errorMsg:''
        }
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts').then(res=>{
            console.log(res)
            this.setState({
                posts:res.data
            })
        }).catch(error=>{
            console.log(error)
            this.setState({errorMsg:'Error in retrieving data'})
        })
    }
    render() {
        const{posts,errorMsg}=this.state
        return (
            <div className="container">
            List of posts
            {
                posts.length?posts.map(post=><div key={post.id}><dl><dt>{post.title}</dt><dd>{post.body}</dd></dl></div>):null
            }
                {errorMsg?<div>{errorMsg}</div>:null}
            </div>
        )
    }
}
export default PostLists

