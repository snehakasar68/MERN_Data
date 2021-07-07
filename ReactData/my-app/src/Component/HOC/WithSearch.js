import React, { Component } from 'react'
const WithSearch=(OrgComponent)=>{
   return class NewComponent extends Component {
        state={serachItem:' '}
        handleSerach=(e)=>{
            this.setState({serachItem:e.target.value})
        }
        render() {
            return (
                <div>
                    <input onChange={this.handleSerach} value={this.state.serachItem}/>
                    <OrgComponent serachItem={this.state.serachItem}/>
                </div>
            )
        }
    }
    

}

export default WithSearch
