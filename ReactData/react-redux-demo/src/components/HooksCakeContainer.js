import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {buyCake} from '../redux'

function HooksCakeContainer() {
    // const numOfCakes = useSelector(state => state.numOfCakes) 
   const numOfCakes = useSelector(state => state.cake.numOfCakes)
    const dispatch=useDispatch()
    return (
        <div>
          <div>
            <h2>Hooks- Number of cakes-{numOfCakes}</h2>
            <button onClick={()=>dispatch(buyCake())}>Buy Cake</button>
        </div>  
        </div>
    )
}

export default HooksCakeContainer
