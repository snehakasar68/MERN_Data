import React,{useState} from 'react'
import axios from 'axios'
import { failureRequest, fetchRequest, successRequest } from '../AsynchCreator/AsyncActionCreator'
import { useDispatch } from 'react-redux'
function AsyncContainer() {
    const dispatch = useDispatch()
    const [users,setUsers]=useState([])
     const fetchData=()=>{
        dispatch(fetchRequest())
        axios.get(`https://jsonplaceholder.typicode.com/users`).then(res=>{
            const data=res.data
            dispatch(successRequest(data))
            setUsers(data)
        }).catch(error=>{dispatch(failureRequest(error))})
     }
    return (
        <div>
            <button onClick={()=>fetchData()}>Fetch Data</button>
            {
                users.map((obj)=>{
                    return(
                        <h1>{obj.name}</h1>
                    )
                })
            }
        </div>
    )
}

export default AsyncContainer
