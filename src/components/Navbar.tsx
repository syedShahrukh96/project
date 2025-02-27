import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Menu, X, Search } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Navbar: React.FC = () => {
  const { totalItems } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <nav className="bg-orange-600 text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold">URU-SWATI</Link>
          </div>
          
          <div className="hidden md:flex space-x-6 items-center">
            <Link to="/" className="hover:text-orange-200 transition-colors">Home</Link>
            <Link to="/menu" className="hover:text-orange-200 transition-colors">Menu</Link>
            <Link to="/about" className="hover:text-orange-200 transition-colors">About</Link>
            <Link to="/contact" className="hover:text-orange-200 transition-colors">Contact</Link>
            
            <button 
              onClick={toggleSearch}
              className="hover:text-orange-200 transition-colors"
            >
              <Search size={20} />
            </button>
            
            <Link to="/cart" className="relative">
              <ShoppingCart size={20} />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-white text-orange-600 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>
          
          <div className="md:hidden flex items-center">
            <Link to="/cart" className="mr-4 relative">
              <ShoppingCart size={20} />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-white text-orange-600 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                  {totalItems}
                </span>
              )}
            </Link>
            <button onClick={toggleMenu}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-3">
              <Link to="/" className="hover:text-orange-200 transition-colors" onClick={toggleMenu}>Home</Link>
              <Link to="/menu" className="hover:text-orange-200 transition-colors" onClick={toggleMenu}>Menu</Link>
              <Link to="/about" className="hover:text-orange-200 transition-colors" onClick={toggleMenu}>About</Link>
              <Link to="/contact" className="hover:text-orange-200 transition-colors" onClick={toggleMenu}>Contact</Link>
              <button 
                onClick={() => {
                  toggleSearch();
                  toggleMenu();
                }}
                className="text-left hover:text-orange-200 transition-colors"
              >
                Search
              </button>
            </div>
          </div>
        )}
        
        {/* Search Bar */}
        {isSearchOpen && (
          <div className="mt-4 pb-4">
            <form 
              onSubmit={(e) => {
                e.preventDefault();
                // Handle search
                toggleSearch();
              }}
              className="flex"
            >
              <input
                type="text"
                placeholder="Search menu..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-grow p-2 rounded-l text-gray-800 focus:outline-none"
              />
              <button 
                type="submit"
                className="bg-orange-700 px-4 rounded-r hover:bg-orange-800 transition-colors"
              >
                <Search size={20} />
              </button>
            </form>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;