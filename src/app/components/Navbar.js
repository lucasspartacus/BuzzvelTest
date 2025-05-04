"use client";

import React, { useState } from 'react';
import { Logo } from './images/logo';
import { IoChevronDown, IoMenu, IoClose } from "react-icons/io5";

const navLinks = ['Products', 'Solutions', 'Pricing', 'Resources'];

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(prev => !prev);
  const toggleMobileMenu = () => setMobileMenuOpen(prev => !prev);

  return (
    <header className="top-0 left-0 right-0 bg-white shadow-md z-50">
      <nav className="max-w-full md:px-[80px] flex justify-between items-center py-4">
        {/* Left side: Logo + Nav Links */}
        <div className="flex items-center gap-8 w-full md:w-auto">
        <div className='md:mr-[2px] ml-2'>
            <Logo.original />
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-12 ml-4">
            {navLinks.map((link) =>
              link === 'Resources' ? (
                <div key={link} className="relative">
                  <button
                    onClick={toggleDropdown}
                    className="text-slate-900 text-base font-roboto hover:underline flex items-center gap-1"
                  >
                    {link}
                    <IoChevronDown
                      className={`transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {dropdownOpen && (
                    <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg rounded-md z-50">
                      <a href="#helpcenter" className="block text-black px-4 py-2 hover:bg-gray-100">Help Center</a>
                      <a href="#blog" className="block text-black px-4 py-2 hover:bg-gray-100">Blog</a>
                      <a href="#tutorials" className="block text-black px-4 py-2 hover:bg-gray-100">Tutorials</a>
                      <a href="#faqs" className="block text-black px-4 py-2 hover:bg-gray-100">FAQs</a>
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-slate-900 text-base font-roboto hover:underline"
                >
                  {link}
                </a>
              )
            )}
          </div>
        </div>

        {/* Right Side Buttons - Desktop */}
        <div className="hidden md:flex items-center gap-4">
          <button className="text-slate-900 text-base font-roboto hover:underline">
            Log in
          </button>
          <button className="bg-white text-slate-900 text-base font-medium font-roboto rounded-lg px-4 py-2 border-2 hover:bg-slate-900 hover:text-white transition">
            Sign up now
          </button>
        </div>

        {/* Hamburger Icon - Mobile */}
        <div className="md:hidden mr-2">
          <button
            className="text-2xl text-black"
            onClick={toggleMobileMenu}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <IoClose /> : <IoMenu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden pb-4 bg-white shadow-md rounded-b-lg space-y-4 ml-1 pl-4">
          {navLinks.map((link) =>
            link === 'Resources' ? (
              <div key={link}>
                <button
                  onClick={toggleDropdown}
                  className="w-full text-left text-slate-900 text-base font-roboto flex justify-between items-center"
                >
                  {link}
                  <IoChevronDown
                    className={`transition-transform duration-200 mr-4 ${dropdownOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                {dropdownOpen && (
                  <div className="pl-4 mt-2 space-y-2">
                    <a href="#helpcenter" className="block text-sm text-black hover:underline">Help Center</a>
                    <a href="#blog" className="block text-sm text-black hover:underline">Blog</a>
                    <a href="#tutorials" className="block text-sm text-black hover:underline">Tutorials</a>
                    <a href="#faqs" className="block text-sm text-black hover:underline">FAQs</a>
                  </div>
                )}
              </div>
            ) : (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="block text-slate-900 text-base font-roboto hover:underline"
              >
                {link}
              </a>
            )
          )}
          <div className="border-t pt-4 space-y-2">
            <button className="block w-full text-left text-slate-900 text-base font-roboto hover:underline">
              Log in
            </button>
            <button className="block  text-left bg-white text-slate-900 text-base font-medium font-roboto rounded-lg px-4 py-2 border-2 hover:bg-slate-900 hover:text-white transition w-[90%]">
              Sign up now
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
