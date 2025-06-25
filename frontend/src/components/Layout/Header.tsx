﻿import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Search,
  ShoppingCart,
  Heart,
  User,
  Menu,
  X,
  LogOut,
  LogIn,
  Store,
  Leaf
} from 'lucide-react';

import Button from '../ui/Button';
import { useAuthStore } from '../../store/useAuthStore';
import { useCartStore } from '../../store/useCartStore';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const location = useLocation();

  const { user, isAuthenticated, logout } = useAuthStore();
  const { getItemsCount, toggleCart } = useCartStore();

  const cartItemsCount = getItemsCount();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const toggleUserMenu = () => setIsUserMenuOpen(!isUserMenuOpen);

  const headerClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white shadow-md border-b border-gray-100 ${
    isScrolled ? 'py-2' : 'py-4'
  }`;

  return (
    <header className={headerClasses}>
      <div className="container mx-auto px-6 md:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <Leaf className="h-8 w-8 text-green-600" />
            <span className="ml-2 text-xl font-bold text-gray-800">ESTmarket</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-6">
            <Link to="/" className="text-gray-700 hover:text-primary-600 transition-colors">Home</Link>
            <Link to="/products" className="text-gray-700 hover:text-primary-600 transition-colors">Products</Link>
            <Link to="/categories" className="text-gray-700 hover:text-primary-600 transition-colors">Categories</Link>
            <Link to="/sellers" className="text-gray-700 hover:text-primary-600 transition-colors">Sellers</Link>
            <Link to="/about" className="text-gray-700 hover:text-primary-600 transition-colors">About</Link>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center space-x-4">
            <Link to="/search" className="text-gray-700 hover:text-primary-600 transition-colors">
              <Search className="h-5 w-5" />
            </Link>
            <Link to="/favorites" className="text-gray-700 hover:text-primary-600 transition-colors">
              <Heart className="h-5 w-5" />
            </Link>
            <button
              className="relative text-gray-700 hover:text-primary-600 transition-colors"
              onClick={toggleCart}
            >
              <ShoppingCart className="h-5 w-5" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </button>

            {/* User Menu */}
            <div className="relative">
              {isAuthenticated ? (
                <button onClick={toggleUserMenu} className="flex items-center space-x-2">
                  <div className="h-8 w-8 rounded-full overflow-hidden border border-gray-200">
                    {user?.avatar ? (
                      <img src={user.avatar} alt={user.name} className="h-full w-full object-cover" />
                    ) : (
                      <div className="h-full w-full bg-gray-200 flex items-center justify-center">
                        <User className="h-4 w-4 text-gray-500" />
                      </div>
                    )}
                  </div>
                </button>
              ) : (
                <div className="hidden md:block">
                  <Link to="/login">
                    <Button size="sm">Sign In</Button>
                  </Link>
                </div>
              )}

              {isUserMenuOpen && isAuthenticated && (
                <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md py-1 z-50 border border-gray-100">
                  <div className="px-4 py-2 border-b border-gray-100">
                    <p className="text-sm font-semibold">{user?.name}</p>
                    <p className="text-xs text-gray-500">{user?.email}</p>
                  </div>
                  <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Profile</Link>
                  <Link to="/orders" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Orders</Link>
                  {user?.isSeller && (
                    <Link to="/seller/dashboard" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      <div className="flex items-center">
                        <Store className="h-4 w-4 mr-2" />
                        Seller Dashboard
                      </div>
                    </Link>
                  )}
                  <button
                    onClick={logout}
                    className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                  >
                    <div className="flex items-center">
                      <LogOut className="h-4 w-4 mr-2" />
                      Sign Out
                    </div>
                  </button>
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-gray-700" onClick={toggleMobileMenu}>
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 mt-2 bg-white rounded-lg shadow-lg px-4">
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-700 hover:text-primary-600 transition-colors">Home</Link>
              <Link to="/products" className="text-gray-700 hover:text-primary-600 transition-colors">Products</Link>
              <Link to="/categories" className="text-gray-700 hover:text-primary-600 transition-colors">Categories</Link>
              <Link to="/sellers" className="text-gray-700 hover:text-primary-600 transition-colors">Sellers</Link>
              <Link to="/about" className="text-gray-700 hover:text-primary-600 transition-colors">About</Link>
              {!isAuthenticated && (
                <div className="pt-2 border-t border-gray-100">
                  <Link to="/login">
                    <Button fullWidth>
                      <div className="flex items-center">
                        <LogIn className="h-4 w-4 mr-2" />
                        Sign In
                      </div>
                    </Button>
                  </Link>
                </div>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
