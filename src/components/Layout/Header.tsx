"use client";

import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Heart, Sparkles } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Gallery", href: "/gallery" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white/95 backdrop-blur-md shadow-xl sticky top-0 z-50 border-b border-purple-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Enhanced Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
              <Heart className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-heading font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Shelter Of Smiles
              </h1>
              <p className="text-sm text-gray-600 font-body flex items-center">
                <Sparkles className="h-3 w-3 mr-1 text-orange-400" />
                Every smile tells a story
              </p>
            </div>
          </Link>

          {/* Enhanced Desktop Navigation */}
          <nav className="hidden md:flex space-x-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                  isActive(item.href)
                    ? "text-white bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg"
                    : "text-gray-700 hover:text-purple-600 hover:bg-purple-50"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Enhanced Donate Button */}
          <div className="hidden md:flex">
            <Link
              to="/donate"
              className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center space-x-2"
            >
              <Heart className="h-4 w-4" />
              <span>Donate Now</span>
            </Link>
          </div>

          {/* Enhanced Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative p-2 text-gray-700 hover:text-purple-600 transition-all duration-300 hover:bg-purple-50 rounded-full"
            >
              <div className="relative w-6 h-6">
                <Menu
                  className={`absolute inset-0 h-6 w-6 transition-all duration-300 ${
                    isMenuOpen ? "opacity-0 rotate-180" : "opacity-100 rotate-0"
                  }`}
                />
                <X
                  className={`absolute inset-0 h-6 w-6 transition-all duration-300 ${
                    isMenuOpen
                      ? "opacity-100 rotate-0"
                      : "opacity-0 -rotate-180"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Enhanced Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? "max-h-96 opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="px-4 pt-4 pb-6 space-y-3 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 rounded-2xl mx-4 mb-4 shadow-xl border border-purple-100">
            {/* Mobile Navigation Header */}
            <div className="text-center pb-4 border-b border-purple-200">
              <h3 className="text-lg font-heading font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Navigation
              </h3>
            </div>

            {/* Mobile Navigation Links */}
            <div className="space-y-2">
              {navigation.map((item, index) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 transform hover:scale-105 ${
                    isActive(item.href)
                      ? "text-white bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg"
                      : "text-gray-700 hover:text-purple-600 hover:bg-white/70 hover:shadow-md"
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="flex items-center justify-between">
                    <span>{item.name}</span>
                    {isActive(item.href) && (
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    )}
                  </div>
                </Link>
              ))}
            </div>

            {/* Mobile Donate Button */}
            <div className="pt-4 border-t border-purple-200">
              <Link
                to="/donate"
                className="flex items-center justify-center space-x-2 w-full bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white px-6 py-4 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                onClick={() => setIsMenuOpen(false)}
              >
                <Heart className="h-5 w-5" />
                <span>Donate Now</span>
                <Sparkles className="h-4 w-4" />
              </Link>
            </div>

            {/* Mobile Menu Footer */}
            <div className="text-center pt-4 border-t border-purple-200">
              <p className="text-sm text-gray-600 flex items-center justify-center">
                <Sparkles className="h-3 w-3 mr-1 text-orange-400" />
                Making a difference together
                <Sparkles className="h-3 w-3 ml-1 text-orange-400" />
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[-1] md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </header>
  );
};

export default Header;
