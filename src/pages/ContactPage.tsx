import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to your backend
    console.log({ name, email, phone, message });
    setSubmitted(true);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6 text-center">Contact Us</h1>
      
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">Get In Touch</h2>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <Phone className="text-orange-600 mr-3 mt-1 flex-shrink-0" size={20} />
                <div>
                  <h3 className="font-medium">Phone</h3>
                  <p className="text-gray-600">(123) 456-7890</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="text-orange-600 mr-3 mt-1 flex-shrink-0" size={20} />
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-gray-600">info@uruswati.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="text-orange-600 mr-3 mt-1 flex-shrink-0" size={20} />
                <div>
                  <h3 className="font-medium">Address</h3>
                  <p className="text-gray-600">123 Spice Street, Flavor City, FC 12345</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Clock className="text-orange-600 mr-3 mt-1 flex-shrink-0" size={20} />
                <div>
                  <h3 className="font-medium">Business Hours</h3>
                  <p className="text-gray-600">Monday - Sunday: 11:00 AM - 10:00 PM</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Catering Inquiries</h2>
            <p className="mb-4">
              For catering inquiries, please contact our catering manager directly at:
            </p>
            <div className="space-y-2">
              <div className="flex items-center">
                <Phone className="text-orange-600 mr-2 flex-shrink-0" size={16} />
                <span>(123) 456-7891</span>
              </div>
              <div className="flex items-center">
                <Mail className="text-orange-600 mr-2 flex-shrink-0" size={16} />
                <span>catering@uruswati.com</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Send Us a Message</h2>
          
          {submitted ? (
            <div className="text-center py-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <Send size={24} className="text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
              <p className="text-gray-600">
                Thank you for reaching out. We'll get back to you as soon as possible.
              </p>
              <button
                onClick={() => {
                  setName('');
                  setEmail('');
                  setPhone('');
                  setMessage('');
                  setSubmitted(false);
                }}
                className="mt-6 bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700 transition-colors"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-orange-600 text-white py-3 rounded-lg font-medium hover:bg-orange-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactPage;