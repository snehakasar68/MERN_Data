import React from 'react'
import {connect} from 'react-redux'
import {buyCake} from '../redux'
//import {buyCake} from '../redux/cake/CakeAction'

function CakeContainer(props) {
    return (
        <div>
            <h2>Number of cakes-{props.numOfCakes}</h2>
            <button onClick={props.buyCake}>Buy Cake</button>
        </div>
    )
  }
const mapStateToProps=state=>{//store.getState()
   // return {numOfCakes:state.numOfCakes}  
  return {numOfCakes:state.cake.numOfCakes}
}
const mapDispatchToProps=dispatch=>{
    return {buyCake:()=>dispatch(buyCake())}
}

export default connect(mapStateToProps,mapDispatchToProps)(CakeContainer)
