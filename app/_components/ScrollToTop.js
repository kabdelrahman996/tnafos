"use client";
import { useState, useEffect } from "react";
import { HiChevronUp } from "react-icons/hi2";

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-28 left-8 z-[998] bg-primary text-secondary p-3 rounded-sm shadow-lg border border-secondary/20 hover:bg-secondary hover:text-primary transition-all duration-300 animate-fade-in"
          aria-label="Scroll to top"
        >
          <HiChevronUp className="text-2xl font-black" />
        </button>
      )}
    </>
  );
}

export default ScrollToTop;
