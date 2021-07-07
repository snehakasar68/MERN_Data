import React, { Component } from 'react'
import UpdatedComponent1 from './WithCounterPara'
class HoverCounterWithpara extends Component {
    render() {
        const{count,counterIncrement}=this.props;
        return (
            <div>
                <h1 onMouseOver={counterIncrement}>ClickedPara Exam {count}</h1>
            </div>
        )
    }
}

export default UpdatedComponent1(HoverCounterWithpara,2)
