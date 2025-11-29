import React, { useState } from "react";
import MainSidebar from "./MainSidebar";
import MainNavbar from "./MainNavbar";

const SIDEBAR_EXPANDED = 256; // px
const SIDEBAR_COLLAPSED = 80; // px

const MainLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const sidebarWidth = collapsed ? SIDEBAR_COLLAPSED : SIDEBAR_EXPANDED;

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      {/* Sidebar vertical on the left */}
      <MainSidebar collapsed={collapsed} setCollapsed={setCollapsed} />
      <div className="flex flex-col flex-1 h-screen" style={{ marginLeft: sidebarWidth }}>
        {/* Navbar */}
        <MainNavbar sidebarWidth={sidebarWidth} />
        {/* Main Content */}
        <main className="flex-1 p-4 md:p-8 transition-all duration-300 overflow-hidden">
          {children}
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
