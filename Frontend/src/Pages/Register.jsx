/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from "react-router-dom";
import '../App.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
const InitialStates = {
    email: "",
    password: "",
  }
function Register() {
  
  const [formstate, setFormState] = React.useState(InitialStates);
    
  const Nav = useNavigate()

    const handleChange = (e)=>{
       const {name} = e.target
       setFormState((oldState)=>{return{
        ...oldState,
        [name] : e.target.value
       }})
    } 
    const {email,password} = formstate
   
async function HandleSubmit(e) {
    e.preventDefault();
    try {  
     let register = await axios.post("http://127.0.0.1:8000/api/v1/auth/register",{email: email, password: password});
      Nav("/login");
    } catch (error) {
      alert(error.response.data.message);
    }
    setFormState(InitialStates);
  }

  return (
    <div className="Register_Outer">
      <div style={{margin: "auto", display: "flex", justifyContent: "space-between", alignItems: "center", padding:"10px"}}>
        <div>
         <h3>Register</h3>
      </div>
      <div style={{ textAlign: "center" }}>
        <Link to={"/"}>
          <img
            src="https://lh5.googleusercontent.com/-Z1FSU6dmnew/AAAAAAAAAAI/AAAAAAAAAAA/JgZNZpuqhSY/s44-p-k-no-ns-nd/photo.jpg"
            className="img-fluid"
            alt="..."
            width={"70px"}
            height={"50px"}
          ></img>
        </Link>
      </div>
      </div>
      <form onSubmit={HandleSubmit} style={{ padding: "20px" }}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            value={formstate.email}
            name="email"
            onChange={handleChange}
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            value={formstate.password}
            name="password"
            onChange={handleChange}
            id="exampleInputPassword1"
          />
        </div>
        <button type="submit" value={"submit"} className="btn btn-primary">
          Submit
        </button>
      </form>
      <div id="emailHelp" className="form-text">
        If you have an account please <Link to={"/login"}>login</Link>
      </div>
    </div>
  );
}

export default Register
