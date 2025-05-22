Admin Panel
A responsive, modular, and customizable Admin Panel built with React, React Router, and Tailwind CSS. This project provides a clean and flexible layout including a collapsible sidebar, a top app bar, and routing support via react-router-dom.

🚀 Features
📐 Responsive layout with flexible design
🔁 Nested routes with React Router <Outlet />
🎨 Styled with Tailwind CSS
📦 Easily extensible and customizable
🧱 Project Structure
src/ ├── App.jsx ├── main.jsx ├── components/ │ ├── AdminPanel/ │ │ ├── AdminPanel.jsx │ │ ├── components/ │ │ │ ├── AppBar.jsx │ │ │ ├── Sidebar.jsx │ │ │ ├── MemberDialog.jsx │ │ │ └── GroupDialog.jsx │ │ └── sections/ │ │ ├── GroupsSection.jsx │ │ ├── MessagesSection.jsx │ │ ├── MembersSection.jsx │ │ ├── NewGroupSection.jsx │ │ ├── MeetingSection.jsx │ │ ├── ChangePasswordSection.jsx │ │ └── LogoutSection.jsx ├── utils/ │ ├── data.js │ └── Theme.js └── styles/ └── global.css
