import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <div className="navbar">
      <Link to="/">Home</Link>
      {user && <Link to="/dashboard">Dashboard</Link>}
      {user && <Link to="/add-application">Add Application</Link>}
      {user && <Link to="/applications">Applications</Link>}

      {!user ? (
        <Link to="/login" style={{ marginLeft: "auto" }}>Login</Link>
      ) : (
        <button onClick={logout} style={{ marginLeft: "auto" }}>Logout</button>
      )}
    </div>
  );
}
