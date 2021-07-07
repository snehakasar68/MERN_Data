import React from 'react'

function Assign4_no3() {
    const fruits=["Apple","Banana","Orange","Mango"]
    const flist=fruits.map((fruit,index)=><li key={index}>{fruit} {index}</li>)
    return (
        <div>
            {flist}
        </div>
    )
}

export default Assign4_no3
