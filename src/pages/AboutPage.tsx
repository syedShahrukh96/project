import React from 'react';
import { Award, Users, Clock, MapPin } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">About URU-SWATI</h1>
        
        <div className="mb-12">
          <img 
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
            alt="Restaurant Interior" 
            className="w-full h-96 object-cover rounded-lg shadow-md mb-6"
          />
          
          <p className="text-lg mb-4">
            URU-SWATI is a premier Indian catering service dedicated to bringing authentic flavors of India to your special events. Established in 2010, we have been serving the community with passion and dedication for over a decade.
          </p>
          
          <p className="text-lg mb-4">
            Our culinary team is led by Chef Rajesh Sharma, who brings over 25 years of experience in traditional Indian cooking. Each dish is prepared with authentic spices and techniques, ensuring a genuine taste of India.
          </p>
          
          <p className="text-lg">
            At URU-SWATI, we believe that food is an integral part of any celebration. Our mission is to enhance your special occasions with delicious food that leaves a lasting impression on your guests.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Award className="text-orange-600 mr-3 mt-1 flex-shrink-0" size={20} />
                <div>
                  <h3 className="font-medium">Quality</h3>
                  <p className="text-gray-600">We use only the freshest ingredients and authentic spices to ensure exceptional taste in every dish.</p>
                </div>
              </li>
              <li className="flex items-start">
                <Users className="text-orange-600 mr-3 mt-1 flex-shrink-0" size={20} />
                <div>
                  <h3 className="font-medium">Customer Satisfaction</h3>
                  <p className="text-gray-600">Your satisfaction is our priority. We work closely with you to customize menus according to your preferences.</p>
                </div>
              </li>
              <li className="flex items-start">
                <Clock className="text-orange-600 mr-3 mt-1 flex-shrink-0" size={20} />
                <div>
                  <h3 className="font-medium">Reliability</h3>
                  <p className="text-gray-600">We value your time and ensure prompt delivery and setup for all catering orders.</p>
                </div>
              </li>
            </ul>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Services</h2>
            <ul className="space-y-4">
              <li className="bg-orange-50 p-4 rounded-lg">
                <h3 className="font-medium">Corporate Events</h3>
                <p className="text-gray-600">From business meetings to large corporate functions, we cater to all your professional needs.</p>
              </li>
              <li className="bg-orange-50 p-4 rounded-lg">
                <h3 className="font-medium">Weddings & Celebrations</h3>
                <p className="text-gray-600">Make your special day memorable with our exquisite catering services.</p>
              </li>
              <li className="bg-orange-50 p-4 rounded-lg">
                <h3 className="font-medium">Private Parties</h3>
                <p className="text-gray-600">Intimate gatherings or large parties, we have menu options for all occasions.</p>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-12">
          <h2 className="text-2xl font-semibold mb-4">Visit Our Restaurant</h2>
          <div className="flex items-start mb-4">
            <MapPin className="text-orange-600 mr-3 mt-1 flex-shrink-0" size={20} />
            <div>
              <h3 className="font-medium">Location</h3>
              <p className="text-gray-600">123 Spice Street, Flavor City, FC 12345</p>
            </div>
          </div>
          <div className="flex items-start mb-4">
            <Clock className="text-orange-600 mr-3 mt-1 flex-shrink-0" size={20} />
            <div>
              <h3 className="font-medium">Hours</h3>
              <p className="text-gray-600">Monday - Sunday: 11:00 AM - 10:00 PM</p>
            </div>
          </div>
          <div className="aspect-w-16 aspect-h-9">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215266754809!2d-73.98776568459377!3d40.74844797932847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1629321299619!5m2!1sen!2sus" 
              width="100%" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy"
              title="Restaurant Location"
              className="rounded-lg"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;