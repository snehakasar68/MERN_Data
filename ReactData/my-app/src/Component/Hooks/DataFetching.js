import axios from 'axios'
import React,{useState,useEffect} from 'react'

const DataFetching =()=>{
    const [contact, setContact]=useState([])

    useEffect(()=>{
        axios.get('http://localhost:3005/contacts')
        .then(res=> {setContact(res.data)
        console.log(res.data)
        console.log(contact)})
        .catch(err=>console.log(err))
    },[])

    return(
        <>
        <ul>
            {
                contact.map(con=>(
                    <li key={con.id}>{con.name}</li>
                ))
            }
        </ul>
        </>
    )
}
export default DataFetching;