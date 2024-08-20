# Event Management System

## Overview

The Event Management System is a full-stack web application designed to facilitate the creation, management, and participation in events. It provides a comprehensive solution for event organizers and participants, featuring real-time updates, user authentication, event analytics, and a responsive user interface.

## Tech Stack

- **Frontend**:

  - ![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white)
  - ![Chakra UI](https://img.shields.io/badge/Chakra_UI-319795?style=for-the-badge&logo=chakra-ui&logoColor=white)
  - ![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)

- **Backend**:

  - ![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
  - ![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)

- **Database**:

  - ![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)

- **API**:
  - ![API](https://img.shields.io/badge/API-FFFFFF?style=for-the-badge&logo=api&logoColor=black)

## Features

### User Authentication & Authorization

- Secure user authentication using JWT.
- Roles: Admin (Event Organizer), User (Participant).
- Admins can create, manage, and update events; Users can register and participate in events.

### Event Creation & Management (Admin Role)

- Create events with details like name, date, time, location, and description.
- Update, delete, and reschedule events.
- Set participant limits and manage waitlists.

### Participant Registration & Management (User Role)

- Browse and register for events.
- Real-time notifications for successful registration, waitlisting, or event updates.
- Cancel event registration.

### Real-time Updates & Notifications

- Real-time updates using WebSockets or Firebase.
- Push notifications for event reminders and updates.

### Event Dashboard & Analytics

- Admin dashboard to view event statistics, including participant count and demographics.
- Generate reports on event performance, participation trends, and feedback.

### Responsive Design & UX

- Fully responsive design for an excellent user experience on all devices.
- Modern UI components using Chakra UI.

### Search & Filter

- Search functionality to find events by name, date, or location.
- Filter events based on categories, upcoming dates, and user preferences.

### Backend Architecture

- Node.js with Express.js for the backend.
- MongoDB for the database.
- RESTful APIs for CRUD operations (events, registration, user management)
