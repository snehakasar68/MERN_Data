import React, { Component } from 'react'

class LifeCycle extends Component {
    constructor(props) {
        super(props)
        console.log("Constructor Called");
    }
    componentDidMount(){
        console.log('componentDidMount called');
    }
    static getDerivedFromStateProps(){
        console.log('getDerivedFromStateProps called');
        return null;
    }
    render() {
        console.log('render called');
        return (
            <div>
                <h1>LifeCycle Demo</h1>
            </div>
        )
    }
}

export default LifeCycle
