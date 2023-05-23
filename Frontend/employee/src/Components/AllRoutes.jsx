import {Routes,Route} from 'react-router-dom'
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import Register from '../Pages/Register'
import Dashboard from '../Pages/Dashboard'
import PrivateRoute from './PrivateRoute'
function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dash" element={<PrivateRoute><Dashboard /></PrivateRoute>}/>
    </Routes>
  );
}

export default AllRoutes

