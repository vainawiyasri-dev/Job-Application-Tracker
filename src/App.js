import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { AuthProvider } from "./contexts/AuthContext";
import { AppDataProvider } from "./contexts/AppDataContext";

import Navbar from "./components/Navbar";
import RequireAuth from "./components/RequireAuth";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import AddApplication from "./pages/AddApplication";
import Applications from "./pages/Applications";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppDataProvider>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />

            {/* ✅ Protected Routes */}
            <Route element={<RequireAuth />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/add-application" element={<AddApplication />} />
              <Route path="/applications" element={<Applications />} />
            </Route>

            <Route path="*" element={<NotFound />} />
          </Routes>
        </AppDataProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
