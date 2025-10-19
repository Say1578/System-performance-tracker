import { useRef, useCallback } from "react";

export const useSearchFocus = (isOpen: boolean, toggleSidebar: () => void) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFocusClick = useCallback(() => {
    if (!isOpen) {
      toggleSidebar();
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      inputRef.current?.focus();
    }
  }, [isOpen, toggleSidebar]);

  return { inputRef, handleFocusClick };
};