# Suvidha Foundation - TPO Management Portal (Frontend)

## Project Overview

This is the frontend application for the Suvidha Foundation TPO (Training & Placement Officer) Management Portal. The portal allows users to securely log in and manage TPO details from various colleges. It features a dashboard displaying recent TPO entries, a searchable and paginated table, and a modal form to add new TPO details.

## Technology Stack

- React (with React Router)
- JavaScript (ES6+)
- CSS for styling

## Features

- **Authentication**
  - Secure login page with form validation
  - Session management (frontend state-based)

- **Dashboard**
  - Welcome message on successful login
  - Display last 10 TPO entries in a responsive, searchable, and paginated table
  - Logout functionality
  - Edit and Delete options for TPO entries with confirmation pop-ups

- **Add TPO Details**
  - Modal popup form to add new TPO details without page refresh
  - Form validation on all fields
  - Immediate update of the dashboard table upon submission

- **Search & Filter**
  - Search bar to filter TPO records by name, college, or email

- **Additional Pages**
  - About page with foundation information accessible from sidebar menu
  - Profile and Contact pages with active page indicator bars below navbar

## Project Structure

- `src/`
  - `components/` - React components including Login, Dashboard, TpoTable, AddTpoModal, LoginHeader, About, Profile, Contact
  - `App.js` - Main app component with routing and authentication state
  - `index.js` - React entry point
  - `App.css` - Global styles

- `public/`
  - `index.html` - HTML template
  - `suvidha-logo.png` - Logo image used in the login header

## Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd tpo_frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```
   The app will be available at `http://localhost:3000`.

4. **Build for production:**
   ```bash
   npm run build
   ```

## Notes

- The backend API and database integration are not included in this frontend project.
- The current authentication is simulated on the frontend; integrate with backend authentication as needed.
- Ensure the backend API endpoints are connected to fetch and store TPO data for full functionality.

## License

This project is for Suvidha Foundation and is intended for educational and organizational use.

## Contact

For any queries or support, please contact the project maintainer.
