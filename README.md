📝 Job Application Tracker

Job Application Tracker is a frontend React application to manage and track job applications. Users can add, view, search, filter, sort, paginate applications, and see a dashboard summary of application statuses.

✨ Features

🔑 User Authentication (Fake)

Login system with roles (user and manager)

📝 Add Job Applications

Form with validation and optional notes

📊 Applications Table

Search by company name or job title

Filter by job type and status

Sort by company name or applied date

Pagination (5 applications per page)

Delete application functionality

📈 Dashboard

Summary cards: Total, Applied, Interview Scheduled, Selected, Rejected

Last 5 applications list

🎨 Professional UI

Responsive, modern styling with cards, hover effects, shadows

🛠️ Tech Stack

⚛️ Frontend: React.js

🌐 Routing: React Router v6

🗂️ State Management: Context API

🎨 Styling: CSS

🛠️ Tools: Node.js, npm

🗂️ Project Structure
job-tracker/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   └── ...
├── src/
│   ├── components/       # Navbar, RequireAuth, Table, Filters, etc.
│   ├── contexts/         # AuthContext.js, AppDataContext.js
│   ├── pages/            # Home, Login, Dashboard, Applications, AddApplication, NotFound
│   ├── App.css
│   ├── App.js
│   └── index.js
├── .gitignore
├── package.json
├── package-lock.json
└── README.md

📸 Screenshots

Login Page


Applications Table


Dashboard Summary


Replace the above placeholders with actual screenshots from your project.

🚀 How to Run Locally

Clone the repository:

git clone https://github.com/your-username/job-application-tracker.git


Navigate to the project folder:

cd job-application-tracker


Install dependencies:

npm install


Start the development server:

npm start


Open http://localhost:3000
 in your browser.

🌐 Deployment

You can deploy the app online using:

🌐 Netlify: https://www.netlify.com/

🌐 Vercel: https://vercel.com/

🌐 Render: https://render.com/

📄 License

This project is for educational purposes.

💡 Notes

This is a frontend-only React project.

Job applications are stored temporarily in React state (no backend).

Styling is fully responsive and professional.

The project demonstrates React Router, Context API, forms, tables, search, filter, sort, pagination, and dashboard summary.
