import {FETCH_USERS_REQUEST,FETCH_USERS_SUCCESS,FETCH_USERS_ERROR} from './userType'
import axios from 'axios'

export const fetchUserRequest=()=>{
    return {type:FETCH_USERS_REQUEST}
}
export const fetchUserSuccess=(users)=>{
    return {type:FETCH_USERS_SUCCESS,payload:users}
}
 export const fetchUserError=(error)=>{
    return {type:FETCH_USERS_ERROR,payload:error}
}
export const fetchUsers=()=>{
    return(dispatch)=>{
        dispatch(fetchUserRequest())
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response=>{
          const users=  response.data
          console.log(response.data)
            dispatch(fetchUserSuccess(users))
        })
        .catch(error=>{
           const errormsg= error.message
           dispatch(fetchUserError(errormsg))
        })
    }

} 