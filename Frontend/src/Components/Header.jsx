// eslint-disable-next-line no-unused-vars
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";
import { useContext } from "react";
import { GlobalInfo } from "../Context/AuthContext";
function Header() {


  const {authState , logout} = useContext(GlobalInfo);

  if(authState.token){
    return (
      <div className="Head_outer">
        <div className="Head_dash">
          <Link to={"/"}>
            <h3>Employee Dashboard</h3>
          </Link>
        </div>
        <div className="Head_inner">
          <button onClick={logout} type="button" className="btn btn-primary">
            lOGOUT
          </button>
          <Link to={"/dash"}>
            <button className="btn btn-info" type="submit">
              Dashboard
            </button>
          </Link>
          <Link to={"/add"}>
            <button className="btn btn-warning" type="submit">
              ADD
            </button>
          </Link>
        </div>
      </div>
    );
  }else{
    return (
      <div className="Head_outer">
        <div>
          <Link to={"/"}>
            <img
              src="https://lh5.googleusercontent.com/-Z1FSU6dmnew/AAAAAAAAAAI/AAAAAAAAAAA/JgZNZpuqhSY/s44-p-k-no-ns-nd/photo.jpg"
              className="img-fluid"
              alt="..."
              width={"50px"}
              height={"50px"}
            ></img>
          </Link>
        </div>
        <div className="Head_inner">
          <Link to={"/login"}>
            <button type="button" className="btn btn-primary">
              lOGIN
            </button>
          </Link>
          <Link to={"/register"}>
            <button className="btn btn-outline-success" type="submit">
              Register
            </button>
          </Link>
          <Link to={"/dash"}>
            <button className="btn btn-info" type="submit">
              Dashboard
            </button>
          </Link>
        </div>
      </div>
    );
  }
}
export default Header;