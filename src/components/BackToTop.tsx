"use client";
import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [fadeClass, setFadeClass] = useState("opacity-0");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
        setTimeout(() => setFadeClass("opacity-100"), 10);
      } else {
        setFadeClass("opacity-0");
        setTimeout(() => setIsVisible(false), 300);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className={`fixed bottom-5 right-5 bg-green-600 text-white p-3 rounded-full shadow-md hover:bg-green-700 transition duration-300 ${fadeClass}`}
          aria-label="Voltar ao topo"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </>
  );
}
