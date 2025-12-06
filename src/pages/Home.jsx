import React from "react";
import "../App.css";

function Home() {
  const features = [
    {
      title: "Chrome Extension",
      description:
        "Job boards include: Indeed, Glassdoor, BuiltIn and more. Add job info, ratings, and notes in real time directly from the extension. Automatically detects compensation."
    },
    {
      title: "Bookmarking",
      description:
        "Add positions directly to your Job Application Tracker to stay on top of your job search progress. Organize all opportunities in one place."
    },
    {
      title: "Excitement Rating",
      description:
        "Rate saved jobs to prioritize the ones you are interested in most. Focus on positions that excite you."
    },
    {
      title: "Extract Keywords",
      description:
        "Automatically extract top keywords from bookmarked jobs to know which positions fit best. Include them in your applications to stand out."
    },
    {
      title: "Spreadsheet View",
      description:
        "Imagine Excel or Google Sheets, customized for your job searches. Quickly see your progress and pipeline."
    },
    {
      title: "Email Templates",
      description:
        "Email templates for every stage of your job search. Reach out to recruiters faster and follow up efficiently."
    },
    {
      title: "Contacts",
      description:
        "Bookmark recruiters, hiring managers, coworkers, friends, and more. Organize your professional contacts for referrals."
    },
    {
      title: "Note Taking",
      description:
        "Add custom notes to every position, contact, and company. Track tasks and improve your job search."
    },
    {
      title: "Checklists",
      description:
        "Leverage personalized checklists and recommended tasks for every stage to keep making progress."
    }
  ];

  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Job Application Tracker</h1>
        <p>Welcome! Please login to manage your job applications.</p>
        <div className="login-card">
          <h2>Sign In / Log In</h2>
          <p>Access your dashboard and start tracking your applications.</p>
          <button className="login-btn">Go to Login</button>
        </div>
      </header>

      <section className="features-section">
        <h2>Features</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;


