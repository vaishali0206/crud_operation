import React, { useState, useEffect } from "react";
import { Button, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch the list of data from the API when the component mounts
    fetchData();
  }, []);

  // Fetch data from the API
  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:8000/getAll");
      const result = await response.json();
      console.log(result);
      setData(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Function to delete an entry
  const deleteEntry = async (id) => {
    try {
      await fetch(`https://your-api-endpoint.com/data/${id}`, {
        method: "DELETE",
      });

      // Update the local state after deletion
      setData(data.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Error deleting entry:", error);
    }
  };

  return (
    <div style={{ margin: "5rem" }}>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Salary</th>
            <th>Department</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item._id}>
              <td>{item._id}-{item.name}</td>
              <td>{item.email}</td>
              <td>{item.salary}</td>
              <td>{item.department}</td>
              <td>
              <Link to={`/edit/${item._id}`}>
                  <Button
                    onClick={() => {
                      // setID logic here if needed
                      console.log("Update clicked for:", item.id);
                    }}
                    variant="info"
                  >
                    Edit
                  </Button>
                </Link>
                <Button
                  onClick={() => deleteEntry(item.id)}
                  variant="danger"
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Link className="d-grid gap-2" to="/create">
        <Button variant="warning" size="lg">
          Create
        </Button>
      </Link>
    </div>
  );
}

export default Home;
