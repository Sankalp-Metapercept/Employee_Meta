/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import Table from "react-bootstrap/Table";
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "../App.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Single() {
  const { id } = useParams();
  console.log(id);

  const [user, setUser] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const Nav = useNavigate();

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

  useEffect(() => {
    Load_Data();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [Nav]);
  return (
    <div>
      <Table className="table_upper">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>E-mail</th>
            <th>Salary</th>
            <th>Designation</th>
          </tr>
        </thead>
        <tbody>
            <tr>
              <td>{user._id}</td>
                <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.salary}</td>
              <td>{user.designation}</td>
            </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default Single;
