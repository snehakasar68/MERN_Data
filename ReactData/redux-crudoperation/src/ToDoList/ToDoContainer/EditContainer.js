import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation, useParams } from 'react-router'
import { updateData } from '../ActionCreators.js/Creators';

function EditContainer() {
    const {id}=useParams;  
    const history=useHistory();
    const location=useLocation(); 
    const dispatch=useDispatch()
    const task=location.state.list;
    const [val,setVal] = useState(task.title)
    const updateHandler=()=>{
        task.title=val
        dispatch(updateData(task))
        history.push('/')
    }      
    return (
        
        <div>
           <input type="text" value={val} onChange={(e)=>{setVal([e.target.value])}}/>
           <button onClick={()=>updateHandler()}>Update</button>
        </div>
    )
}

export default EditContainer
