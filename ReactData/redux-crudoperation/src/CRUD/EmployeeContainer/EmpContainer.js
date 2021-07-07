import React ,{useState}from 'react'
import { useDispatch } from 'react-redux'
import { addEmployee } from '../EmployeeCreator/EmpCreator';

function EmpContainer() {
    const [name, setName] = useState({})
    const dispatch=useDispatch();
    return (
        <div>
           <form>
              <div className="form-group row">
                <label className="col-2">Enter Name</label>
                <input type="text" onChange={(e)=>setName(e.target.value)}/>
                <button onClick={(e)=>{e.preventDefault()
                dispatch(addEmployee(name))}}>Sumbit</button>
              </div>
           </form> 
        </div>
    )
}

export default EmpContainer
