function StatsPage() {
  const stats = [
    {
      number: '785',
      label: 'Global Brands',
      color: 'text-blue-600'
    },
    {
      number: '533',
      label: 'Happy Clients',
      color: 'text-green-600'
    },
    {
      number: '865',
      label: 'Winning Award',
      color: 'text-purple-600'
    },
    {
      number: '346',
      label: 'Happy Clients',
      color: 'text-orange-600'
    }
  ];

  const brands = [
    'logitech',
    'dropcam',
    'AMD',
    'nike',
    'mandiri',
    'amazon'
  ];

  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-blue-600 rounded-full opacity-20 transform translate-x-48"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-yellow-400 rounded-full opacity-60 animate-bounce-slow"></div>
      <div className="absolute bottom-20 left-10 w-0 h-0 border-l-[30px] border-l-transparent border-r-[30px] border-r-transparent border-b-[50px] border-b-pink-400 opacity-60 animate-wiggle"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`text-4xl md:text-6xl font-bold ${stat.color} mb-2 animate-counter`}>
                {stat.number}
              </div>
              <p className="text-gray-600 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
        
        {/* Trusted by Global Brands */}
        <div className="text-center animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Trusted by Global Brands
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
            It is a long established fact that a reader will be distracted by the readable content 
            of a page when looking at its layout. The point of using.
          </p>
          
          {/* Brand Logos */}
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60">
            {brands.map((brand, index) => (
              <div 
                key={index}
                className="text-2xl font-bold text-gray-400 hover:text-gray-600 transition-colors animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {brand}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsPage;