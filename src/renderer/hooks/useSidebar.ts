import { useState } from "react";

export function useSidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const toggleSidebar = () => setIsOpen((prev) => !prev);

  return { isOpen, toggleSidebar };
}
