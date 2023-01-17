import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './Component/Login';
import ProfileSidebar from './Component/ProfileSidebar';


function App() {

  return (
 <Routes>
 <Route path="/" element={<Login/>}> </Route>
 <Route path="/profile/:id" element={<ProfileSidebar/>}> </Route>
 </Routes>
  );
}

export default App;
