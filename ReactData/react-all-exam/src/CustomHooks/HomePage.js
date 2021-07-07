import React,{useState} from 'react'
import useMode from './useMode'

function HomePage() {
    const [status,setStatus]=useState(false)
    const [bgcol,col,isClick]=useMode(status)
    
    return (
        <div className="container">
            <p  style={{backgroundColor:bgcol,color:col}}>React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
            Declarative views make your code more predictable and easier to debug.</p>
            <button 
            onClick={()=>isClick?setStatus(false):setStatus(true)}>{isClick?'DayMode':'DarkMode'}</button>
        </div>
    )
}

export default HomePage
