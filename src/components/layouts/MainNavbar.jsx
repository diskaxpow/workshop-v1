import React from "react";
import { User } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

const MainNavbar = () => {
    return (
        <nav className="w-full bg-white border-b shadow-sm" >
            <div className="w-full mx-auto px-4 flex items-center justify-end h-16">

                {/* <div className="text-xl font-bold text-gray-800">Workshop React</div> */}
                <div>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <button className="p-2 rounded-full hover:bg-gray-100 focus:outline-none">
                                <User className="w-6 h-6 text-primary" />
                            </button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem>Login</DropdownMenuItem>
                            <DropdownMenuItem>Profile</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </nav>
    );
};

export default MainNavbar;
