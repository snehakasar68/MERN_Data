import React from 'react'

function DisplayMsg(props) {
    if(props.status){
        return(<h1>Welcome user</h1>)
    }
    else{
        return(<h1>Please login</h1>)
    }
}

export default DisplayMsg
