import React, { Component } from 'react'
import UpdatedComponent1 from './WithCounterPara'
class ClickedCounterPara extends Component {
    render() {
        const{count,counterIncrement}=this.props;
        return (
            <div>
                <button onClick={counterIncrement}>ClickedPara Exam {count}</button>
            </div>
        )
    }
}

export default UpdatedComponent1(ClickedCounterPara,2)
