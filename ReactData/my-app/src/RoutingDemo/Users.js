import React from 'react'

export default function Users(props) {
    const {params}=props.match
    return (
        <div>
            <h1>User Page</h1>
            <h1>{params.id}</h1>
        </div>
    )
}
