# React Food Order App

A demo application with a minimal Node.js backend for a simplified food-ordering shopping cart. It loads a predefined list of meal entities and exposes a portal where users can add meals, modify quantities, review the cart at checkout, update quantities again, and finalize the order. After submission, the cart resets to an empty state and a request is sent to record the order while a confirmation modal is being shown.

## Getting Started

### 1. Install all project dependencies
# In the main app location
npm install

# In the backend application (for the local BE server)
cd backend
npm install

# Start the frontend (main app)
npm run dev

### 2. Start the application
# Start the backend server
cd backend
node app.js

### 3. Access the project
Once both servers are running, open your browser at:
http://localhost:5173/
