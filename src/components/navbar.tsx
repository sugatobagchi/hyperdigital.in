"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react"

export default function NavbarComponent() {
  const [isOpen, setIsOpen] = useState(false);
  

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/30 border-b border-blue-200">
      <div className="flex justify-between items-center py-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-2xl font-bold text-blue-800">
          HyperDigital
        </Link>
        {/* Menu Icon for Mobile */}
        <Menu
          className="lg:hidden text-blue-600 hover:text-purple-600 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </Menu>
        {/* Navigation Links for Desktop */}
        <ul className={`hidden lg:flex space-x-6`}>
          <li>
            <Link
              href="#about"
              className="text-blue-600 hover:text-purple-600 w-full h-full"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="#services"
              className="text-blue-600 hover:text-purple-600"
            >
              Services
            </Link>
          </li>
          <li>
            <Link href="#team" className="text-blue-600 hover:text-purple-600">
              Team
            </Link>
          </li>
          <li>
            <Link
              href="#contact"
              className="text-blue-600 hover:text-purple-600"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
      {/* Mobile Menu */}
      <div
        className={`lg:hidden ${
          isOpen ? "block" : "hidden"
        } bg-white border-t border-blue-200`}
      >
        <div className="flex flex-col space-y-4 py-4 px-6">
          <Link
            href="#about"
            className="text-blue-600 hover:text-purple-600 w-full h-full items-center justify-center flex flex-col"
          >
            About
          </Link>
          <Link
            href="#services"
            className="text-blue-600 hover:text-purple-600 h-full items-center justify-center flex flex-col"
          >
            Services
          </Link>
          <Link
            href="#team"
            className="text-blue-600 hover:text-purple-600 h-full items-center justify-center flex flex-col"
          >
            Team
          </Link>
          <Link
            href="#contact"
            className="text-blue-600 hover:text-purple-600 h-full items-center justify-center flex flex-col"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}