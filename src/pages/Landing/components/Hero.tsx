import React from "react";
import {
  ChevronDown,
  Utensils,
  ShoppingBag,
  Phone,
  MapPin,
  Clock,
} from "lucide-react";
// Assuming you have defined and imported this responsive Navbar
import BakeryNavbar from "./Navbar";
import backgroundImage from "../Assets/bakery_background.png";

const BakeryHeroSection: React.FC = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      {/* Navbar */}
      <BakeryNavbar />

      {/* Background Image Container */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-black opacity-40"></div>
        {/* Subtle Gradient Overlay - CORRECTED CLASS */}
        <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-black/10"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4 md:px-8 pt-20">
        {/* Badge: Fresh Baked Daily Since 1965 (Responsive text size) */}
        <div className="hidden md:flex items-center space-x-2 bg-orange-600/95 text-white text-xs md:text-sm font-semibold py-2 px-6 rounded-full mb-8 shadow-xl">
          <Utensils className="w-4 h-4" />
          <span>Fresh Baked Daily Since 1965</span>
        </div>

        {/* Headline (Responsive text size) */}
        <h1
          className="text-2xl sm:text-6xl md:text-8xl font-bold text-center mb-4 leading-tight drop-shadow-lg"
          style={{ textShadow: "0 4px 8px rgba(0, 0, 0, 0.7)" }}
        >
          Welcome to <br />
          <span className="text-yellow-400">Sunshine Bakery</span>
        </h1>

        {/* Subtitle/Description (Responsive text size) */}
        <p className="text-sm md:text-lg text-center max-w-4xl mb-10 text-gray-200 drop-shadow-md">
          Where every bite tells a story of tradition, quality, and love.
          Experience the finest artisan breads, pastries, and custom cakes made
          fresh daily.
        </p>

        {/* Action Buttons (Responsive stacking: flex-col on mobile, sm:flex-row on tablet/desktop) */}
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
          {/* Order Now Button (Primary) */}
          <button className="flex items-center justify-center space-x-2 bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-10 rounded-full transition duration-300 shadow-2xl hover:scale-[1.03] min-w-[200px] cursor-pointer">
            <ShoppingBag className="w-5 h-5" />
            <span>Order Now →</span>
          </button>

          {/* Call Us Button (Secondary - Translucent) */}
          <button className="flex items-center justify-center space-x-2 bg-white/20 hover:bg-white/30 border border-white/50 text-white font-semibold py-4 px-10 rounded-full transition duration-300 shadow-xl hover:scale-[1.03] min-w-[200px] cursor-pointer backdrop-blur-sm">
            <Phone className="w-5 h-5" />
            <span>Call Us: (555) 123-CAKE</span>
          </button>
        </div>

        {/* Bottom Badges (Responsive stacking: flex-col on mobile, sm:flex-row on tablet/desktop) */}
        <div className="absolute bottom-8 md:flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-8 text-sm text-gray-200 hidden">
          <div className="flex items-center space-x-2 mt-6 md:mt-0">
            <Clock className="w-4 h-4 text-yellow-400" />
            <span>Open Daily 6AM - 8PM</span>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin className="w-4 h-4 text-yellow-400" />
            <span>Downtown Location</span>
          </div>
        </div>

        {/* Scroll Indicator (Chevron Down) */}
        <div className="absolute bottom-2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white" />
        </div>
      </div>
    </div>
  );
};

export default BakeryHeroSection;
