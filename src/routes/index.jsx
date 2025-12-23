import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "@/pages/Home";
import Profile from "@/pages/ProfileDesa";
import Infografis from "@/pages/Infografis";
import Berita from "@/pages/Berita";
import Auth from "@/Auth/Auth";
// import Profile from "@/pages/Profile";
// import Setting from "@/pages/Setting";
// import Notification from "@/pages/Notification";
// import File from "@/pages/File";

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/login" element={<Auth />} />
      <Route path="/" element={<Navigate to="/home" replace />} />
      <Route
        path="/home"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />
      <Route
        path="/Infografis"
        element={
          <ProtectedRoute>
            <Infografis />
          </ProtectedRoute>
        }
      />
      <Route
        path="/Berita"
        element={
          <ProtectedRoute>
            <Berita />
          </ProtectedRoute>
        }
      />
      {/* <Route path="/profile" element={<Profile />} />
      <Route path="/setting" element={<Setting />} />
      <Route path="/notification" element={<Notification />} />
      <Route path="/file" element={<File />} /> */}
    </Routes>
  );
};

export default AppRouter;
