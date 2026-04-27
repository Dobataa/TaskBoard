# TaskBoard

A full-stack task management application built with React and Node.js, supporting task creation, updates, filtering, and status tracking.

The project demonstrates REST API design, frontend state management, and clean separation between client and server.

## Features

- Create, edit, delete, and update task status
- Different statuses(to do, in progress, done)
- Loading, error, and empty states handling

## Architecture

The application is split into two main parts:

- **Frontend**: React application using functional components and hooks
- **Backend**: REST API built with Node.js and Express
- **Data Layer**: Structured storage for task entities (id, title, status, timestamps)

The backend acts as the source of truth, while the frontend handles UI state and user interactions.

## Tech Stack

### Frontend
- React
- Material UI

### Backend
- Node.js
- Express
- REST API

### Data
- PostgreSQL (Supabase)

## Live Demo

You can test the application here:

👉 https://task-board-psi-nine.vercel.app/

### Test Scenarios
- Create a new task
- Edit task
- Change task status (todo → in-progress → done)
- Delete a task

The app includes loading states, error handling, and optimistic UI updates.