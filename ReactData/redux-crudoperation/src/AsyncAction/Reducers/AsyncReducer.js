import { FETCH_FAILURE, FETCH_REQUEST, FETCH_SUCCESS } from "../AsyncTypes/ActionType"

const initialState={
    res:[],
    error:'',
    loading:false
}
const AsyncReducer=(state=initialState,action)=>{
    console.log(state)
switch(action.type){
    case FETCH_REQUEST:
        return{...state,loading:true};
    case FETCH_FAILURE:
        return{...state,loading:false,error:action.payload,res:[]};
    case FETCH_SUCCESS:
        return{...state,loading:false,error:'',res:action.payload};
    default :return state
}

}

export default AsyncReducer