import { useState } from "react";

export default function Navbar() {

     const [isMoreOpen, setIsMoreOpen] = useState(false);

    return (
        <div className="w-full">
            {/* Top Banner */}
            <div className="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-700 text-white text-center py-2 text-sm font-medium">
                🎉 Big Billion Days Sale - Up to 80% OFF | Free Delivery | No Cost EMI
            </div>

            {/* Main Navbar */}
            <nav className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 shadow-xl relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/20 to-transparent"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    {/* Top Row */}
                    <div className="flex items-center justify-between h-16">
                        {/* Logo Section */}
                        <div className="flex items-center space-x-8">
                            <div className="flex items-center group cursor-pointer">
                                <div className="relative">
                                    <div className="text-white font-bold text-2xl italic tracking-tight bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                                        GoCart
                                    </div>
                                    <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-yellow-400 to-orange-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                                </div>
                                <div className="ml-2 flex items-center bg-white/10 backdrop-blur-sm rounded-full px-2 py-1">
                                    <span className="text-yellow-300 text-xs font-semibold">Explore</span>
                                    <span className="text-yellow-300 text-xs italic ml-1 font-semibold">Plus</span>
                                    <div className="ml-1 bg-yellow-400 rounded-full p-0.5">
                                        <svg className="w-2.5 h-2.5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Search Bar */}
                        <div className="flex-1 max-w-2xl mx-8">
                            <div className="relative group">
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
                                <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
                                    <input
                                        type="text"
                                        placeholder="Search for products, brands and more"
                                        className="w-full h-12 px-4 pr-14 text-sm text-gray-700 bg-white border-0 focus:outline-none focus:ring-2 focus:ring-blue-300 placeholder-gray-500"
                                    />
                                    <button className="absolute right-0 top-0 h-12 px-4 bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-500 hover:to-orange-500 transition-all duration-200 flex items-center justify-center group">
                                        <svg className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Right Section */}
                        <div className="flex items-center space-x-4">
                            {/* Login Button */}
                            <button className="text-white hover:bg-white/20 p-2 rounded-full">
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                    />
                                </svg>
                            </button>

                            {/* More Dropdown */}
                            <div className="relative">
                                <button
                                    onClick={() => setIsMoreOpen(!isMoreOpen)}
                                    className="flex items-center text-white shadow-xl font-semibold hover:bg-white/10 px-4 py-2 rounded-lg transition-all duration-200"
                                >
                                    More
                                    <svg
                                        className={`w-4 h-4 ml-2 transform transition-transform ${isMoreOpen ? "rotate-180" : "rotate-0"
                                            }`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2.5"
                                            d="M19 9l-7 7-7-7"
                                        />
                                    </svg>
                                </button>

                                {isMoreOpen && (
                                    <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 z-50">
                                        <a
                                            href="/add-product"
                                            className="block px-4 py-2 text-gray-700 hover:bg-blue-50"
                                        >
                                            ➕ Add Product
                                        </a>
                                        <a
                                            href="/view-product"
                                            className="block px-4 py-2 text-gray-700 hover:bg-blue-50"
                                        >
                                            📦 View Product
                                        </a>
                                    </div>
                                )}
                            </div>

                            {/* Cart */}
                            <button className="group relative flex items-center text-white font-semibold hover:bg-white/10 px-4 py-2.5 rounded-lg transition-all duration-200 border border-transparent hover:border-white/20">
                                <div className="relative">
                                    <svg className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.293 2.293a1 1 0 00-.293.707V17h1M13 17a2 2 0 100 4 2 2 0 000-4zm-6 0a2 2 0 100 4 2 2 0 000-4z"></path>
                                    </svg>
                                    <span className="absolute -top-2 -right-1 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold shadow-lg">3</span>
                                </div>
                                Cart
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Enhanced Secondary Navigation */}
            <div className="bg-white shadow-lg border-b-2 border-gray-100 sticky top-0 z-40">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center justify-between px-4 py-2">
                        {/* Main Categories */}
                        <div className="flex items-center space-x-1 overflow-x-auto scrollbar-hide">
                            {/* Electronics */}
                            <div className="group relative">
                                <div className="flex items-center px-4 py-3 cursor-pointer rounded-lg hover:bg-blue-50 transition-all duration-200">
                                    <div className="w-8 h-8 mr-3 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center shadow-md">
                                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                        </svg>
                                    </div>
                                    <div>
                                        <span className="text-sm font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-200">Electronics</span>
                                        <div className="text-xs text-gray-500">Mobiles, Laptops & More</div>
                                    </div>
                                    <svg className="w-3 h-3 ml-2 text-gray-400 group-hover:text-blue-500 transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                    </svg>
                                </div>
                            </div>

                            {/* TVs & Appliances */}
                            <div className="group relative">
                                <div className="flex items-center px-4 py-3 cursor-pointer rounded-lg hover:bg-green-50 transition-all duration-200">
                                    <div className="w-8 h-8 mr-3 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center shadow-md">
                                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2M7 4h10M7 4l-2 14h14l-2-14"></path>
                                        </svg>
                                    </div>
                                    <div>
                                        <span className="text-sm font-semibold text-gray-800 group-hover:text-green-600 transition-colors duration-200">TVs & Appliances</span>
                                        <div className="text-xs text-gray-500">TV, AC, Refrigerator</div>
                                    </div>
                                    <svg className="w-3 h-3 ml-2 text-gray-400 group-hover:text-green-500 transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                    </svg>
                                </div>
                            </div>

                            {/* Fashion */}
                            <div className="group relative">
                                <div className="flex items-center px-4 py-3 cursor-pointer rounded-lg hover:bg-purple-50 transition-all duration-200">
                                    <div className="w-8 h-8 mr-3 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center shadow-md">
                                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                                        </svg>
                                    </div>
                                    <div>
                                        <span className="text-sm font-semibold text-gray-800 group-hover:text-purple-600 transition-colors duration-200">Fashion</span>
                                        <div className="text-xs text-gray-500">Men, Women & Kids</div>
                                    </div>
                                    <svg className="w-3 h-3 ml-2 text-gray-400 group-hover:text-purple-500 transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                    </svg>
                                </div>
                            </div>

                            {/* Home & Furniture */}
                            <div className="group relative">
                                <div className="flex items-center px-4 py-3 cursor-pointer rounded-lg hover:bg-orange-50 transition-all duration-200">
                                    <div className="w-8 h-8 mr-3 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center shadow-md">
                                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                                        </svg>
                                    </div>
                                    <div>
                                        <span className="text-sm font-semibold text-gray-800 group-hover:text-orange-600 transition-colors duration-200">Home & Furniture</span>
                                        <div className="text-xs text-gray-500">Furniture, Decor & More</div>
                                    </div>
                                    <svg className="w-3 h-3 ml-2 text-gray-400 group-hover:text-orange-500 transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                    </svg>
                                </div>
                            </div>

                            {/* Books & Sports */}
                            <div className="group relative">
                                <div className="flex items-center px-4 py-3 cursor-pointer rounded-lg hover:bg-pink-50 transition-all duration-200">
                                    <div className="w-8 h-8 mr-3 bg-gradient-to-br from-pink-500 to-pink-600 rounded-lg flex items-center justify-center shadow-md">
                                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                                        </svg>
                                    </div>
                                    <div>
                                        <span className="text-sm font-semibold text-gray-800 group-hover:text-pink-600 transition-colors duration-200">Books & Sports</span>
                                        <div className="text-xs text-gray-500">Books, Games & Sports</div>
                                    </div>
                                    <svg className="w-3 h-3 ml-2 text-gray-400 group-hover:text-pink-500 transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Special Sections */}
                        <div className="flex items-center space-x-4 ml-6">
                            {/* Grocery */}
                            <div className="group flex items-center px-3 py-2 cursor-pointer rounded-lg hover:bg-yellow-50 transition-all duration-200 border border-yellow-200 hover:border-yellow-300">
                                <div className="w-6 h-6 mr-2 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center">
                                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l-1 12H6L5 9z"></path>
                                    </svg>
                                </div>
                                <span className="text-sm font-semibold text-gray-800 group-hover:text-yellow-700">Grocery</span>
                            </div>

                            {/* Offers */}
                            <div className="group flex items-center px-3 py-2 cursor-pointer rounded-lg bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 transition-all duration-200 text-white shadow-md">
                                <div className="w-5 h-5 mr-2">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                </div>
                                <span className="text-sm font-bold">Offers</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div >
    );
}