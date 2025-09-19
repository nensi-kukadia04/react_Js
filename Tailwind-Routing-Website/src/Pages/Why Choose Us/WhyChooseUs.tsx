
function WhyChooseUsPage () {
  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-10 left-0 w-6 h-20 bg-pink-400 opacity-60 transform rotate-45 animate-wiggle"></div>
      <div className="absolute top-40 left-20 w-24 h-24 bg-yellow-400 rounded-full opacity-80 animate-bounce-slow"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Images */}
          <div className="relative animate-slide-in-left">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img 
                  src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Team working together"
                  className="rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105"
                />
                <img 
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Person working on laptop"
                  className="rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105"
                />
              </div>
              <div className="pt-8">
                <img 
                  src="https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Colleagues collaborating"
                  className="rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105"
                />
              </div>
            </div>
          </div>
          
          {/* Right Content */}
          <div className="space-y-6 animate-slide-in-right">
            <div className="space-y-4">
              <p className="text-blue-600 font-semibold text-lg">Why Choose Us</p>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                We Make Our customers happy by giving Best services.
              </h2>
            </div>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              It is a long established fact that a reader will be distracted by the readable 
              content of a page when looking at its layout. The point of using Lorem Ipsum.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsPage;