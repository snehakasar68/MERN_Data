import { ADD_EMPLOYEE } from "../EmployeeType/EmpTypes"

const initialState={
    employee:localStorage.setItem('employee',JSON.stringify([{name:"sneha"}]))
}
const EmpReducer=(state=initialState,action)=>{
    console.log(state);
    switch(action.type){
        case ADD_EMPLOYEE:
            return{
                ...state,employee:[...state.employee.push(action.info)]
            }
        default :return state
    }
}

export default EmpReducer