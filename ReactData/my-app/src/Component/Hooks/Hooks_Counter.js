import React, {useState} from 'react'

function Hooks_Counter() {
    const [count,setCount]=useState(0)
    return (
        <div className="container">
            <button onClick={()=>setCount(count+1)}>Count:{count}</button>
            <hr></hr>
        </div>
       
    )
}

export default Hooks_Counter
