import React, { useReducer } from 'react'
const initalState={firstCounter:0,
    secondConter:10
                   }
                   
const reducer=(state,action)=>{
  console.log(action)
//   if(action.type==='Increment')
//     return {...state,firstCounter:state.firstCounter+action.value}
  switch(action.type){
      case 'Increment':
        return {...state,firstCounter:state.firstCounter+action.value};
        case 'Decrement':
            return {...state,firstCounter:state.firstCounter-action.value};
            case 'Increment2':
                return {...state,secondConter:state.secondConter+action.value}; 
                case 'Decrement2':
                    return {...state,secondConter:state.secondConter-action.value};
            
            case 'Reset':
                return initalState
            default:
                return state
                
  }

}
function CounterUseReducer() {
    const [count,dispatch]=useReducer(reducer,initalState);

    const handlerIncrement=()=>{
        dispatch({type:'Increment',value:1})
    }
    const handlerDecrement=()=>{
        dispatch({type:'Decrement',value:1})
    }
    const handlerIncrement5=()=>{
        dispatch({type:'Increment',value:5})
    }
    const handlerDecrement5=()=>{
        dispatch({type:'Decrement',value:5})
    }
    const handlerRest=()=>{
        dispatch({type:'Reset'})
    }
    return (
        <div>
            <h1>{count.firstCounter}</h1>
            <button onClick={handlerIncrement}>Increment</button>
            <button onClick={handlerDecrement}>Decrement</button>
            <button onClick={handlerRest}>Reset</button>

            <button onClick={handlerIncrement5}>Increment by 5</button>
            <button onClick={handlerDecrement5}>Decrement by 5</button>
            
        </div>
    )
}

export default CounterUseReducer
