# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# Admin Panel

A responsive, modular, and customizable Admin Panel built with **React**, **React Router**, and **Tailwind CSS**. This project provides a clean and flexible layout including a collapsible sidebar, a top app bar, and routing support via `react-router-dom`.

## 🚀 Features

- 📐 Responsive layout with flexible design
- 🔁 Nested routes with React Router `<Outlet />`
- 🎨 Styled with Tailwind CSS
- 📦 Easily extensible and customizable

## 🧱 Project Structure

src/
├── App.jsx
├── main.jsx
├── components/
│   ├── AdminPanel/
│   │   ├── AdminPanel.jsx
│   │   ├── components/
│   │   │   ├── AppBar.jsx
│   │   │   ├── Sidebar.jsx
│   │   │   ├── MemberDialog.jsx
│   │   │   └── GroupDialog.jsx
│   │   └── sections/
│   │       ├── GroupsSection.jsx
│   │       ├── MessagesSection.jsx
│   │       ├── MembersSection.jsx
│   │       ├── NewGroupSection.jsx
│   │       ├── MeetingSection.jsx
│   │       ├── ChangePasswordSection.jsx
│   │       └── LogoutSection.jsx
├── utils/
│   ├── data.js
│   └── Theme.js
└── styles/
    └── global.css