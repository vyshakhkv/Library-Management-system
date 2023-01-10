import { useState } from "react";
import '../styles/addUser.css'
import { useNavigate } from "react-router-dom";
const AddUser = () => {
    let[name,setName]=useState("")
    let[age,setAge]=useState("")
    let[email,setEmail]=useState("")
    let[phonenumber,setPhonenumber]=useState("")

    
    let navigate = useNavigate()

    let handleSubit=(e)=>{
        e.preventDefault()
        let userdata={name,age,email,phonenumber}

        fetch('http://localhost:1400/users',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(userdata)
    })
    alert(`${name} is added successfully`)
    navigate('/admin/user-list')

    }

    return ( 
        
    
        <div className="usermain">
            <h1>ADD USER</h1>
       <form action="" onSubmit={handleSubit}>
        <div className="username">
        {/* <label htmlFor="">Name</label> */}
        <input type="text" placeholder="username" value={name} required onChange={(e)=>setName(e.target.value)} />
        </div>
        <div className="userage">
        {/* <label htmlFor="">Age</label> */}
        <input type="number" min='1' placeholder="user age" value={age} required onChange={(e)=>setAge(e.target.value)} />

        </div>
        <div className="useremail">
        {/* <label htmlFor="">Email</label> */}
        <input type="text" value={email} placeholder="Email" required onChange={(e)=>setEmail(e.target.value)} />
        </div>
        <div className="userphone">
        {/* <label htmlFor="">Phone</label> */}
        <input type="tel" minLength="10" maxLength="10" placeholder="Phone Number" value={phonenumber} required onChange={(e)=>setPhonenumber(e.target.value)} />
        </div>
        
        <button className="but_user" type="submit">SUBMIT</button>




       </form>


        </div>
     );
}

 
export default AddUser;