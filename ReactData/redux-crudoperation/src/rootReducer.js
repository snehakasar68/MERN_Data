import {combineReducers} from 'redux'
import reducer from './ToDoList/ToDoReducer/reducer'
import AsyncReducer from './AsyncAction/Reducers/AsyncReducer'
import EmpReducer from './CRUD/EmployeeReducer/EmpReducer'

const rootReducer=combineReducers({
    reducer,AsyncReducer,EmpReducer
})

export default rootReducer