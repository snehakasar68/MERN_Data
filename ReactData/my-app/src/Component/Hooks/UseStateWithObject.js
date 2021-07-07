import React,{useState}from 'react'

function UseStateWithObject() {
    const [name,setName]=useState({firstN:'',lastn:''})
    return (
        <div className="container">
            <input type="text" value={name.firstN} 
            onChange={e=>setName({...name, firstN:e.target.value})}
            placeholder="Enter First Name"
            /><br></br>
            <input type="text" value={name.lastn} 
            onChange={e=>setName({...name,lastn:e.target.value})}
            placeholder="Enter Last Name"
            /><br></br>

            <h1>Your First Name is:{name.firstN}</h1>
            <h1>Your last Name is:{name.lastn}</h1>
            <h1>{JSON.stringify(name)}</h1>

            <hr></hr>
        </div>
    )
}

export default UseStateWithObject
