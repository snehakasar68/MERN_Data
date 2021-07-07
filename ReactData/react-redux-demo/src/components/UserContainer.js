import React, { useEffect } from 'react'
import {fetchUsers} from '../redux'
import {connect} from 'react-redux'

function UserContainer({userData,fetchUsers}) {
    useEffect(() => {
        fetchUsers()
          }, [])
    console.log(userData)
    return (
      
        <>
         <h1>Users List</h1> 
         <>
         { userData && userData.loading && <h3 style={{color:'blue'}}>Loading..........</h3>}   
        {
           userData && userData.users && userData.users.map(user=><h3 key={user.id}>{user.id} {user.name}</h3>)
           
            }  
            { userData && userData.error && <h3 style={{color:'red'}}>{userData.error}</h3>}   
        </>  
        </>
    )
}
const mapStateToProps=state=>{
    return {userData:state.user}
}
const mapDispatchToProps=dispatch=>{
    return{fetchUsers:()=>dispatch(fetchUsers())}
}

export default connect(mapStateToProps,mapDispatchToProps)(UserContainer)
