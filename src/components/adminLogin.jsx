import { useState } from "react";
import '../styles/adminLogin.css'
import { useNavigate } from "react-router-dom";
const AdminLogin = () => {
    
    let[mail,setMail]=useState("")
    let[password,setPassword]=useState("")
    let navigate=useNavigate()

    let handleLogin=(e)=>{
        e.preventDefault()
        let data={mail,password}

        if(mail=="vyshakhvkv@gmail.com" && password=="vyshakh@123")
        {
            navigate('/admin/')
        }
        else{
            alert('Invalid Email or Password')
        }



    }



    return ( 
        <div className="adminlogin">
            <div className="logincard">
                <h1 >Login as Admin</h1>
                <div className="form">
                    <form onSubmit={handleLogin}>
                        <div className="mail">
                            <label>
                                Email*
                                <input type="email" required placeholder="Enter Email" value={mail} onChange={(e)=>setMail(e.target.value)}/>
                            </label>
                        </div>
                        <div className="pass">
                            <label >
                                Password
                                <input type="password" placeholder="Enter Password" value={password} onChange={(p)=>setPassword(p.target.value)} />
                            </label>
                        </div>
                        <button>Login</button>
                    </form>
                </div>
            </div>


        </div>





     );
}
 
export default AdminLogin;