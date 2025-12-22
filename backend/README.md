# Workshop V1 - Fullstack JavaScript Application

Project fullstack menggunakan **Express.js** untuk backend dan **React + Vite** untuk frontend.

## 📁 Struktur Project

```
workshop-v1/
├── backend/                 # Express.js Backend
│   ├── src/
│   │   ├── controllers/    # Business logic
│   │   ├── routes/         # API routes
│   │   ├── middleware/     # Middleware functions
│   │   ├── config/         # Configuration files
│   │   └── server.js       # Entry point
│   ├── package.json
│   └── .env
│
├── src/                    # React Frontend
│   ├── Auth/              # Authentication pages
│   ├── components/        # Reusable components
│   ├── pages/            # Page components
│   ├── routes/           # React Router config
│   ├── services/         # API services
│   └── main.jsx          # Entry point
│
└── package.json          # Frontend dependencies
```

## 🚀 Cara Menjalankan Project

### 1. Install Dependencies

#### Backend

```bash
cd backend
npm install
```

#### Frontend (dari root folder)

```bash
npm install
```

### 2. Jalankan Development Server

#### Terminal 1 - Backend (Port 5000)

```bash
cd backend
npm run dev
```

Backend akan berjalan di: `http://localhost:5000`

#### Terminal 2 - Frontend (Port 5173)

```bash
npm run dev
```

Frontend akan berjalan di: `http://localhost:5173`

## 🔑 Demo Login Credentials

- **Email**: `admin@example.com`
- **Password**: `admin123`

atau

- **Email**: `user@example.com`
- **Password**: `user123`

## 📡 API Endpoints

### Authentication

- `POST /api/auth/login` - Login user
- `POST /api/auth/register` - Register user baru
- `POST /api/auth/logout` - Logout user

### Users

- `GET /api/users` - Get all users (dengan pagination & search)
- `GET /api/users/:id` - Get user by ID
- `POST /api/users` - Create new user
- `PUT /api/users/:id` - Update user
- `DELETE /api/users/:id` - Delete user

## 🛠️ Tech Stack

### Backend

- Express.js
- CORS
- dotenv
- bcryptjs (untuk hashing password)
- jsonwebtoken (untuk JWT authentication)

### Frontend

- React 19
- Vite
- React Router DOM
- Axios
- Tailwind CSS
- Radix UI
- Lucide React (icons)
- Sonner (toast notifications)

## 📝 Notes

- Backend menggunakan in-memory data (array). Untuk production, gunakan database seperti MongoDB, PostgreSQL, atau MySQL.
- JWT authentication sudah disiapkan tapi masih simplified. Implementasi full JWT bisa ditambahkan sesuai kebutuhan.
- CORS sudah diaktifkan untuk development.

## 🔧 Environment Variables

Backend `.env` file:

```
PORT=5000
JWT_SECRET=your_jwt_secret_key_change_this_in_production
NODE_ENV=development
```

## 📦 Scripts

### Backend

- `npm start` - Run production server
- `npm run dev` - Run development server dengan nodemon

### Frontend

- `npm run dev` - Run development server
- `npm run build` - Build untuk production
- `npm run preview` - Preview production build
