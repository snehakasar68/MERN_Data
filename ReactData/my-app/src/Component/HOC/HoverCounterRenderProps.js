import React, { Component } from 'react'

class HoverCounterRenderProps extends Component {
    render() {
        const{count,increment}=this.props
        return (
            <div>
                <h1 onMouseOver={increment}>Over mouse {count}</h1>
            </div>
        )
    }
}

export default HoverCounterRenderProps
