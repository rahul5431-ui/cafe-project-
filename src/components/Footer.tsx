import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer id="contact" className="bg-white border-t border-coffee-100 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="font-serif text-3xl font-bold text-coffee-900 mb-6">Spice Route Café</h3>
            <p className="text-coffee-800/70 mb-6">
              Your neighborhood spot for great food, freshly brewed coffee, and wonderful memories since 2024.
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com/spiceroutecafe_demo" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-coffee-50 flex items-center justify-center text-coffee-600 hover:bg-coffee-600 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-coffee-50 flex items-center justify-center text-coffee-600 hover:bg-coffee-600 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-coffee-50 flex items-center justify-center text-coffee-600 hover:bg-coffee-600 hover:text-white transition-colors">
                <Youtube size={20} />
              </a>
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-coffee-50 flex items-center justify-center text-coffee-600 hover:bg-coffee-600 hover:text-white transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                  <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
                </svg>
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold text-coffee-900 mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-coffee-800/80">
                <MapPin size={20} className="text-coffee-600 shrink-0 mt-1" />
                <span>24 MG Road, Civil Lines,<br/>Lucknow, UP – 226001, India</span>
              </li>
              <li className="flex items-center gap-3 text-coffee-800/80">
                <Phone size={20} className="text-coffee-600 shrink-0" />
                <a href="tel:+919876543210" className="hover:text-coffee-600">+91 98765 43210</a>
              </li>
              <li className="flex items-center gap-3 text-coffee-800/80">
                <Mail size={20} className="text-coffee-600 shrink-0" />
                <a href="mailto:info@spiceroutecafe.demo" className="hover:text-coffee-600">info@spiceroutecafe.demo</a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-lg font-bold text-coffee-900 mb-6">Opening Hours</h4>
            <ul className="space-y-4 text-coffee-800/80">
              <li className="flex justify-between items-center border-b border-coffee-100 pb-2">
                <span>Mon – Thu</span>
                <span className="font-medium text-coffee-900">8:00 AM – 10:00 PM</span>
              </li>
              <li className="flex justify-between items-center border-b border-coffee-100 pb-2">
                <span>Fri – Sat</span>
                <span className="font-medium text-coffee-900">8:00 AM – 11:00 PM</span>
              </li>
              <li className="flex justify-between items-center border-b border-coffee-100 pb-2">
                <span>Sunday</span>
                <span className="font-medium text-coffee-900">9:00 AM – 9:00 PM</span>
              </li>
            </ul>
            <div className="mt-6 flex items-center gap-2 text-coffee-600 text-sm font-medium">
              <Clock size={16} />
              <span>Dine-in, Takeaway & Home Delivery</span>
            </div>
          </div>

          {/* Booking CTA */}
          <div>
            <h4 className="text-lg font-bold text-coffee-900 mb-6">Book a Table</h4>
            <p className="text-coffee-800/70 mb-4">
              Planning a visit? Give us a call or book online to reserve your spot.
            </p>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="text" 
                placeholder="Name" 
                className="w-full px-4 py-2 bg-coffee-50 border border-coffee-100 rounded-lg focus:outline-none focus:border-coffee-500 focus:ring-1 focus:ring-coffee-500 transition-all"
              />
              <input 
                type="text" 
                placeholder="Phone / Email" 
                className="w-full px-4 py-2 bg-coffee-50 border border-coffee-100 rounded-lg focus:outline-none focus:border-coffee-500 focus:ring-1 focus:ring-coffee-500 transition-all"
              />
              <button 
                type="submit"
                className="w-full bg-coffee-900 text-white font-medium py-2 rounded-lg hover:bg-coffee-800 transition-colors"
              >
                Request Booking
              </button>
            </form>
          </div>

        </div>

        <div className="text-center pt-8 border-t border-coffee-100 text-sm text-coffee-800/60 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} Spice Route Café. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-coffee-900">Privacy Policy</a>
            <a href="#" className="hover:text-coffee-900">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
