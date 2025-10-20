import React from "react";
import { ArrowLeft, ArrowRight, House, Bell } from "lucide-react";
import { Button } from "@ui/button";

const Header: React.FC = () => {
  return (
    <header className="bg-[#f5f5f0] text-gray-900 w-full h-13 flex items-center justify-between px-2 border-b border-gray-300">
      
      {/* Навигация */}
      <div className="flex items-center">
        <Button
          variant="ghost"
          size="icon"
          className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-300 transition-colors"
        >
          <ArrowLeft size={20} />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-300 transition-colors"
        >
          <ArrowRight size={20} />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-300 transition-colors"
        >
          <House size={20} />
        </Button>
      </div>

      {/* Уведомления */}
      <div className="flex items-center gap-1">
        <Button
          variant="ghost"
          size="icon"
          className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-300 transition-colors"
        >
          <Bell size={20} />
        </Button>
      </div>
    </header>
  );
};

export default Header;
