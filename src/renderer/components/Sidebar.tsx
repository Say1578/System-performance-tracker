import React, { useState } from "react";
import {
  ChevronRight,
  ChevronLeft,
  Search
} from "lucide-react";
import { useSidebar } from "@hooks/useSidebar";
import { useSearchFocus } from "@hooks/useSearchFocus";
import { motion } from "framer-motion";
import { Button } from "@ui/button";
import { Input } from "@ui/input";

const Sidebar: React.FC = () => {
  const { isOpen, toggleSidebar } = useSidebar();
  const { inputRef, handleFocusClick } = useSearchFocus(isOpen, toggleSidebar);

  return (
    <motion.div
      className="bg-[#f5f5f0] text-gray-900 h-screen relative flex flex-col shadow-lg border-r border-gray-300"
      animate={{ width: isOpen ? 250 : 60 }}
      transition={{ type: "spring", stiffness: 200, damping: 30 }}
    >
      {/* Внутренний контейнер */}
      <div className="flex flex-col flex-1 overflow-hidden">

        {/* Кнопка сворачивания */}
        <div className={`flex ${isOpen ? "justify-end" : "justify-center"}`}>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleSidebar}
            className="w-10 h-10 p-0 flex items-center justify-center rounded-full hover:bg-gray-300 transition-colors"
          >
            {isOpen ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
          </Button>
        </div>

        {/* Верхняя панель */}
        <div className="flex flex-col px-2 pt-4 gap-3">

          {/* Поиск */}
          <div className="relative flex items-center justify-center">
            <div
              className={`relative flex items-center justify-center transition-all duration-300 
                ${isOpen ? "w-full" : "w-10"}`}
            >
              {/* Кнопка поиска при закрытом sidebar */}
              {!isOpen && (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handleFocusClick}
                  className="w-10 h-10 p-0 flex items-center justify-center rounded-full hover:bg-gray-300 transition-colors"
                >
                  <Search className="h-4 w-4 text-gray-600" />
                </Button>
              )}

              {/* Поле поиска при открытом sidebar без анимации */}
              {isOpen && (
                <div className="relative w-full overflow-x-hidden">
                  <Input
                    ref={inputRef}
                    placeholder="Search..."
                    className="pl-9 w-full bg-white border-gray-300 focus-visible:ring-0 focus:border-gray-400"
                  />
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 h-4 w-4" />
                </div>
              )}
            </div>
          </div>

          {/* Разделитель */}
          <div className="border-t border-gray-300 my-3" />
        </div>
      </div>
    </motion.div>
  );
};

export default Sidebar;
