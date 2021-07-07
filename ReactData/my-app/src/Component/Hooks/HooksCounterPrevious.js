import React,{useState} from 'react'

function HooksCounterPrevious() {
    const initialCount=0
    const [count,setCount]=useState(initialCount)
    const incrementFive=()=>{
        for(let i=0;i<5;i++){
            setCount(prevCnt=>prevCnt+1)
        }
    }
    return (
        <div className="container">
            Count:{count}
            <button onClick={()=>setCount(initialCount)}>Reset</button>
            <button onClick={()=>setCount(prevCnt=>prevCnt+1)}>Increment</button>
            <button onClick={()=>setCount(prevCnt=>prevCnt-1)}>Decrement</button>
            <button onClick={incrementFive}>Increment by 5</button>
            <hr></hr>
        </div>
    )
}

export default HooksCounterPrevious
