import React, { useState } from "react";
import { Utensils, Menu, X } from "lucide-react";

const navItems = [
  { name: "Menu", href: "#menu" },
  { name: "Our Story", href: "#about" },
  { name: "Order", href: "#order" },
  { name: "Contact", href: "#contact" },
];

const BakeryNavbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 w-full z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo/Brand Name */}
          <div className="flex items-center">
            {/* Using Utensils icon next to the name for a bakery theme */}
            <Utensils className="w-6 h-6 text-yellow-400 mr-2" />
            <a
              href="#"
              className="text-3xl font-serif font-bold text-white tracking-wide drop-shadow-md"
            >
              Sunshine
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white hover:text-yellow-400 text-lg font-medium transition duration-300"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-white focus:outline-none"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (Conditionally rendered) */}
      {isOpen && (
        // Using a background that matches the theme, slightly opaque
        <div className="md:hidden bg-orange-800 bg-opacity-90 shadow-lg">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 text-white text-base font-semibold hover:bg-orange-700 transition duration-300"
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default BakeryNavbar;
