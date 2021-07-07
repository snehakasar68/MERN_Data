import React from 'react'
function Assign3_no2(props){
    const {empId,empName,salary}=props;
    return(
        <div>
            <h1>Employee Details:</h1>
            <h2>Employee Id:{empId}</h2>
            <h2>Employee Name:{empName}</h2>
            <h2>Salary:{salary}</h2>
        </div>
    )
}
export default Assign3_no2;