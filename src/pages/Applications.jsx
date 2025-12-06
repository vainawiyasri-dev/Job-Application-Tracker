import React, { useState } from "react";
import { useAppData } from "../contexts/AppDataContext";

export default function Applications() {
  const { applications, deleteApplication } = useAppData();
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [page, setPage] = useState(1);
  const perPage = 5;

  let filtered = applications.filter(app => {
    const matchSearch = app.company.toLowerCase().includes(search.toLowerCase()) || app.title.toLowerCase().includes(search.toLowerCase());
    const matchType = typeFilter ? app.type === typeFilter : true;
    const matchStatus = statusFilter ? app.status === statusFilter : true;
    return matchSearch && matchType && matchStatus;
  });

  if (sortBy === "company") filtered.sort((a,b) => a.company.localeCompare(b.company));
  else if (sortBy === "date") filtered.sort((a,b) => new Date(b.date) - new Date(a.date));

  const totalPages = Math.ceil(filtered.length / perPage);
  const start = (page-1) * perPage;
  const paginated = filtered.slice(start, start + perPage);

  return (
    <div>
      <h2>Applications</h2>

      <div className="filters">
        <input placeholder="Search by Company/Title" value={search} onChange={(e)=>setSearch(e.target.value)} />
        <select value={typeFilter} onChange={(e)=>setTypeFilter(e.target.value)}>
          <option value="">All Types</option>
          <option value="Full-time">Full-time</option>
          <option value="Part-time">Part-time</option>
          <option value="Internship">Internship</option>
          <option value="Contract">Contract</option>
        </select>
        <select value={statusFilter} onChange={(e)=>setStatusFilter(e.target.value)}>
          <option value="">All Status</option>
          <option value="Applied">Applied</option>
          <option value="Interview Scheduled">Interview Scheduled</option>
          <option value="Selected">Selected</option>
          <option value="Rejected">Rejected</option>
        </select>
      </div>

      <div className="filters">
        <button onClick={()=>setSortBy("company")}>Sort by Company</button>
        <button onClick={()=>setSortBy("date")}>Sort by Date</button>
        <button onClick={()=>setSortBy("")}>Reset Sorting</button>
      </div>

      <table>
        <thead>
          <tr>
            <th>Company</th><th>Job Title</th><th>Type</th><th>Status</th><th>Location</th><th>Date</th><th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {paginated.length>0 ? paginated.map(app => (
            <tr key={app.id}>
              <td>{app.company}</td>
              <td>{app.title}</td>
              <td>{app.type}</td>
              <td>{app.status}</td>
              <td>{app.location}</td>
              <td>{app.date}</td>
              <td><button onClick={()=>deleteApplication(app.id)}>Delete</button></td>
            </tr>
          )) : <tr><td colSpan="7">No applications found</td></tr>}
        </tbody>
      </table>

      <div className="pagination">
        <button onClick={()=>setPage(page-1)} disabled={page<=1}>Previous</button>
        <span>Page {page} of {totalPages||1}</span>
        <button onClick={()=>setPage(page+1)} disabled={page>=totalPages}>Next</button>
      </div>
    </div>
  );
}
