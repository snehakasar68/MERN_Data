import React, { Component } from 'react'
import UpdateComponent from './WithCounter'
class ClickedCounter extends Component {
    render() {
        const {count,counterIncrement}=this.props
        return (
            <div>
                <button onClick={counterIncrement}>Clicked {count}</button>
            </div>
        )
    }
}

export default UpdateComponent(ClickedCounter)
