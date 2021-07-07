import React from 'react'

export default function IndexAsKey() {
    const names=["sara","ansh","jay"]
    const nameList=names.map((name,index)=>(
        <h2>{name} {index}</h2>
    ))
    return (
        <div>
            {nameList}
        </div>
    )
}
