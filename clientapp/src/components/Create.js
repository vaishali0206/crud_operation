import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
 
function Create() {
    // Making usestate for setting and
    // fetching a value in jsx
    const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [salary, setSalary] = useState("");
  const [department, setDepartment] = useState("");
  const [newEmployee, setNewEmployee] = useState({ name: '', email: '' ,salary:'',department:""});
 
    // Using useNavigation for redirecting to pages
    let navigate = useNavigate(); 
 
    // Function for creating a post/entry
    
    const addEmployee = (e) => {
       // e.preventDefault(); // Prevent default form submission behavior

            axios.post('http://localhost:8000/add', newEmployee)
              .then(response => {
               // setEmployees([...employees, response.data]);
               // setNewEmployee({ name: '', email: '' ,salary:'',department:""});
               navigate('Home');
              })
              .catch(error => console.error('Error adding employee: ', error));
          };
 
        // Redirecting to home page after creation done
        
    
 
    return (
        <div>
            <Form
                className="d-grid gap-2"
                style={{ margin: "5rem" }}
            >
                {/* Fetching a value from input textfirld 
                    in a setname using usestate*/}
                <Form.Group
                    className="mb-3"
                    controlId="formBasicName"
                >
                    <Form.Control
                        onChange={e => setNewEmployee({ ...newEmployee, name: e.target.value })}
                        type="text"
                        placeholder="Enter Name"
                        required
                    />
                </Form.Group>
 
                {/* Fetching a value from input textfirld in
                    a setage using usestate*/}
               
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control
                        onChange={e => setNewEmployee({ ...newEmployee, email: e.target.value })}
                        type="email"
                        placeholder="Email"
                    />
                    </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control
                    onChange={e => setNewEmployee({ ...newEmployee, salary: e.target.value })}
                type="number"
                    placeholder="Salary"
                />
                </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            onChange={e => setNewEmployee({ ...newEmployee, department: e.target.value })}
            type="text"
            placeholder="Department"
          />
        </Form.Group>
                {/* handing a onclick event in button for
                    firing a function */}
                <Button
                    onClick={addEmployee}
                    variant="primary"
                    type="submit"
                >
                    Submit
                </Button>
 
                {/* Redirecting back to home page */}
                <Link className="d-grid gap-2" to="/">
                    <Button variant="info" size="lg">
                        Home
                    </Button>
                </Link>
            </Form>
        </div>
    );
}
 
export default Create;