# HireConnect 🚀

[![Frontend Deployment](https://img.shields.io/badge/Frontend-Vercel-black?logo=vercel)](https://vercel.com)
[![Backend Deployment](https://img.shields.io/badge/Backend-Render-46E3B7?logo=render&logoColor=white)](https://render.com)
[![Database](https://img.shields.io/badge/Database-MongoDB%20Atlas-47A248?logo=mongodb&logoColor=white)](https://www.mongodb.com/cloud/atlas)

HireConnect is a full-stack job portal web application designed to connect recruiters and job seekers. Recruiters can post and manage jobs, while candidates can browse open positions, apply for them, and upload their resumes.

---

## 🌐 Live Application URLs

- **Frontend App (Vercel)**: `https://hire-connect-chi.vercel.app/` 
- **Backend API (Render)**: `https://hireconnect-backend-vrql.onrender.com` 

---

## ✨ Features

- **Authentication & Authorization**: Secure JWT authentication stored in HTTP-only cookies.
- **Role-Based Access Control**: Distinct capabilities for **Recruiter (Employer)** and **Job Seeker (Applicant)** roles.
- **Job Management**: Recruiters can post, update, view, and delete job listings.
- **Job Discovery**: Search and view detailed job postings with salary, experience, location, and requirement details.
- **Resume Uploads**: Seamless Cloudinary integration for resume document processing and storage.
- **Dashboards**: Dedicated "My Jobs" and "My Applications" management dashboards.

---

## 🛠️ Tech Stack

### Frontend
- **Framework**: React 18 + Vite
- **Routing**: React Router DOM v6
- **HTTP Client**: Axios (with credentials support)
- **UI Notifications**: React Hot Toast
- **Icons**: React Icons

### Backend
- **Runtime**: Node.js & Express.js
- **Database**: MongoDB Atlas with Mongoose ODM
- **Security & Auth**: JSON Web Tokens (JWT), Cookie-Parser, bcrypt
- **File Uploads**: Express-FileUpload & Cloudinary SDK
- **CORS**: Configurable cross-origin resource sharing

---

## 📁 Project Structure

```text
HireConnect/
├── backend/
│   ├── controllers/         # Request handlers for user, job, application
│   ├── database/            # Mongoose database connection setup
│   ├── middlewares/         # Auth verification & error handling
│   ├── models/              # Mongoose schemas (User, Job, Application)
│   ├── routes/              # Express API route endpoints
│   ├── utils/               # JWT token helper & error classes
│   ├── app.js               # Express application initialization & middleware
│   ├── render.yaml          # Render infrastructure-as-code config
│   └── server.js            # Entry point & port listener
├── frontend/
│   ├── src/                 # React components, pages & context
│   ├── public/              # Static assets & favicon
│   ├── vercel.json          # Vercel SPA routing rewrite config
│   ├── vite.config.js       # Vite build & dev server config
│   └── package.json
└── README.md
```

---

## 🚀 Local Development Setup

### 1. Clone the repository

```bash
git clone https://github.com/<your-username>/HireConnect.git
cd HireConnect
```

### 2. Install dependencies

```bash
# Backend
cd backend
npm install

# Frontend
cd ../frontend
npm install
```

### 3. Environment Variables Setup

#### Backend (`backend/.env`)
```env
PORT=4000
DB_URL=mongodb+srv://<username>:<password>@cluster0.xxx.mongodb.net/hireconnect?retryWrites=true&w=majority
JWT_SECRET_KEY=your_jwt_secret_key
JWT_EXPIRE=7d
COOKIE_EXPIRE=7
FRONTEND_URL=http://localhost:5173
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
NODE_ENV=development
```

#### Frontend (`frontend/.env`)
```env
VITE_API_URL=http://localhost:4000/api/v1
```

### 4. Run Locally

```bash
# Terminal 1 - Backend
cd backend
npm start

# Terminal 2 - Frontend
cd frontend
npm run dev
```

---

## ☁️ Production Deployment Guide

### STEP 1: MongoDB Atlas Database Setup
1. Log in to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
2. Create a new Cluster (Free Tier).
3. Under **Database Access**, create a database user and password.
4. Under **Network Access**, add IP `0.0.0.0/0` (Allows connection from Render).
5. Copy your connection string (`DB_URL`).

### STEP 2: Deploy Backend to Render
1. Create a new **Web Service** on [Render](https://render.com).
2. Connect your GitHub repository and set Root Directory to `backend`.
3. Set Build Command to `npm install` and Start Command to `node server.js`.
4. Add the following Environment Variables:
   - `PORT`: `10000` (or leave default)
   - `NODE_ENV`: `production`
   - `DB_URL`: `<your-mongodb-atlas-connection-string>`
   - `JWT_SECRET_KEY`: `<secure-random-secret>`
   - `JWT_EXPIRE`: `7d`
   - `COOKIE_EXPIRE`: `7`
   - `FRONTEND_URL`: `https://<your-vercel-app>.vercel.app`
   - `CLOUDINARY_CLOUD_NAME`: `<your-cloudinary-name>`
   - `CLOUDINARY_API_KEY`: `<your-cloudinary-key>`
   - `CLOUDINARY_API_SECRET`: `<your-cloudinary-secret>`

### STEP 3: Deploy Frontend to Vercel
1. Import your GitHub repository on [Vercel](https://vercel.com).
2. Set Root Directory to `frontend`.
3. Framework Preset: `Vite`.
4. Build Command: `npm run build`, Output Directory: `dist`.
5. Add Environment Variable:
   - `VITE_API_URL`: `https://<your-render-app>.onrender.com/api/v1`

---

## ✅ Pre-Flight Testing Checklist

- [x] **Registration**: Recruiter & Job Seeker account creation
- [x] **Login & Logout**: JWT authentication & cookie clearing
- [x] **Role Access**: Recruiter-only job creation & viewing applicant submissions
- [x] **Job Management**: Create job, update details, delete job listing
- [x] **Job Application**: Apply for job with cover letter & Cloudinary resume upload
- [x] **Dashboards**: Verification of "My Jobs" and "My Applications" views

---

## 📜 License

This project is licensed under the MIT License.
