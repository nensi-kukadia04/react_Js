import { useState } from 'react';
function PricingPage () {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: 'Starter',
      monthlyPrice: 29,
      annualPrice: 290,
      features: [
        '400 GB Storage',
        'Unlimited Photos & Videos',
        'Exclusive Support',
        '7-day free trial'
      ],
      buttonColor: 'bg-pink-500 hover:bg-pink-600',
      isPopular: false
    },
    {
      name: 'Growth Plan',
      monthlyPrice: 59,
      annualPrice: 590,
      features: [
        '400 GB Storage',
        'Unlimited Photos & Videos',
        'Exclusive Support',
        '7-day free trial'
      ],
      buttonColor: 'bg-blue-600 hover:bg-blue-700',
      isPopular: true
    },
    {
      name: 'Business',
      monthlyPrice: 139,
      annualPrice: 1390,
      features: [
        '400 GB Storage',
        'Unlimited Photos & Videos',
        'Exclusive Support',
        '7-day free trial'
      ],
      buttonColor: 'bg-pink-500 hover:bg-pink-600',
      isPopular: false
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-400 opacity-60 transform rotate-45 animate-spin-slow"></div>
      <div className="absolute bottom-20 right-20 w-6 h-24 bg-pink-400 opacity-60 transform rotate-12 animate-wiggle"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            We Offer Great Affordable Premium Prices.
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            It is a long established fact that a reader will be distracted by the readable content 
            of a page when looking at its layout. The point of using.
          </p>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4 mb-12">
            <span className={`font-semibold ${!isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
              Bill Monthly
            </span>
            <button 
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative w-16 h-8 rounded-full transition-colors duration-200 ${
                isAnnual ? 'bg-blue-600' : 'bg-gray-300'
              }`}
            >
              <div 
                className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-transform duration-200 ${
                  isAnnual ? 'translate-x-9' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`font-semibold ${isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
              Bill Annually
            </span>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`bg-white p-8 rounded-2xl transition-all duration-300 animate-fade-in-up ${
                plan.isPopular 
                  ? 'shadow-2xl scale-105 ring-2 ring-blue-600' 
                  : 'shadow-lg hover:shadow-xl'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gray-900">
                    ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                  </span>
                  <span className="text-gray-600 ml-2">
                    /{isAnnual ? 'year' : 'per month'}
                  </span>
                </div>
                <p className="text-gray-600">No credit card required</p>
              </div>
              
              <button className={`w-full ${plan.buttonColor} text-white py-3 px-6 rounded-full font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl mb-8`}>
                Try for free
              </button>
              
              <ul className="space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-gray-600 text-center">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPage;