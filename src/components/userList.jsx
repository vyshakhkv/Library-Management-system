import { useState,useEffect } from "react";

const UserList = () => {

let [user,setUser]=useState([])
useEffect(()=>{
    let fetchData=async()=>{
        let response=await fetch('http://localhost:1400/users')
        let data=await response.json()

        setUser(data)
    }
    fetchData()
},[])


    return ( 
        <div className="userList">
            {/* <h1>User List:{data.length}</h1> */}

            <div className="user_section">
                {user.map(data=>(
                    <div className="user_card">
                        <h4>{data.name}</h4>
                        <h6>{data.age}</h6>
                        <h6>{data.email}</h6>
                        <h6>{data.phonenumber}</h6>


                    </div>


                ))}
            </div>



        </div>

        

     );
}
 
export default UserList;