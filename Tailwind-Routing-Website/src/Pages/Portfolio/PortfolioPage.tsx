import { ArrowRight } from 'lucide-react';
import { useState } from 'react';

function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Branding Strategy', 'Digital Experiences', 'Ecommerce'];

  const portfolioItems = [
    {
      id: 1,
      title: 'Photo Retouching',
      category: 'Branded Ecommerce',
      image: 'https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=800',
      type: 'Branding Strategy',
    },
    {
      id: 2,
      title: 'Mobile App Design',
      category: 'Digital Experience',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      type: 'Digital Experiences',
    },
    {
      id: 3,
      title: 'E-commerce Platform',
      category: 'Online Store',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
      type: 'Ecommerce',
    },
    {
      id: 4,
      title: 'Brand Identity',
      category: 'Visual Design',
      image: 'https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=800',
      type: 'Branding Strategy',
    },
  ];

  const filteredItems =
    activeFilter === 'All'
      ? portfolioItems
      : portfolioItems.filter((item) => item.type === activeFilter);

  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-400 opacity-60 transform rotate-45 animate-spin"></div>
      <div className="absolute bottom-20 right-20 w-6 h-24 bg-pink-400 opacity-60 transform rotate-12 animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            We Offer Great Affordable Premium Prices.
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-gray-100 shadow-md'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative overflow-hidden">
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500 relative z-10"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-blue-600 bg-opacity-0 group-hover:bg-opacity-80 transition-all duration-300 flex items-center justify-center z-0">
                  <button className="bg-blue-600 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-300">
                    <ArrowRight className="w-6 h-6" />
                  </button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PortfolioPage;
