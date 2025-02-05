"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    gsap.from(".nav-item", {
      opacity: 0,
      y: -20,
      duration: 0.5,
      stagger: 0.2,
    });
  }, []);

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <header className="fixed top-0 left-0 w-full bg-transparent backdrop:blur-3xl  shadow-md z-50 my-10">
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link
          href="/"
          className="text-2xl font-bold bg-gradient-to-r from-teal-600 via-green-600 to-sky-500 bg-clip-text text-transparent"
        >
          TINKTEQ
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="text-lg font-medium hover:text-[#57d3d9] transition-colors duration-200">Home</Link>
          <Link href="/about" className="text-lg font-medium hover:text-[#57d3d9] transition-colors duration-200">About Us</Link>
          <Link href="/services" className="text-lg font-medium hover:text-[#57d3d9] transition-colors duration-200">Services</Link>
          <Link href="/contact" className="text-lg font-medium hover:text-[#57d3d9] transition-colors duration-200">Contact</Link>
        </nav>
        <button className="md:hidden" onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar with outside click detection */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setIsOpen(false)}>
          <div
            ref={sidebarRef}
            className={`fixed top-0 right-0 w-64 h-full bg-[#080808] text-white transform transition-transform duration-300 ease-in-out z-50 ${
              isOpen ? "translate-x-0" : "translate-x-full"
            } md:hidden flex flex-col items-center justify-center space-y-8 shadow-xl`}
            onClick={(e) => e.stopPropagation()} // Prevents closing when clicking inside
          >
            <Link href="/Home" className="text-lg font-medium hover:text-[#57d3d9] transition-colors duration-200" onClick={toggleMenu}>
              Home
            </Link>
            <Link href="/About" className="text-lg font-medium hover:text-[#57d3d9] transition-colors duration-200" onClick={toggleMenu}>
              About Us
            </Link>
            <Link href="/Features" className="text-lg font-medium hover:text-[#57d3d9] transition-colors duration-200" onClick={toggleMenu}>
              Services
            </Link>
            <Link href="/Solutions" className="text-lg font-medium hover:text-[#57d3d9] transition-colors duration-200" onClick={toggleMenu}>
              Contacts
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
