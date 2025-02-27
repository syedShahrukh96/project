import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white pt-10 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">URU-SWATI</h3>
            <p className="mb-4">Authentic Indian cuisine for catering and events. Bringing the flavors of India to your special occasions.</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-orange-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-orange-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-orange-400 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Phone size={16} className="mr-2" />
                <span>(123) 456-7890</span>
              </li>
              <li className="flex items-center">
                <Mail size={16} className="mr-2" />
                <span>info@uruswati.com</span>
              </li>
              <li className="flex items-center">
                <MapPin size={16} className="mr-2" />
                <span>123 Spice Street, Flavor City, FC 12345</span>
              </li>
              <li className="flex items-center">
                <Clock size={16} className="mr-2" />
                <span>Mon-Sun: 11:00 AM - 10:00 PM</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-orange-400 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/menu" className="hover:text-orange-400 transition-colors">Menu</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-orange-400 transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-orange-400 transition-colors">Contact</Link>
              </li>
              <li>
                <Link to="/catering" className="hover:text-orange-400 transition-colors">Catering Services</Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} URU-SWATI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;