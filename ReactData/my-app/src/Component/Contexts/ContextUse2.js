import React, { Component } from 'react'
import { UserConsumer } from './UserContext'

 class ContextUse2 extends Component {
    render() {
        return (
            <div>
                <UserConsumer>
                    {
                        name=>{
                            return <h1>Welcome to {name}</h1>
                        }
                    }
                </UserConsumer>
            </div>
        )
    }
}

export default ContextUse2
