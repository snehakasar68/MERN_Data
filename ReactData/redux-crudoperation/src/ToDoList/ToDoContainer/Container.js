import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addData, deleteData, editData } from "../ActionCreators.js/Creators";

const Container = () => {
    const state = useSelector((state) => state.reducer.task);
    console.log(state)
  const [task, setTask] = useState("");
  const dispatch = useDispatch();
  return (
    <div className="container">
      <form>
        <br></br>
        <input type="text" value={task} onChange={(e) => setTask(e.target.value)} />
        <button onClick={(e)=>{
            e.preventDefault()
        dispatch(addData(task))}}>Create Task</button>
      </form>
      <table className="table shadow">
        <tr>
          <th>Id</th>
          <th>Task</th>
          <th>Actions</th>
        </tr>
            {
                state!=null?(state.map((obj)=>{
                    return(
                        <tr>
                        <td>{obj.id}</td>
                        <td>{obj.title}</td>
                        <td>
                        <Link to={{pathname:`/edit/${obj.id}`,state:{list:obj}}}><button>Edit</button></Link>
                        <button onClick={(e)=>dispatch(deleteData(obj.id))}>Delete</button>
                        </td>
                        </tr>
                        
                    )
                })):""
            }
      </table>
    </div>
  );
};

export default Container;
