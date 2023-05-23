// eslint-disable-next-line no-unused-vars
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";
import { useContext } from "react";
import { GlobalInfo } from "../Context/AuthContext";
function Header() {


  const {authState , logout} = useContext(GlobalInfo);
  
  if(authState.token){
    return(
         <div className="Head_outer">
      <div>
        <Link to={"/"}>
          <img
            src="https://img.freepik.com/free-vector/people-logo-company-design-gradient-style_698780-603.jpg?size=626&ext=jpg"
            className="img-fluid"
            alt="..."
            width={"70px"}
            height={"50px"}
          ></img>
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
      </div>
    </div>
    )
  }else{
    return (
      <div className="Head_outer">
        <div>
          <Link to={"/"}>
            <img
              src="https://img.freepik.com/free-vector/people-logo-company-design-gradient-style_698780-603.jpg?size=626&ext=jpg"
              className="img-fluid"
              alt="..."
              width={"70px"}
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