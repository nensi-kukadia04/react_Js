import { BarChart3, Layers, CreditCard, Clock } from 'lucide-react';

function ServicePage() {
  const services = [
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: 'Crafted for Startups',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.'
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: 'High-quality Design',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.'
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: 'All Essential Sections',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Speed Optimized',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.'
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: 'Fully Customizable',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.'
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: 'Regular Updates',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            We Offer The Best Quality Service for You
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor eros. 
              Donec vitae tortor lacus. Phasellus aliquam ante in maximus.
            </p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-blue-600 mb-6 transform group-hover:scale-110 transition-transform duration-300 animate-bounce-icon">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicePage;