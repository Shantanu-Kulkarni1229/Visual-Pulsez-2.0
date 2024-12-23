"use client";
import ArrowRight from "@/assets/arrow-right.svg";
import vplogo from "@/assets/vplogo.png";
import Image from "next/image";
import MenuIcon from "@/assets/menu.svg";
import { useState, useEffect } from "react";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [userName, setUserName] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Mock authentication check
    const storedUser = localStorage.getItem("userName");
    setUserName(storedUser);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userName");
    setUserName(null);
    window.location.reload();
  };

  return (
    <header
      className={`sticky top-0 z-20 transition-all duration-300 ease-in-out ${
        scrolled ? "backdrop-blur-lg bg-white/90" : "backdrop-blur-sm bg-white/50"
      }`}
    >
      {/* Top Notification Bar */}
      <div className="flex justify-center items-center h-8 bg-blue-900 text-white text-sm gap-2 px-4">
        <p className="text-white/60 hidden md:inline">
          Streamline your workflow with Visual Pulsez
        </p>
        <div className="inline-flex items-center gap-1 cursor-pointer">
          {userName ? (
            <p>Welcome, {userName}!</p>
          ) : (
            <div className="flex items-center gap-2">
              <p>Get Started for free</p>
              <ArrowRight className="h-4 w-4" />
            </div>
          )}
        </div>
      </div>

      {/* Main Navigation */}
      <div
        className={`py-3 shadow-md transition-transform duration-300 ease-in-out ${
          scrolled ? "scale-110" : "scale-100"
        }`}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <Image
            src={vplogo}
            alt="Visual Pulsez Logo"
            height={scrolled ? 80 : 60}
            width={scrolled ? 80 : 60}
            className="transition-all duration-300"
          />

          {/* Mobile Menu Icon */}
          <MenuIcon
            className="h-6 w-6 md:hidden cursor-pointer"
            aria-label="Open Navigation Menu"
            onClick={() => setMenuOpen(!menuOpen)}
          />

          {/* Navigation Links */}
          <nav
            className={`${
              menuOpen ? "flex" : "hidden"
            } md:flex gap-8 text-gray-900 font-medium items-center flex-col md:flex-row absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none p-6 md:p-0 transition-all duration-300 ease-in-out`}
          >
            <a href="#" className="hover:text-blue-700 transition-colors">
              About
            </a>
            <a href="#" className="hover:text-blue-700 transition-colors">
              Features
            </a>
            <a href="#" className="hover:text-blue-700 transition-colors">
              Customer
            </a>
            <a href="#" className="hover:text-blue-700 transition-colors">
              Updates
            </a>
            <a href="#" className="hover:text-blue-700 transition-colors">
              Help
            </a>

            {/* Conditional Buttons */}
            {userName ? (
              <div className="flex items-center gap-4">
                <span className="text-gray-700 font-semibold">
                  Hi, {userName}
                </span>
                <button
                  className="bg-red-500 text-white px-6 py-2 rounded-lg font-semibold shadow-md hover:bg-red-600 transition-colors"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex gap-4">
                <a
                  href="/auth/signin"
                  className="bg-blue-900 text-white px-6 py-2 rounded-lg font-semibold shadow-md hover:bg-blue-800 transition-colors"
                >
                  Sign In
                </a>
                <a
                  href="/auth/signup"
                  className="bg-green-600 text-white px-6 py-2 rounded-lg font-semibold shadow-md hover:bg-green-700 transition-colors"
                >
                  Sign Up
                </a>
              </div>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};
