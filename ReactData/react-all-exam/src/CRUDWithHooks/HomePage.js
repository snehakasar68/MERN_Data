import React,{useState,useEffect} from 'react'
import axios from 'axios';
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import VisibilityIcon from '@material-ui/icons/Visibility';
import CreateIcon from '@material-ui/icons/Create';
import { Link } from 'react-router-dom';

 const HomePage=()=> {
    const [users,setUsers] =useState([])
    const [isOpen,setisOpen] =useState(false)
    useEffect(() => {
        loadUser();    
    }, [])
    const loadUser=async()=>{
        let res=await axios.get(`http://localhost:3001/usersDetails`);
        setUsers(res.data)
    }
    const deleteHandler=async(id)=>{
        let cnfrmOrNot=window.confirm("Are you sure??");
        if(cnfrmOrNot){
            let res=await axios.delete(`http://localhost:3001/usersDetails/${id}`);
        loadUser();
        }
        
    }
    return (
        <div className="container">
        <br></br><br></br>
        <div style={{fontSize:"30px"}}><b>Enquiry Details...</b></div><br></br><br></br>
            <table className="table shadow">
                <thead>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Mobile</th>
                    <th>Actions</th>
                </thead>
                <tbody>
                {users.map((user,index)=>(
                    <tr key={index} >
                      <td>{index+1}</td>
                       <td>{user.name}</td>
                       <td>{user.email}</td>
                       <td>{user.mobile}</td>
                       <td>
                       <Link to=""
                          className="btn btn-outline-danger"
                          title="Delete User"
                          to="/modal"
                           >
                        <DeleteForeverIcon />
                  </Link>
                  
                       <Link
                        className="btn btn-outline-primary mr-2"
                        title="Edit User"
                        to={`/edit/${user.id}`}
                        >
                   <CreateIcon/>
                  </Link>&nbsp;
                        <Link to=""
                          className="btn btn-outline-danger"
                          title="Delete User"
                          onClick={()=>deleteHandler(user.id)}
                           >
                        <DeleteForeverIcon />
                  </Link>
                  
                       </td>
                    </tr>
                ))}
                   
                </tbody>
            </table>  
        </div>
    )
}
export default HomePage