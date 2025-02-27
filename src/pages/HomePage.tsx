import React from 'react';
import { Link } from 'react-router-dom';
import { UtensilsCrossed, Clock, Users, Award } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <div 
        className="relative bg-cover bg-center h-[500px]" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')" 
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">URU-SWATI</h1>
          <p className="text-xl text-white mb-8 max-w-2xl">
            Authentic Indian cuisine for your special events. Experience the rich flavors and traditions of India with our catering services.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link 
              to="/menu" 
              className="bg-orange-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-orange-700 transition-colors"
            >
              View Our Menu
            </Link>
            <Link 
              to="/contact" 
              className="bg-white text-orange-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose URU-SWATI?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="flex justify-center mb-4">
                <UtensilsCrossed size={40} className="text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Authentic Cuisine</h3>
              <p className="text-gray-600">Traditional recipes prepared with authentic spices and techniques.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="flex justify-center mb-4">
                <Clock size={40} className="text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Timely Service</h3>
              <p className="text-gray-600">We value your time and ensure prompt delivery for all catering orders.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="flex justify-center mb-4">
                <Users size={40} className="text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Events of All Sizes</h3>
              <p className="text-gray-600">From intimate gatherings to large corporate events, we cater to all.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="flex justify-center mb-4">
                <Award size={40} className="text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Ingredients</h3>
              <p className="text-gray-600">We use only the freshest ingredients to ensure exceptional taste.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Popular Categories */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Popular Categories</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative rounded-lg overflow-hidden h-64 group">
              <img 
                src="https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="South Indian" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-2">South Indian</h3>
                  <Link 
                    to="/menu" 
                    className="inline-block bg-orange-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-orange-700 transition-colors"
                  >
                    View Menu
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="relative rounded-lg overflow-hidden h-64 group">
              <img 
                src="https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Chaats & Snacks" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-2">Chaats & Snacks</h3>
                  <Link 
                    to="/menu" 
                    className="inline-block bg-orange-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-orange-700 transition-colors"
                  >
                    View Menu
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="relative rounded-lg overflow-hidden h-64 group">
              <img 
                src="https://images.unsplash.com/photo-1631452180519-c014fe946bc7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Swati Specials" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-2">Swati Specials</h3>
                  <Link 
                    to="/menu" 
                    className="inline-block bg-orange-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-orange-700 transition-colors"
                  >
                    View Menu
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-orange-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Place Your Catering Order?</h2>
          <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
            Let us make your event special with our authentic Indian cuisine. Browse our menu and place your order today.
          </p>
          <Link 
            to="/menu" 
            className="bg-white text-orange-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors inline-block"
          >
            Order Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;