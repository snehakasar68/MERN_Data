import React from 'react'

function Assign4_no1() {
    const fruits=["Apple","Banana","Orange","Mango"]
    const flist=fruits.map(fruit=><li>{fruit}</li>)
    return (
        <ul>
            {flist}
        </ul>
    )
}

export default Assign4_no1
