import { Users, Target, Users2 } from 'lucide-react';

function FeaturePage () {
  const features = [
    {
      icon: <Users className="w-8 h-8" />,
      title: '24/7 Support',
      description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
      color: 'bg-pink-500',
      hoverColor: 'hover:bg-pink-600'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Take Ownership',
      description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
      color: 'bg-green-500',
      hoverColor: 'hover:bg-green-600'
    },
    {
      icon: <Users2 className="w-8 h-8" />,
      title: 'Team Work',
      description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
      color: 'bg-orange-500',
      hoverColor: 'hover:bg-orange-600'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="flex items-start space-x-4 p-6 rounded-xl hover:shadow-lg transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`${feature.color} ${feature.hoverColor} p-4 rounded-full text-white transition-colors duration-200 animate-pulse-slow`}>
                {feature.icon}
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturePage;