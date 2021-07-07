import React from 'react'
import{connect} from 'react-redux'
import {buyCake,buyIceCream} from '../redux'

function ItemContainer({item,buyItem}) {
    return (
        <div>
            <h1>Item- {item}</h1>
            <button onClick={buyItem}>Buy Items</button>
        </div>
    )
}
const mapStateToProps=(state,ownProps)=>{ // store.getState()
    const itemState=ownProps.cake?state.cake.numOfCakes:state.iceCream.numOfIceCreams
    return {item:itemState}
}

const  mapDispatchToProps=(dispatch,ownProps)=>{ //store.dispatch
    const dispatchFuncation=ownProps.cake?()=>dispatch(buyCake()):()=>dispatch(buyIceCream())
    return{buyItem:dispatchFuncation}
}

export default connect(mapStateToProps,mapDispatchToProps)(ItemContainer)
