import React,{useReducer} from 'react';
import CompoA_RedContext from './CompoA_RedContext';
import CompoB_RedContext from './CompoB_RedContext';
import CompoC_RedContext from './CompoC_RedContext';

const initialState=0;
const reducer=(state, action)=>{
    switch(action){
        case 'increment':
            return state+1;
        case 'decrement':
            return state-1;
        case 'reset':
            return initialState;
            default:
                return state;

    }
}
export const CountContext=React.createContext();
function App1(){
    const [count, dispatch] = useReducer(reducer, initialState)
    return(
        <CountContext.Provider value={{countState:count, countDispatch:dispatch}}>
            <CompoA_RedContext/>
            <CompoB_RedContext/>
            <CompoC_RedContext/>
        </CountContext.Provider>
    )
}
export default App1