import React from 'react'

function Assign4_no2() {
    const num=[1,2,3,4,5]
    const numList=num.map(no=><span>{no*2+","}</span>)
    return (
        <div>
            {numList}
        </div>
    )
}

export default Assign4_no2
