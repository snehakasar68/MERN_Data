import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
const Modal_styles={
    position:'fixed',
    transform:'translate(-50%,-50%)',
    backgroundColor:'#FFF',
    padding:'50px',
    zIndex:1000,
    top:'250px',
    right:'20px'

}

const OverLay={
    position:'fixed',
    top:0,
    left:0,
    right:0,
    bottom:0,
    backgroundColor:'rgba(0,0,0,.7)',
    zIndex:1000
}

function ViewModal() {
    const [isOpen,setIsOpen]=useState(true);
    useEffect(() => {
        setIsOpen(true)
    })
    if(!isOpen) return null
    else{
    return ReactDOM.createPortal(
        <>
        <div style={OverLay}> </div>
        <div style={Modal_styles}>
           "hiii"
            <button onClick={setIsOpen(false)} className="btn btn-secondary" > ok </button>
        </div>
        </>
        ,document.getElementById('portal-root')
    )
}
}

export default ViewModal
