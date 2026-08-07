# Student Management System

A Student Management System developed using **React.js** to manage users and student academic records through a simple and interactive web application.

## Features

- Role-based login for Admin and Faculty
- User registration and management
- Student record management
- Add, update, view, and delete student records
- Add, update, and delete users
- Automatic calculation of total marks and percentage
- Form validation
- Delete confirmation
- REST API integration using Axios
- JSON Server for data storage

## Technologies Used

- React.js
- JavaScript (ES6+)
- Axios
- JSON Server
- REST API
- React Hooks (`useState`, `useEffect`)

## Project Structure

- `LoginForm.jsx` – User login and role-based authorization
- `RegistrationForm.jsx` – Add and update users
- `AdminD.jsx` – Admin dashboard and user management
- `StudentForm.jsx` – Student CRUD operations and marks calculation
- `FacultyD.jsx` – Faculty dashboard
- `services.js` – API service functions
- `db.json` – JSON Server database

## How It Works

The application is developed using a **component-based React architecture**. React Hooks are used for state management and handling API requests. **Axios** is used to communicate with the **JSON Server REST API**, while CRUD operations allow users and student records to be created, updated, displayed, and deleted.

## Installation

```bash
npm install
