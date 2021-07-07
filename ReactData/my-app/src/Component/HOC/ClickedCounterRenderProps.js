import React, { Component } from 'react'

class ClickedCounterRenderProps extends Component {
    render() {
        const{count,increment}=this.props
        return (
            <div>
                <button onClick={increment}>Clicked {count}</button>
            </div>
        )
    }
}

export default ClickedCounterRenderProps
