import { ADD_DATA, DELETE_DATA,UPDATE_DATA } from "../ToDoTypes/Action";


const initialState={
    task:[]
}
const reducer=(state=initialState,action)=>{
    console.log(state);
    switch(action.type){
        case ADD_DATA:
            return{
                ...state,task:[...state.task,{id:new Date().getTime().toString() ,title:action.payload}]
            };
        case DELETE_DATA:
            return{...state,task:state.task.filter((obj)=>obj.id!=action.payload)};
        case UPDATE_DATA:
                return{...state,task:state.task.map((obj)=>{
                   if(obj.id==action.payload.id)
                     return action.payload
                })};
        default :return state;
    }
}


export default reducer