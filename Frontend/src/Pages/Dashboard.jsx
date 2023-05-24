/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect, useCallback } from "react";
import Table from "react-bootstrap/Table";
import "../App.css";
import axios from "axios";
import {Link,useNavigate} from 'react-router-dom';
function Dashboard() {

  // eslint-disable-next-line no-unused-vars
  const [user, setUser] = useState([] || "");
  const [SortBy, setSortBy] = useState("salary" || null);
const [SortOrder, setOrder] = useState("asc" || null);
const [filter, setFilter] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const Nav = useNavigate();

  const Load_Data = async () => {
    try {
      setIsLoading(true);
      setError(true);
      let res = await axios.get(
        filter
          ? `http://127.0.0.1:8000/api/v1/employee?designation=${filter}`
          : `http://127.0.0.1:8000/api/v1/employee?Sort=${SortBy}&SortOrder=${SortOrder}`
      );
      setUser(res.data.data);
      setIsLoading(false);
      setError(false);
    } catch (error) {
      console.log(error.message);
      setIsLoading(false);
      setError(true);
    }
  };


   const handleUpdate = useCallback((id) => {
       Nav(`/edit/${id}`);
     },
     [Nav]
   );
 

   const handleDelete = useCallback(async (id) => {
    try {
         await axios.delete(`http://127.0.0.1:8000/api/v1/employee/${id}`);
         setUser(user.filter((el) => el.id !== id));
       } catch (error) {
         console.log(error);
       }
  }, [user]);
  

  useEffect(() => {
    Load_Data();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

 const HandleSort = async(data)=>{
  if(data === 'desc'){
        setOrder('desc');
  }
  else{
    setOrder('asc');
  }
 }

 const HandleFliter = async(data)=>{
   setFilter(data);
 }

  if (!isLoading)
    return (
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    );


  if (!error)
    return (
      <div className="alert alert-danger" role="alert">
        Something went wrong. Please try again later.
      </div>
    );

       return (
         <div className="Dash_Upper">
           <div className="dash_header">
             <div className="Dash_upper_Header">
               <button
                 onClick={() => HandleSort(event.target.value)}
                 value={"desc"}
                 type="button"
                 className="btn btn-outline-secondary"
               >
                 Sort_By_Salary_HTL
               </button>
               <button
                 onClick={() => HandleSort(event.target.value)}
                 value={"asc"}
                 type="button"
                 className="btn btn-outline-success"
               >
                 Sort_By_Salary_LTH
               </button>
             </div>
             <div className="Dash_upper_Header">
               <button
                 onClick={() => HandleFliter(event.target.value)}
                 value={"Frontend"}
                 type="button"
                 className="btn btn-outline-secondary"
               >
                 Frontend
               </button>
               <button
                 onClick={() => HandleFliter(event.target.value)}
                 value={"Backend"}
                 type="button"
                 className="btn btn-outline-success"
               >
                 Backend
               </button>
               <button
                 onClick={() => HandleFliter(event.target.value)}
                 value={"MERN"}
                 type="button"
                 className="btn btn-outline-success"
               >
                 MERN
               </button>
             </div>
           </div>
           <Table className="table_upper">
             <thead>
               <tr>
                 <th>ID</th>
                 <th>Name</th>
                 <th>E-mail</th>
                 <th>Salary</th>
                 <th>Designation</th>
                 <th>Action</th>
               </tr>
             </thead>
             <tbody>
               {user.map((el, index) => (
                 <tr key={index}>
                   <td>{index + 1}</td>
                   <Link
                     to={`/single/${el._id}`}
                     style={{ textDecoration: "none", color: "black" }}
                   >
                     <td>{el.name}</td>
                   </Link>
                   <td>{el.email}</td>
                   <td>{el.salary}</td>
                   <td>{el.designation}</td>
                   <td>
                     <div className="table_inner">
                       <button
                         onClick={() => handleUpdate(el._id)}
                         type="button"
                         className="btn btn-outline-primary"
                       >
                         Edit
                       </button>
                       <button
                         onClick={() => handleDelete(el._id)}
                         type="button"
                         className="btn btn-outline-danger"
                       >
                         Delete
                       </button>
                     </div>
                   </td>
                 </tr>
               ))}
             </tbody>
           </Table>
         </div>
       );
}
export default Dashboard