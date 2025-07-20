# 🎓 Edutask – Student-Teacher Task Management System

Edutask is a lightweight task management system built using **React.js** that allows teachers to assign tasks to students, and students to track and manage those tasks.

## 🚀 Features

### 👩‍🏫 For Teachers:
- Login using demo credentials.
- Assign tasks to any student.
- View a summary of all student progress (New, Active, Completed, Failed).

### 🧑‍🎓 For Students:
- Login and see a categorized list of tasks: New, Active, Completed, Failed.
- Accept new tasks.
- Mark tasks as Completed or Failed.
- Real-time updates of task summary.

## 💡 Real-Time Updates (React Context + LocalStorage)

- The app uses **React Context API** and **LocalStorage** for storing and managing user/task data.
- Every time a task is assigned, accepted, completed, or failed:
  - The updates reflect **instantly** in the UI.
  - No manual refresh is needed.
  - This is handled using a method called `refreshStudents()` which reloads data from localStorage and updates React state.

## 📸 Demo Credentials

> ⚠️ For testing only (no authentication backend)

- **Teacher**
  - Email: `teacher1@example.com`
  - Password: `123`
- **Student**
  - Email: `student1@example.com`
  - Password: `123`

## 🧱 Tech Stack

- React.js (Functional Components + Hooks)
- Tailwind CSS
- Context API for global state
- Browser LocalStorage (no database/backend)

## 🗂️ Folder Structure (Frontend)

src/
├── Context/
│ └── AuthProvider.jsx
├── Pages/
│ ├── Login.jsx
│ ├── StudentDashboard.jsx
│ └── TeacherDashboard.jsx
├── TaskList/
│ ├── ActiveTask.jsx
│ ├── CompletedTask.jsx
│ ├── FailedTask.jsx
│ ├── NewTask.jsx
│ └── TaskList.jsx
├── Other/
│ ├── AllTask.jsx
│ ├── CreateTask.jsx
│ ├── Header.jsx
│ └── TaskListNumber.jsx
└── utils/
└── localStorage.js
