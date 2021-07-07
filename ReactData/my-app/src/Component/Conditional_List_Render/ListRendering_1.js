import React from 'react'

function ListRendering_1() {
    const employee=[{id:101,empName:"Sneha",salary:25000},
            {id:102,empName:"Deepak",salary:25000},
            {id:103,empName:"Ganesh",salary:25000},
            {id:104,empName:"Faiz",salary:25000}]
    const empList=employee.map(per=>(
        <h2>Employee ID: {per.id} Employee Name:{per.empName} Salary:{per.salary}</h2>
    ))
    return (
        <div>
            {empList}
        </div>
    )
}

export default ListRendering_1
