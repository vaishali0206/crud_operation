import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Delete() {
    const { id } = useParams();
    const deleteEmployee = id => {
        axios.delete(`http://localhost:8000/delete/${id}`)
          .then(() => {
           // setEmployees(employees.filter(emp => emp.id !== id));
          })
          .catch(error => console.error('Error deleting employee: ', error));
      };
}
export default Delete;