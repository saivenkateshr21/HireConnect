# HireConnect

HireConnect is a full-stack job portal application designed to connect recruiters and job seekers. Recruiters can post and manage jobs, while candidates can browse open positions, apply for them, and upload their resumes.

## Features

- User registration and login
- Role-based access for recruiters and applicants
- Job posting, editing, and deletion
- Job listing and detailed job view
- Resume upload and application submission
- My Jobs and My Applications dashboards
- Secure authentication using JWT and cookies

## Tech Stack

### Frontend
- React
- Vite
- React Router DOM
- Axios
- React Hot Toast
- React Icons

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT authentication
- Cloudinary for resume file uploads
- Cookie parser and CORS support

## Project Structure

```text
HireConnect/
├── backend/
│   ├── controllers/
│   ├── database/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── app.js
│   ├── package.json
│   └── server.js
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── vite.config.js
└── README.md
```

## Getting Started

### 1. Clone the repository

```bash
git clone <repository-url>
cd HireConnect
```

### 2. Install dependencies

Install backend dependencies:

```bash
cd backend
npm install
```

Install frontend dependencies:

```bash
cd ../frontend
npm install
```

### 3. Configure environment variables

Create a `.env` file inside the `backend` folder with the following variables:

```env
PORT=4000
DB_URL=<your_mongodb_connection_string>
JWT_SECRET_KEY=<your_jwt_secret>
JWT_EXPIRE=7d
COOKIE_EXPIRE=7
FRONTEND_URL=http://localhost:5173
CLOUDINARY_CLOUD_NAME=<your_cloudinary_cloud_name>
CLOUDINARY_API_KEY=<your_cloudinary_api_key>
CLOUDINARY_API_SECRET=<your_cloudinary_api_secret>
```

> The frontend currently communicates with the backend on `http://localhost:4000` for auth and job-related API calls.

## Run the Application

Start the backend server:

```bash
cd backend
npm run dev
```

Start the frontend development server:

```bash
cd frontend
npm run dev
```

## Useful Scripts

### Backend
- `npm run dev` — runs the backend API server
- `npm start` — starts the backend in production mode

### Frontend
- `npm run dev` — runs the Vite development server
- `npm run build` — builds the frontend for production
- `npm run preview` — previews the production build locally

## Notes

- MongoDB must be reachable through the connection string in `DB_URL`.
- Cloudinary is used to store uploaded resumes.
- The app is structured as a decoupled frontend and backend, making it suitable for extension or deployment separately.

## License

This project is currently unlicensed unless otherwise specified.
