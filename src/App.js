
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AdminLogin from './components/adminLogin';
import LandingPage from './components/landingPage';
import UserLogin from './components/userLogin';
import AdminHome from './components/adminHome';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
  <Routes>
  <Route path='/' element={<LandingPage/>}/>
  <Route path='/admin-login' element={<AdminLogin/>}/>
  <Route path='/user-login' element={<UserLogin/>}/>
  <Route path='/admin/*' element={<AdminHome/>}/>
  
  
  </Routes>
    
    
    
    </BrowserRouter>
    </div>
  );
}

export default App;
