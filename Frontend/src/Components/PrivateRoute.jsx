import { useContext } from 'react'
import { GlobalInfo } from "../Context/AuthContext";
import { Navigate } from 'react-router-dom';
// eslint-disable-next-line react/prop-types
function PrivateRoute({children}) {
  const {authState} = useContext(GlobalInfo);
  if(!authState.isAuth){
    return <Navigate to={'/login'} />
  }
  return children;
}
export default PrivateRoute;