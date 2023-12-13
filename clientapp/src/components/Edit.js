import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function Edit() {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [salary, setSalary] = useState("");
  const [department, setDepartment] = useState("");
 // const [newEmployee, setNewEmployee] = useState({ name: '', position: '' });

  const navigate = useNavigate();

  const fetchEmployeeData = async () => {
    try {
      const response = await fetch(`http://localhost:8000/getEmpByID/${id}`);
      const result = await response.json();
      setName(result.name);
      setEmail(result.email);
      setSalary(result.salary);
      setDepartment(result.department);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchEmployeeData();
  }, [id]);

  const handleUpdate = (e) => {
    e.preventDefault();

    if (name === "" || email === "") {
      alert("Invalid input");
      return;
    }

    const updatedEmployee = { name, email ,salary,department};

    axios
      .put(`http://localhost:8000/edit/${id}`, updatedEmployee)
      .then((response) => {
        // Handle the response if needed
        navigate("/");
      })
      .catch((error) => console.error("Error updating employee: ", error));
  };

  return (
    <div>
      <Form className="d-grid gap-2" style={{ margin: "5rem" }}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Enter Name"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
           type="number"
            placeholder="Salary"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            type="text"
            placeholder="Department"
          />
        </Form.Group>

        <Button
          onClick={handleUpdate}
          variant="primary"
          type="submit"
          size="lg"
        >
          Update
        </Button>

        <Link to="/">
          <Button variant="warning" size="lg">
            Home
          </Button>
        </Link>
      </Form>
    </div>
  );
}

export default Edit;
