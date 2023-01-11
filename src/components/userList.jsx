import { useState,useEffect } from "react";
import '../styles/userList.css'

const UserList = () => {

let [user,setUser]=useState([])
useEffect(()=>{
    let fetchData=async()=>{
        let response=await fetch('http://localhost:1400/users')
        let data=await response.json()

        setUser(data)
    }
    fetchData()
},[user])
let handleDelete=(id,name)=>{
    fetch(`http://localhost:1400/users/${id}`,{
    method:'DELETE'
 } )
 alert(`${name} will be deleted permenantly`)
}


    return ( 
        <div className="userList">
            {/* <h1>User List:{data.length}</h1> */}

            <div className="user_section">
                {user.map(data=>(
                    <div className="user_card">
                        <h4>NAME:{data.name}</h4>
                        
                        <h4>AGE:{data.age}</h4>
                        <h4>EMAIL:{data.email}</h4>
                        <h4>PHONE:{data.phonenumber}</h4>
                        <button onClick={()=>handleDelete(data.id,data.name)}>Delete</button>
                        


                    </div>


                ))}
            </div>



        </div>

        

     );
}
 
export default UserList;