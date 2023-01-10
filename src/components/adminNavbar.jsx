import { Link } from 'react-router-dom';
import '../styles/adminNavbar.css'
const AdminNavbar = () => {
   return (
      <div className="adminNavbar">
         <div className="logo">
            <img width="90px" height="90px" src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/library-logo-design-template-45579f2f9eaf725821b915b523f191eb_screen.jpg?ts=1611149783" alt="" />
            {/* <h1>ADMIN PORTAL</h1> */}
         </div>
         <div className="links">
            <ul>

               <li><Link className='nav-link mx3' to="/admin/">Dashboard</Link></li>
               <li> <Link className='nav-link mx3' to="/admin/add-book">Add Book</Link></li>
               <li><Link className='nav-link mx3' to="/admin/add-user">Add User</Link></li>
               <li><Link className='nav-link mx3' to="/admin/book-list">Book List</Link></li>
               <li><Link className='nav-link mx3' to="/admin/user-list">User List</Link></li>
               <li><Link className='nav-link mx3' to="/">Logout</Link></li>
            </ul>
         </div>



      </div>
   );
}

export default AdminNavbar;