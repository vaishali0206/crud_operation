import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [employees, setEmployees] = useState([]);
  const [newEmployee, setNewEmployee] = useState({ name: '', position: '' });

  useEffect(() => {
    // Fetch employees when the component mounts
    axios.get('http://localhost:3001/api/employees')
      .then(response => setEmployees(response.data))
      .catch(error => console.error('Error fetching data: ', error));
  }, []);

  const addEmployee = () => {
    axios.post('http://localhost:3001/api/employees', newEmployee)
      .then(response => {
        setEmployees([...employees, response.data]);
        setNewEmployee({ name: '', position: '' });
      })
      .catch(error => console.error('Error adding employee: ', error));
  };

  const updateEmployee = (id, updatedData) => {
    axios.put(`http://localhost:3001/api/employees/${id}`, updatedData)
      .then(response => {
        setEmployees(employees.map(emp => (emp.id === id ? response.data : emp)));
      })
      .catch(error => console.error('Error updating employee: ', error));
  };

  const deleteEmployee = id => {
    axios.delete(`http://localhost:3001/api/employees/${id}`)
      .then(() => {
        setEmployees(employees.filter(emp => emp.id !== id));
      })
      .catch(error => console.error('Error deleting employee: ', error));
  };

  return (
    <div>
      <h1>Employee List</h1>
      <ul>
        {employees.map(employee => (
          <li key={employee.id}>
            {`${employee.name} - ${employee.position}`}
            <button onClick={() => updateEmployee(employee.id, { name: 'Updated Name', position: 'Updated Position' })}>Update</button>
            <button onClick={() => deleteEmployee(employee.id)}>Delete</button>
          </li>
        ))}
      </ul>

      <h2>Add New Employee</h2>
      <input
        type="text"
        placeholder="Name"
        value={newEmployee.name}
        onChange={e => setNewEmployee({ ...newEmployee, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="Position"
        value={newEmployee.position}
        onChange={e => setNewEmployee({ ...newEmployee, position: e.target.value })}
      />
      <button onClick={addEmployee}>Add Employee</button>
    </div>
  );
}

export default App;