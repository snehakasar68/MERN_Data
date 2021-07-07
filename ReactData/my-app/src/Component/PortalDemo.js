import React from 'react'
import ReactDOM from "react-dom";

function PortalDemo() {
    return ReactDOM.createPortal(
        <h1>Welcome To TQPP</h1>,
        document.getElementById('root1') 
       )
}

export default PortalDemo
