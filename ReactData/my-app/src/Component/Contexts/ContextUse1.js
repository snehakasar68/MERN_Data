import React, { Component } from 'react'
import ContextUse2 from './ContextUse2'

class ContextUse1 extends Component {
    render() {
        return (
            <div>
                <ContextUse2/>
            </div>
        )
    }
}

export default ContextUse1
