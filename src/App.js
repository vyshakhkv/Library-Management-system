
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AdminLogin from './components/adminLogin';
import LandingPage from './components/landingPage';
import UserLogin from './components/userLogin';
import AdminHome from './components/adminHome';
import UserPortal from './components/userPortal';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
  <Routes>
  <Route path='/' element={<LandingPage/>}/>
  <Route path='/admin-login' element={<AdminLogin/>}/>
  <Route path='/user-login' element={<UserLogin/>}/>
  <Route path='/admin/*' element={<AdminHome/>}/>
  <Route path='/user/*' element={<UserPortal/>}/>
  
  
  </Routes>
    
    
    
    </BrowserRouter>
    </div>
  );
}

export default App;
