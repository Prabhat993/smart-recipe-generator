// components/Header.jsx
import React from 'react';

export default function Header() {
  return (
    <header className="bg-orange-500 text-white shadow-md">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">
          🍴 Smart Recipe Generator
        </div>
        <div className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-orange-200">Home</a>
          <a href="#" className="hover:text-orange-200">My Recipes</a>
          <a href="#" className="hover:text-orange-200">About</a>
          <a href="#" className="hover:text-orange-200">Contact</a>
        </div>
      </nav>
    </header>
  );
}