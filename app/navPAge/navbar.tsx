'use client'
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleProfileDropdown = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  return (
    <div className="fixed top-0 left-0 w-full bg-gray-900 text-white z-50 flex items-center justify-between px-4 py-2 shadow-md">
      {/* ☰ Button */}
      <button
        onClick={toggleSidebar}
        className="text-white bg-gray-800 px-4 py-2 rounded hover:bg-gray-700 focus:outline-none"
      >
        ☰
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-800 shadow-lg transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <button
          onClick={toggleSidebar}
          className="text-white px-4 py-2 mt-4 hover:bg-gray-700 focus:outline-none"
        >
          Close
        </button>
        <nav className="mt-4">
          <Link href="/" className="block px-4 py-2 hover:bg-gray-700">
            Home
          </Link>
          <Link href="/allcontent/about" className="block px-4 py-2 hover:bg-gray-700">
            About
          </Link>
          <Link href="/allcontent/content" className="block px-4 py-2 hover:bg-gray-700">
            Contact
          </Link>
          <Link href="/allcontent/service" className="block px-4 py-2 hover:bg-gray-700">
            Service
          </Link>
          <Link href="/allcontent/community" className="block px-4 py-2 hover:bg-gray-700">
            Community
          </Link>
          <Link href="/allcontent/blog" className="block px-4 py-2 hover:bg-gray-700">
            Blog
          </Link>
          <Link href="/allcontent/products" className="block px-4 py-2 hover:bg-gray-700">
            Products
          </Link>
        </nav>
      </div>

      {/* Logo */}
      <div className="flex items-center">
        {/* <img
          src="/logo.png"
          alt="Logo"
          className="h-8 w-8 mr-2"
        /> */}
        <div className="flex gap-2">
            <Link href={"/catogery/baby"}>Baby</Link>
            <p>|</p>
            <Link href={"/catogery/kids"}>kids</Link>
        </div>
      </div>

      {/* Profile Dropdown */}
      <div className="relative">
        <button
          onClick={toggleProfileDropdown}
          className="text-white bg-gray-800 px-4 py-2 rounded hover:bg-gray-700 focus:outline-none"
        >
          Profile
        </button>
        {isProfileOpen && (
          <nav className="absolute right-0 mt-2 w-40 bg-gray-800 rounded shadow-lg">
            <a href="/login" className="block px-4 py-2 hover:bg-gray-700">
              Login
            </a>
            <a href="/signup" className="block px-4 py-2 hover:bg-gray-700">
              Signup
            </a>
          </nav>
        )}
      </div>
    </div>
  );
};

export default Navbar;
