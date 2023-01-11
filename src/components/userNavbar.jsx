import { Link } from "react-router-dom";
import '../styles/userNavbar.css'
const UserNavbar = () => {
    return ( 
        <div className="userNavbar">
            <div className="logo">
            <img width="90px" height="90px" src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/library-logo-design-template-45579f2f9eaf725821b915b523f191eb_screen.jpg?ts=1611149783" alt="" />
            {/* <h1>user PORTAL</h1> */}
         </div>
         <div className="links">
            <ul>

               <li><Link className='nav-link mx3' to="/user/">Dashboard</Link></li>
               <li><Link className='nav-link mx3' to="/user/book-list">Book List</Link></li>
            <li><Link className='nav-link mx3' to="/">Logout</Link></li>
            </ul>
         </div>
        </div>
     );
}
 
export default UserNavbar;