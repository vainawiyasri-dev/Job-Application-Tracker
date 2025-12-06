import React from "react";
import "../App.css";

const features = [
  
  {
    title: "Bookmarking",
    desc: "Organize all your job opportunities in one place and stay on top of your search.",
  },
  {
    title: "Extract Keywords",
    desc: "Automatically extract top keywords from bookmarked jobs to tailor your applications.",
  },
  {
    title: "Spreadsheet View",
    desc: "Track all your applications in a custom spreadsheet-like view for easy management.",
  },
  {
    title: "Note Taking & Checklists",
    desc: "Add custom notes per job or contact. Follow personalized checklists to stay on track.",
  },
];

function Home() {
  return (
    <div className="home-container">
      <div className="home-header">
        <h1>Job Application Tracker</h1>
        <p>Welcome! Please login to manage your job applications.</p>
      </div>

      <div className="features-section">
        <h2>App Features</h2>
        <div className="features-grid-home">
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
