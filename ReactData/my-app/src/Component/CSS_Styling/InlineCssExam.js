import React from 'react'

function InlineCssExam() {
    const applyCss={
        color:"white",
        backgroundColor:"DodgerBlue",
        padding:"10px",
        fontFamily:"Arial"
    };
    return (
        <div>
        <h1 style={{color:"red",backgroundColor:"lighetblue"}}>Hello React..!!</h1>
        <h1>Welcome to TQPP</h1>
        <div style={applyCss}>Hello How are you?</div>      
        </div>
    )
}

export default InlineCssExam
