"use client";
import { useState, useEffect, ReactNode } from "react";

type MouseParallaxWrapperProps = {
  render: (props: {
    mousePosition: { x: number; y: number };
    scrollY: number;
  }) => ReactNode;
  children?: ReactNode; // ignorowane
};

export default function MouseParallaxWrapper({
  render,
}: MouseParallaxWrapperProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return <>{render({ mousePosition, scrollY })}</>;
}
