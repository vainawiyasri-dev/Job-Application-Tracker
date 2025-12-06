import React from "react";
import { useAppData } from "../contexts/AppDataContext";

export default function Dashboard() {
  const { applications } = useAppData();
  const total = applications.length;
  const applied = applications.filter(a=>a.status==="Applied").length;
  const interview = applications.filter(a=>a.status==="Interview Scheduled").length;
  const selected = applications.filter(a=>a.status==="Selected").length;
  const rejected = applications.filter(a=>a.status==="Rejected").length;
  const last5 = [...applications].reverse().slice(0,5);

  return (
    <div>
      <h2>Dashboard</h2>
      <div className="dashboard-cards">
        <div className="card"><h3>Total Applications</h3><p>{total}</p></div>
        <div className="card"><h3>Applied</h3><p>{applied}</p></div>
        <div className="card"><h3>Interview Scheduled</h3><p>{interview}</p></div>
        <div className="card"><h3>Selected</h3><p>{selected}</p></div>
        <div className="card"><h3>Rejected</h3><p>{rejected}</p></div>
      </div>

      <div>
        <h3>Last 5 Applications</h3>
        {last5.length>0 ? <ul>{last5.map(app=><li key={app.id}><strong>{app.company}</strong> - {app.title} ({app.status})</li>)}</ul> : <p>No applications yet</p>}
      </div>
    </div>
  );
}
