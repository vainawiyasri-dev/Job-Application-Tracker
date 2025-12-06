import React, { createContext, useContext, useEffect, useState } from "react";

const AppDataContext = createContext();

export function useAppData() {
  return useContext(AppDataContext);
}

export function AppDataProvider({ children }) {
  const [applications, setApplications] = useState(() => {
    const saved = localStorage.getItem("jobtracker_apps");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("jobtracker_apps", JSON.stringify(applications));
  }, [applications]);

  function addApplication(app) {
    const newApp = {
      id: Date.now().toString(),
      ...app,
    };
    setApplications((prev) => [newApp, ...prev]);
  }

  function editApplication(id, updatedApp) {
    setApplications((prev) =>
      prev.map((app) => (app.id === id ? updatedApp : app))
    );
  }

  function deleteApplication(id) {
    setApplications((prev) => prev.filter((app) => app.id !== id));
  }

  return (
    <AppDataContext.Provider
      value={{ applications, addApplication, editApplication, deleteApplication }}
    >
      {children}
    </AppDataContext.Provider>
  );
}
