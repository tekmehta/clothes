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
    <div className="fixed top-0 left-0 w-full bg-blue-600 text-white z-50 flex items-center justify-between px-4 py-2 shadow-md">
      {/* ☰ Button */}
      <button
        onClick={toggleSidebar}
        className="text-white bg-blue-400 px-4 py-2 rounded hover:bg-gray-300 focus:outline-none hover:text-red-500"
      >
        ☰
      </button>

      {/* Left Sidebar For Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-44 bg-blue-400 shadow-lg transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <button
          onClick={toggleSidebar}
          className="text-white px-4 py-2 mt-4 hover:bg-gray-200 focus:outline-none hover:text-stone-900 "
        >
          Close
        </button>
        <nav className="mt-4">
          <Link href="/" className="block px-4 py-2 hover:bg-gray-200 hover:underline hover:text-red-500">
            Home
          </Link>
          <Link href="/allcontent/about" className="block px-4 py-2 hover:bg-gray-200 hover:underline hover:text-red-500">
            About
          </Link>
          <Link href="/allcontent/content" className="block px-4 py-2 hover:bg-gray-200 hover:underline hover:text-red-500">
            Contact
          </Link>
          <Link href="/allcontent/service" className="block px-4 py-2 hover:bg-gray-200 hover:underline hover:text-red-500">
            Service
          </Link>
          <Link href="/allcontent/community" className="block px-4 py-2 hover:bg-gray-200 hover:underline hover:text-red-500">
            Community
          </Link>
          <Link href="/allcontent/blog" className="block px-4 py-2 hover:bg-gray-200 hover:underline hover:text-red-500">
            Blog
          </Link>
          <Link href="/allcontent/products" className="block px-4 py-2 hover:bg-gray-200 hover:underline hover:text-red-500">
            Products
          </Link>
        </nav>
      </div>

      {/* Catagory Of Items */}
      <div className="flex items-center">
        <div className="flex gap-2">
            <Link className="hover:underline hover:text-red-500 hover:bg-gray-300 hover:p-1 hover:rounded-[9px]" href={"/catogery/baby"}>Baby</Link>
            <p>|</p>
            <Link className="hover:underline hover:text-red-500 hover:bg-gray-300 hover:p-1 hover:rounded-[9px]" href={"/catogery/kids"}>kids</Link>
            <p>|</p>
            <Link className="hover:underline hover:text-red-500 hover:bg-gray-300 hover:p-1 hover:rounded-[9px]" href={"/catogery/kids"}>Gifts</Link>
            <p>|</p>
            <Link className="hover:underline hover:text-red-500 hover:bg-gray-300 hover:p-1 hover:rounded-[9px]" href={"/catogery/kids"}>Jacket</Link>
        </div>
      </div>

      {/* Profile Dropdown On Right Side */}
      <div className="flex gap-2">
        <button
          onClick={toggleProfileDropdown}
          className="text-white bg-blue-400 px-2 py-1 rounded-[45%] pt-1 pb-1 hover:bg-gray-300  focus:outline-none hover:underline hover:text-red-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fill-rule="evenodd"
              d="M12 2a6 6 0 100 12 6 6 0 000-12zm-4 6a4 4 0 118 0 4 4 0 01-8 0zm4 13c-4.418 0-8-1.79-8-4a1 1 0 112 0c0 .828 2.687 2 6 2s6-1.172 6-2a1 1 0 112 0c0 2.21-3.582 4-8 4z"
              clip-rule="evenodd"
            />
          </svg>

        </button>
        <Link className="text-white bg-blue-400 px-2 py-1 rounded-[45%] mb-2 hover:bg-gray-300 focus:outline-none hover:underline hover:text-red-500" href={"component/cart"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path d="M3 3h2l3.6 7.59L5.25 14a2 2 0 0 0-.25 1.25V15h13v-1h-9l1.1-2h7.45c.75 0 1.42-.41 1.75-1.03l3.24-6.48-1.75-1-.54 1.08H7.42L6.2 3H3zm1 15a2 2 0 1 0 4 0 2 2 0 0 0-4 0zm10 0a2 2 0 1 0 4 0 2 2 0 0 0-4 0z" />
          </svg>
        </Link>
        {isProfileOpen && (
          <nav className="absolute right-0 mt-8 w-40 bg-blue-600 rounded shadow-lg">
            <a href="/profile" className="block px-4 py-2 hover:bg-gray-300 hover:underline hover:text-red-500">Profile</a>
            <a href="/login" className="block px-4 py-2 hover:bg-gray-300 hover:underline hover:text-red-500">Login</a>
            <a href="/signup" className="block px-4 py-2 hover:bg-gray-300 hover:underline hover:text-red-500">Signup</a>
          </nav>
        )}
      </div>
    </div>
  );
};

export default Navbar;
