/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, {useState,useEffect} from "react";
import { Link, useParams } from "react-router-dom";
import "../App.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const InitialStates = {
  name_data: "",
  email: "",
  salary: "",
  designation: "",
};

function Update() {

  const {id} = useParams()
  console.log(id);
  
  const [formstate, setFormState] = React.useState(InitialStates);
   const [user, setUser] = useState("");
   const [isLoading, setIsLoading] = useState(false);
   const [error, setError] = useState(false);
   const Nav = useNavigate();
   
   console.log(user);

   const Load_Data = async () => {
     try {
       setIsLoading(true);
       setError(true);
       let res = await axios.get(`http://127.0.0.1:8000/api/v1/employee/${id}`);
       setUser(res.data.data);
       setIsLoading(false);
       setError(false);
     } catch (error) {
       console.log(error.message);
       setIsLoading(false);
       setError(true);
     }
   };

  const handleChange = (e) => {
    const { name } = e.target;
    setFormState((oldState) => {
      return {
        ...oldState,
        [name]: e.target.value,
      };
    });
  };
  const { name_data, email, salary, designation } = formstate;

  async function HandleSubmit(e) {
    e.preventDefault();
    try {
      let update = await axios.put(
        `http://127.0.0.1:8000/api/v1/employee/${id}`,
        {
          name: name_data,
          email: email,
          salary: salary,
          designation: designation,
        }
      );
      Nav("/dash");
    } catch (error) {
      alert(error.response.data.message);
    }
    setFormState(InitialStates);
  }
 useEffect(() => {
   Load_Data();
 // eslint-disable-next-line react-hooks/exhaustive-deps
 }, [Nav]);
  return (
    <div className="Register_Outer">
      <div
        style={{
          margin: "auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px",
        }}
      >
        <div>
          <h3>Update</h3>
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
              Name
            </label>
            <input
              type="text"
              className="form-control"
              value={formstate.name}
              name="name_data"
              placeholder={user.name}
              onChange={handleChange}
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              value={formstate.email}
              name="email"
              placeholder={user.email}
              onChange={handleChange}
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <label htmlFor="exampleInputPassword1" className="form-label">
              Salary
            </label>
            <input
              type="number"
              className="form-control"
              value={formstate.salary}
              name="salary"
              placeholder={user.salary}
              onChange={handleChange}
              id="exampleInputPassword1"
            />
            <label htmlFor="exampleInputPassword1" className="form-label">
              Designation
            </label>
            <input
              type="text"
              className="form-control"
              value={formstate.designation}
              name="designation"
              placeholder={user.designation}
              onChange={handleChange}
              id="exampleInputPassword1"
            />
          </div>
          <button
            type="submit"
            value={"submit"}
            className="btn btn-outline-primary"
          >
            Submit
          </button>
        </form>
        </div>
  );
}

export default Update;
