import React,{useState,useEffect} from 'react'

const UseEffectWithCounter=()=>{
    const [count,setCount]=useState(0);
    const [name,setName]=useState("");
    // It will effect after every rendering
        // useEffect(()=>{
        //     document.title=count;
         // })
    //it effect only onces when page is render
        // useEffect(()=>{
        //         document.title=count;
        //     },[])
    // it effect only on element which we have pass into an array
    useEffect(()=>{
        document.title=count+"times";
        // alert(name)
    },[count])
    return(
        <>
            <h1>{count}  {name}</h1>
            <button onClick={()=>setCount(count+1)}>Click Me</button>
            <input type="text" name={name} onChange={(e)=>setName(e.target.value)}/>
        </>
    )
}

export default UseEffectWithCounter;