import { ADD_EMPLOYEE, DELETE_EMPLOYEE, GET_EMPLOYEE, UPDATE_EMPLOYEE } from "../EmployeeType/EmpTypes"

export function addEmployee(data){
    return{
        type: ADD_EMPLOYEE,
        info:data
    }
}
export function updateEmployee(){
    return{
        type: UPDATE_EMPLOYEE
        }
}
export function deleteEmployee(){
    return{
        type: DELETE_EMPLOYEE
    }
}
export function getEmployee(){
    return{
        type: GET_EMPLOYEE
    }
}
