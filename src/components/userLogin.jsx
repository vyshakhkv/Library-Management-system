
import { useNavigate } from "react-router-dom";
import'../styles/userLogin.css'

const UserLogin = () => {



    let navigate=useNavigate();
    let handleLogin=()=>{
        navigate('/user/')
    }

    return(
        <div className="userlogin">
            <div className="logincard">
                <h1>Login as User</h1>
                <div className="form">
                    <form action="" onSubmit={handleLogin}>
                        <div className="mail">
                            <label>
                                Email*
                                
                                <input type="email" required placeholder="Enter Email"   />
                                
                            
                                </label>
                        </div>
                        <div className="pass">
                            <label>
                                Password
                                <input type="password" placeholder="Enter Password"  />
                            </label>
                        </div>
                        <button>Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default UserLogin;