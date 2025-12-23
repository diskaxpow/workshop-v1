# 🚀 Cara Menjalankan Project Fullstack

## ✅ Project sudah siap digunakan!

Backend Express.js dan Frontend React sudah terhubung.

---

## 📋 Opsi 1: Jalankan Backend dan Frontend Terpisah (Recommended untuk Development)

### Terminal 1 - Backend

```powershell
cd backend
npm run dev
```

✅ Backend berjalan di: **http://localhost:5000**

### Terminal 2 - Frontend

```powershell
npm run dev
```

✅ Frontend berjalan di: **http://localhost:5173**

---

## 📋 Opsi 2: Jalankan Sekaligus (Single Command)

```powershell
npm run dev:fullstack
```

Ini akan menjalankan backend dan frontend bersamaan dalam satu terminal.

---

## 🔐 Login ke Aplikasi

Buka browser dan akses: **http://localhost:5173**

**Demo Credentials:**

- Email: `admin@example.com`
- Password: `admin123`

atau

- Email: `user@example.com`
- Password: `user123`

---

## 🧪 Test API Endpoints

Setelah backend berjalan, test endpoint berikut:

### 1. Health Check

```powershell
curl http://localhost:5000
```

### 2. Get All Users

```powershell
curl http://localhost:5000/api/users
```

### 3. Login

```powershell
curl -X POST http://localhost:5000/api/auth/login `
  -H "Content-Type: application/json" `
  -d '{\"email\":\"admin@example.com\",\"password\":\"admin123\"}'
```

---

## 📁 Struktur Project

```
workshop-v1/
├── backend/              ← Express.js API
│   ├── src/
│   │   ├── controllers/  ← Business logic
│   │   ├── routes/       ← API routes
│   │   ├── middleware/   ← Auth & validasi
│   │   └── server.js     ← Entry point
│   └── package.json
│
├── src/                  ← React Frontend
│   ├── Auth/            ← Login page
│   ├── pages/           ← Home, Users, About
│   ├── services/        ← API integration
│   └── components/      ← UI components
│
└── package.json
```

---

## 🔥 Fitur yang Sudah Ada

### Backend (Express.js)

✅ Authentication API (login, register, logout)  
✅ User Management CRUD  
✅ CORS enabled  
✅ Error handling middleware  
✅ In-memory database (array)

### Frontend (React)

✅ Login page dengan validasi  
✅ Protected routes  
✅ User management page (CRUD)  
✅ Toast notifications  
✅ Responsive design  
✅ API integration dengan Axios

---

## 🛠️ Troubleshooting

### Backend tidak jalan?

1. Pastikan sudah install dependencies:

   ```powershell
   cd backend
   npm install
   ```

2. Cek apakah port 5000 sudah dipakai:
   ```powershell
   netstat -ano | findstr :5000
   ```

### Frontend tidak connect ke backend?

1. Pastikan backend sudah berjalan di port 5000
2. Cek file `src/services/api.js` - BASE_URL harus `http://localhost:5000/api`

### CORS error?

CORS sudah di-enable di backend. Kalau masih error, pastikan backend berjalan dengan baik.

---

## 📝 Next Steps

1. ✅ **Database Integration**  
   Ganti in-memory array dengan database (MongoDB, PostgreSQL, MySQL)

2. ✅ **Full JWT Implementation**  
   Implement JWT token verification di middleware

3. ✅ **Form Validation**  
   Tambahkan validasi di backend menggunakan express-validator

4. ✅ **File Upload**  
   Implement multer untuk upload file/gambar

5. ✅ **Pagination & Search**  
   Sudah ada basic implementation, bisa diperbaiki

---

## 🎯 Selamat Belajar!

Project fullstack JavaScript Anda sudah siap! 🚀
