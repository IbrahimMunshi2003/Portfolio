import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      // Scale up cursor on actionable items
      if (
        e.target.tagName.toLowerCase() === "a" ||
        e.target.tagName.toLowerCase() === "button" ||
        e.target.closest("a") ||
        e.target.closest("button")
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <>
      <motion.div 
        className="hidden md:block fixed top-0 left-0 w-8 h-8 border border-primary rounded-full pointer-events-none z-[9999] mix-blend-difference"
        animate={{
          x: mousePos.x - 16,
          y: mousePos.y - 16,
          scale: isHovered ? 2 : 1,
          backgroundColor: isHovered ? "rgba(163, 255, 18, 0.2)" : "transparent"
        }}
        transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      />
      <motion.div 
        className="hidden md:block fixed top-0 left-0 w-2 h-2 bg-primary rounded-full pointer-events-none z-[9999]"
        animate={{
          x: mousePos.x - 4,
          y: mousePos.y - 4,
          scale: isHovered ? 0 : 1
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.1 }}
      />
    </>
  );
};

export default CustomCursor;
