# React and Redux/Redux toolkit App Demo

A demo React and Redux shopping cart application with Firebase integration, allowing users to add, remove, and update items in the cart while keeping the data synchronized in real-time.

## Getting Started

### 1. Install all project dependencies
# In the main app location
npm install

### 2. Set up Firebase
Sign in to Firebase with a Google account and create a new project (you can disable Google Analytics).
Navigate to Build → Realtime Database and click Create Database.
Choose any region and set the database to Test mode.
Copy the database URL.
In the project Open the App.js component and replace the FIREBASE_URL constant with your copied URL so the app can send requests to your Firebase database.

### 3. Start the application
# Start the front-end server
npm start

### 4. Access the project
Once the servers is running, open your browser at:
http://localhost:3000/
