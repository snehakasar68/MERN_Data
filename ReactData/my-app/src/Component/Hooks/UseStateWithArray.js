import React,{useState} from 'react'

function UseStateWithArray() {
    const [items,setItem]=useState([]);
    const additem=()=>{
        setItem([...items,{
            id:items.length,
            value:Math.floor(Math.random()*10)+1
        }])
    }
    return (
        <div className="container">
            <button onClick={additem}>Add Number</button>
            <ul>
                {
                    items.map(item=>(<li key={item.id}>{item.value}</li>))
                }
            </ul>
            <hr></hr>
        </div>
    )
}

export default UseStateWithArray
