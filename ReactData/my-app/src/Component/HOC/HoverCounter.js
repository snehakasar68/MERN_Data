import React, { Component } from 'react'
import UpdateComponent from './WithCounter'
class HoverCounter extends Component {
    
    render() {
        const {count,counterIncrement}=this.props
        return (
            <div>
                <h1 onMouseOver={counterIncrement}>Mouse Over it {count}</h1>
            </div>
        )
    }
}

export default UpdateComponent(HoverCounter)
