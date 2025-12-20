import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, User, Settings, Bell, Folder, ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";

const menu = () => [
    { name: "Dashboard", icon: Home, path: "/home" },
    { name: "Users", icon: User, path: "/users" },
    { name: "Settings", icon: Settings, path: "/setting" },
    { name: "Notifications", icon: Bell, path: "/notification" },
    { name: "Files", icon: Folder, path: "/file" },
];

const MainSidebar = ({ collapsed, setCollapsed }) => {
    const menus = menu();
    const location = useLocation();

    return (
        <aside
            className={cn(
                "fixed top-0 left-0 h-screen bg-putih border-r flex flex-col transition-all duration-300 z-30",
                collapsed ? "w-20" : "w-64"
            )}
        >
            {/* Sidebar Header: App Title & Toggle */}
            <div className="flex items-center justify-between px-4 py-4 border-b">
                <span
                    className={cn(
                        "font-bold transition-all duration-300 text-primary text-2xl",
                        collapsed ? "hidden" : "inline-block"
                    )}
                >
                    CMS Webides
                </span>
                <button
                    onClick={() => setCollapsed((prev) => !prev)}
                    className="p-2 rounded hover:bg-gray-100 focus:outline-none"
                    aria-label="Toggle sidebar"
                >
                    <ArrowLeft
                        className={cn(
                            "w-5 h-5 text-gray-500 transition-transform duration-300",
                            collapsed ? "rotate-180" : ""
                        )}
                    />
                </button>
            </div>
            <nav className="flex-1 py-6">
                <ul className="space-y-2">
                    {menus.map((item, idx) => (
                        <li key={idx}>
                            <Link
                                to={item.path}
                                className={cn(
                                    "flex items-center gap-3 px-4 py-2 rounded-md transition-colors",
                                    collapsed ? "justify-center" : "",
                                    location.pathname === item.path 
                                        ? "bg-primary text-white font-semibold" 
                                        : "hover:bg-primary/10 hover:text-primary text-gray-700"
                                )}
                            >
                                <item.icon className={cn(
                                    "w-5 h-5 transition-colors",
                                    location.pathname === item.path ? "text-white" : "text-gray-700"
                                )} />
                                <span className={cn("transition-all duration-300 ", collapsed ? "hidden" : "inline-block")}>{item.name}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
    );
};

export default MainSidebar;
