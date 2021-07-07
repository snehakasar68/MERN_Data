import React from 'react'
import Person from './Person'

function NameList() {
    const names=[{id:1,name:"Sara",age:20,skils:"Java"},
        {id:2,name:"Ansh",age:22,skils:"React"},
        {id:3,name:"Jay",age:26,skils:"Angular"}]
    const nameList=names.map(per=>(
        <Person key={per.id} person={per}/>
    ))
    return (
        <div>
            {nameList}
        </div>
    )
}

export default NameList
