import { useState, useCallback } from "react";

export const useNavigationHistory = (initial: string = "home") => {
  const [history, setHistory] = useState<string[]>([initial]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentSection = history[currentIndex];

  const goBack = useCallback(() => {
    if (currentIndex > 0) setCurrentIndex((prev) => prev - 1);
  }, [currentIndex]);

  const goForward = useCallback(() => {
    if (currentIndex < history.length - 1) setCurrentIndex((prev) => prev + 1);
  }, [currentIndex, history.length]);

  const navigateTo = useCallback((section: string) => {
    const newHistory = history.slice(0, currentIndex + 1);
    setHistory([...newHistory, section]);
    setCurrentIndex((prev) => prev + 1);
  }, [history, currentIndex]);

  return { currentSection, goBack, goForward, navigateTo, currentIndex, history };
}