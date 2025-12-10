# NextJS Food Demo App

This Food App is built with Next.js 15 (App Router) and React 19, allowing users to browse meals stored in a SQLite database via better-sqlite3, view detailed meal pages, and add new meals using text inputs, 
automatic slug generation with slugify, and secure image uploads. User input is sanitized using xss to ensure safety, and the architecture stays lightweight with minimal dependencies. 
ESLint with eslint-config-next is used to maintain clean, consistent code throughout the project.

---

## Installation & Setup

Follow the steps below to run the project locally.

### **1. Install Node.js**

Make sure you have **Node.js 16+** installed.

### **2. Install dependencies**

```bash
npm install
```

### **3. Start the development server**

```bash
npm run dev
```

The app will open at:

```
http://localhost:3000
```
