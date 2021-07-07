import React from 'react'

function Person({person}) {
    return (
        <div>
            <h2>Name:{person.name}. I am {person.age} years old. I am interested to learn {person.skill}</h2>
        </div>
    )
}

export default Person
