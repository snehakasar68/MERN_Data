import React, { Component } from 'react'
const UpdatedComponent1=(OrgComponent1,Increment)=>{
    class NewComponent1 extends Component {
        constructor(props) {
            super(props)
        
            this.state = {
                 count:0
            }
        }
        counterIncrement=()=>{
            this.setState((prevState)=>{
                return {count:prevState.count+Increment}
            })
        }
        render() {
            return (
                <div>   
                    <OrgComponent1 count={this.state.count} counterIncrement={this.counterIncrement} />
                </div>
            )
        }
    }
    return NewComponent1
}


export default UpdatedComponent1
