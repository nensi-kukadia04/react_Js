import { Facebook, Twitter, Linkedin, Dribbble } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 pt-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 pb-12">
          {/* Logo & About */}
          <div className="md:col-span-1 space-y-4">
            <div className="flex items-center gap-2">
              <span className="bg-blue-600 rounded-lg p-2 flex items-center">
                <svg
                  height="24"
                  width="24"
                  fill="white"
                  viewBox="0 0 24 24"
                >
                  <path d="M13 2v7h7M13 9l-7 7 4 4 7-7" />
                </svg>
              </span>
              <span className="text-2xl font-bold text-gray-900">Base</span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div className="flex space-x-4 mt-4 text-gray-400">
              <Facebook className="w-5 h-5 hover:text-blue-600 transition" />
              <Twitter className="w-5 h-5 hover:text-blue-400 transition" />
              <Linkedin className="w-5 h-5 hover:text-blue-700 transition" />
              <Dribbble className="w-5 h-5 hover:text-pink-500 transition" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gray-900 font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li><a href="#" className="hover:text-blue-600">Home</a></li>
              <li><a href="#" className="hover:text-blue-600">Product</a></li>
              <li><a href="#" className="hover:text-blue-600">Careers</a></li>
              <li><a href="#" className="hover:text-blue-600">Pricing</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-gray-900 font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li><a href="#" className="hover:text-blue-600">Web Development</a></li>
              <li><a href="#" className="hover:text-blue-600">Graphics Design</a></li>
              <li><a href="#" className="hover:text-blue-600">Digital Marketing</a></li>
              <li><a href="#" className="hover:text-blue-600">UI/UX Design</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-gray-900 font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li><a href="#" className="hover:text-blue-600">Company</a></li>
              <li><a href="#" className="hover:text-blue-600">Press Media</a></li>
              <li><a href="#" className="hover:text-blue-600">Our Blog</a></li>
              <li><a href="#" className="hover:text-blue-600">Contact Us</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-gray-900 font-semibold mb-4">Newsletter</h4>
            <p className="text-gray-600 text-sm mb-4">
              Subscribe to receive future updates
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Email address"
                className="w-full px-4 py-2 rounded-l-full border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <button className="px-4 py-2 bg-blue-600 text-white rounded-r-full hover:bg-blue-700 transition">
                →
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 py-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
          <div className="flex gap-4 mb-4 md:mb-0">
            <a href="#" className="hover:text-blue-600">English</a>
            <a href="#" className="hover:text-blue-600">Privacy Policy</a>
            <a href="#" className="hover:text-blue-600">Support</a>
          </div>
          <p>
            © {new Date().getFullYear()} Base. All rights reserved. Distributed by ThemeWagon
          </p>
        </div>
      </div>
    </footer>
  );
}
