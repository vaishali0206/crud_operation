import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    // Fetch employees when the component mounts
    axios.get('http://localhost:3001/api/employees')
      .then(response => setEmployees(response.data))
      .catch(error => console.error('Error fetching data: ', error));
  }, []);

  return (
    <div>
      <h1>Employee List</h1>

       <ul>
        {employees.map(employee => (
          <li key={employee.id}>{`${employee.name} - ${employee.position}`}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
