import React from "react";
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { useSidebar } from "../hooks/useSidebar";
import { motion } from "framer-motion";

const Sidebar: React.FC = () => {
  const { isOpen, toggleSidebar } = useSidebar();

  return (
    <motion.div
      className="bg-gray-800 text-white h-screen relative flex flex-col"
      animate={{ width: isOpen ? 250 : 50 }}
      transition={{ type: "spring", stiffness: 200, damping: 30 }}
    >
      <motion.button
        onClick={toggleSidebar}
        className="absolute top-4 flex items-center justify-center w-10 h-10 bg-gray-700 rounded-full shadow-md"
        animate={{
          left: isOpen ? 200 : 0,
        }}
        transition={{ type: "spring", stiffness: 200, damping: 30 }}
      >
        {isOpen ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
      </motion.button>

    </motion.div>
  );
};

export default Sidebar;
