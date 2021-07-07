import { FETCH_FAILURE, FETCH_REQUEST, FETCH_SUCCESS } from "../AsyncTypes/ActionType";

export function fetchRequest(){
    return {
        type:FETCH_REQUEST             
    }
}
export function successRequest(res){
    return {
        type:FETCH_SUCCESS,
        payload:res
    }
}
export function failureRequest(error){
    return {
        type:FETCH_FAILURE,
        payload:error
    }
}