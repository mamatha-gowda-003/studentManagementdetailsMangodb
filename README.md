# Student Management System

A full-stack web application for managing student records with CRUD (Create, Read, Update, Delete) functionality. Built with Node.js, Express, MongoDB (Mongoose), and vanilla JavaScript.

## Table of Contents
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
- [Running the Application](#running-the-application)
- [Database Configuration](#database-configuration)

## Features

- ✅ Add new students with name and age
- ✅ View all students in a responsive table
- ✅ Edit existing student information
- ✅ Delete students from the database
- ✅ Filter students by age and update by name
- ✅ Responsive UI with clean design
- ✅ RESTful API architecture

## Technology Stack

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose ODM
- **Dependencies**:
  - express: ^5.2.1
  - mongoose: ^9.0.1
  - body-parser: ^2.2.1
  - cors: ^2.8.5

## Prerequisites

Before running this application, ensure you have the following installed:
- Node.js (version 14 or higher)
- MongoDB (local installation or cloud instance)
- npm (comes with Node.js)

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd mango
   ```

2. Install backend dependencies:
   ```bash
   npm install
   ```

3. Ensure MongoDB is running on your system:
   ```bash
   # Start MongoDB service (varies by OS)
   # On Windows:
   net start MongoDB
   
   # On macOS/Linux:
   mongod
   ```

## Project Structure

```
mango/
├── backend/
│   ├── models/
│   │   └── Student.js          # Student schema definition
│   ├── routers/
│   │   └── studentRoutes.js    # API routes for student operations
│   └── server.js               # Main server file
├── frontend/
│   ├── index.html              # Main dashboard to view students
│   ├── add.html                # Form to add new students
│   └── edit.html               # Form to edit existing students
├── package.json                # Project metadata and dependencies
└── README.md                   # This file
```

## API Endpoints

All API endpoints are prefixed with `/students`:

| Method | Endpoint           | Description                  |
|--------|--------------------|------------------------------|
| POST   | `/add`             | Create a new student         |
| GET    | `/`                | Get all students             |
| GET    | `/:id`             | Get a specific student       |
| PUT    | `/update/:id`      | Update a specific student    |
| DELETE | `/delete/:id`      | Delete a specific student    |

## Running the Application

1. Start the MongoDB service if not already running:
   ```bash
   # Command varies by OS - example for Windows:
   net start MongoDB
   ```

2. Start the backend server:
   ```bash
   node backend/server.js
   ```
   
   The server will start on port 5000 and connect to MongoDB on the default port 27017.

3. Open the frontend in your browser:
   - Main dashboard: `frontend/index.html`
   - Add student form: `frontend/add.html`
   - Edit student form: `frontend/edit.html`

## Database Configuration

The application connects to MongoDB using the connection string:
```
mongodb://localhost:27017/studentDB
```

If you need to change the database connection settings, modify the `mongoose.connect()` call in [server.js](file:///c:/Users/mamat/OneDrive/Music/mango/backend/server.js):

```javascript
mongoose.connect("mongodb://your-host:port/database-name")
```

## Usage

1. **View Students**: Open `frontend/index.html` to see all students in a table
2. **Add Student**: Click the "Add New Student" button to navigate to the add form
3. **Edit Student**: Click the "Edit" button next to any student to modify their information
4. **Delete Student**: Click the "Delete" button next to any student to remove them from the database
5. **Advanced Edit**: In the edit page, you can also filter students by age and update their names

## Troubleshooting

- **Connection Issues**: Ensure MongoDB is running on port 27017
- **CORS Errors**: The application includes CORS middleware to prevent cross-origin issues
- **Port Conflicts**: If port 5000 is in use, modify the `app.listen()` call in [server.js](file:///c:/Users/mamat/OneDrive/Music/mango/backend/server.js)
