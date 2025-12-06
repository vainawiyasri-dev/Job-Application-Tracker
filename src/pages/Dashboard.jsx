import React from "react";
import { useAppData } from "../contexts/AppDataContext"; // Correct hook import

function Dashboard() {
  const { applications } = useAppData(); // directly get the value

  const lastFive = [...applications].slice(-5).reverse();

  return (
    <div className="home-container">
      <h2>Dashboard Summary</h2>

      <div className="dashboard-cards">
        <div className="card">
          <h3>Total Applications</h3>
          <p>{applications.length}</p>
        </div>
        <div className="card">
          <h3>Applied</h3>
          <p>{applications.filter(a => a.status === "Applied").length}</p>
        </div>
        <div className="card">
          <h3>Interview Scheduled</h3>
          <p>{applications.filter(a => a.status === "Interview Scheduled").length}</p>
        </div>
        <div className="card">
          <h3>Selected</h3>
          <p>{applications.filter(a => a.status === "Selected").length}</p>
        </div>
        <div className="card">
          <h3>Rejected</h3>
          <p>{applications.filter(a => a.status === "Rejected").length}</p>
        </div>
      </div>

      <h2>Last 5 Applications</h2>
      <div className="spreadsheet-table">
        <table>
          <thead>
            <tr>
              <th>Company</th>
              <th>Job Title</th>
              <th>Job Type</th>
              <th>Status</th>
              <th>Location</th>
             
            </tr>
          </thead>
          <tbody>
            {lastFive.map((app, index) => (
              <tr key={index}>
                <td>{app.company}</td>
                <td>{app.title}</td>
                <td>{app.type}</td>
                <td>{app.status}</td>
                <td>{app.location}</td>
          
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Dashboard;


