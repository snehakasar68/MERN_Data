import React, { Component } from 'react'
const UpdateComponent=OrgComponent=>{
    class NewComponent extends Component {
        constructor(props) {
            super(props)
        
            this.state = {
                 count:0
            }
        }
        counterIncrement=()=>{
            this.setState(prevState=>{
                return {count:prevState.count+1}
            })
        }
        render() {
            return (
                <OrgComponent count={this.state.count} counterIncrement={this.counterIncrement} />
            )
        }
    }
    return NewComponent;
}

export default UpdateComponent
