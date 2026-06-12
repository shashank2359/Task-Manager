# Task Manager REST API

A full-stack Task Manager application with JWT authentication and role-based access.

## Features

### Authentication
- User Registration
- User Login
- Password Hashing using bcrypt
- JWT Authentication
- Protected Routes

### Task Management
- Create Task
- View Tasks
- Delete Tasks
- Update Task API support

### Frontend
- React.js
- React Router
- Axios API integration
- Dashboard UI

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcryptjs

## API Endpoints

### Authentication

POST /api/auth/register

POST /api/auth/login

### Tasks

GET /api/tasks

POST /api/tasks

PUT /api/tasks/:id

DELETE /api/tasks/:id

## Folder Structure

backend/
├── src/
│ ├── config/
│ ├── controllers/
│ ├── middleware/
│ ├── models/
│ ├── routes/
│ └── server.js

frontend/
├── src/
│ ├── pages/
│ ├── services/
│ ├── App.jsx
│ └── main.jsx

## Scalability Notes

Future enhancements:

- Redis caching
- Docker containerization
- Load balancing
- Microservices architecture
- Centralized logging

## Tech Stack

Frontend:
- React
- Axios
- React Router DOM

Backend:
- Node.js
- Express.js
- MongoDB
- JWT
- bcryptjs

## Screenshots

### Login

![Login](screenshots/login.png)

### Register

![Register](screenshots/register.png)

### Dashboard

![Dashboard](screenshots/dashboard.png)