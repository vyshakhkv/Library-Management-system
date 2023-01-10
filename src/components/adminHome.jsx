import { Routes,Route } from "react-router-dom";
import AddBook from "./addBooks";
import AddUser from "./addUser";

import AdminDashboard from "./adminDasboard";
import AdminNavbar from "./adminNavbar";
import BookList from "./bookList";
import ReadBook from "./readBook";
import UserList from "./userList";


const AdminHome = () => {
    return ( 
        <div className="adminHome">
           <AdminNavbar/>
           <Routes>
            <Route path='/' element={<AdminDashboard/>}/>
            <Route path='/book-list' element={<BookList/>}/>
            <Route path="/user-list" element={<UserList/>}/>
            <Route path="/book-list/:id" element={<ReadBook/>}/>
            <Route path='/add-user' element={<AddUser/>}/>
            <Route path='/add-book' element={<AddBook/>}/>
            
        
           </Routes>
           
        </div>
     );
}
 
export default AdminHome;