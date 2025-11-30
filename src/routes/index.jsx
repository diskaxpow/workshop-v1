import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Users from "@/pages/Users";
// import Profile from "@/pages/Profile";
// import Setting from "@/pages/Setting";
// import Notification from "@/pages/Notification";
// import File from "@/pages/File";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" replace />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/users" element={<Users />} />
      {/* <Route path="/profile" element={<Profile />} />
      <Route path="/setting" element={<Setting />} />
      <Route path="/notification" element={<Notification />} />
      <Route path="/file" element={<File />} /> */}
    </Routes>
  );
};

export default AppRouter;
