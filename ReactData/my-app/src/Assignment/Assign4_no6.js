import React from 'react'

function Assign4_no6() {
    const users = [ {Name:'chris', pets: [{name: 'bella', type: 'dog'},
                    {name: 'cocoa', type: 'dog'}]},
                     {Name:'nick',pets: [{name: 'hilo', type: 'cat'}, 
                     {name: 'polly', type: 'cat'}]} ]
    const list=users.map(user=>{
        let petArr=user.pets.map((pet)=><h6>{pet.type} named {pet.name}</h6>)
        return(
            <>
             <h1>{user.Name}'s</h1> 
             {petArr}
            </>
        )
    })
    return (
        <div>
            {list}
        </div>
    )
}

export default Assign4_no6
