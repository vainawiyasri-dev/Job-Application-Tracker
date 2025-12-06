import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("jobtracker_user");
    return saved ? JSON.parse(saved) : null;
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem("jobtracker_user", JSON.stringify(user));
    } else {
      localStorage.removeItem("jobtracker_user");
    }
  }, [user]);

  function login(email, password) {
    const role = email === "hrmanager@gmail.com" ? "manager" : "user";
    const u = { email, role };
    setUser(u);
  }

  function logout() {
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
