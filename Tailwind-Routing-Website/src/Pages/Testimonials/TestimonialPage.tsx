import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { useState } from 'react';

function TestimonialPage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'David Smith',
      role: 'Founder @democompany',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dolor diam, feugiat quis enim sed, ullamcorper semper ligula. Mauris consequat justo volutpat.',
      company: 'dropcam'
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      role: 'CEO @techstartup',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600',
      content: 'Working with this team has been an incredible experience. Their attention to detail and innovative approach helped us achieve our goals beyond expectations.',
      company: 'techstartup'
    },
    {
      id: 3,
      name: 'Michael Chen',
      role: 'Product Manager @innovate',
      image: 'https://images.pexels.com/photos/3184432/pexels-photo-3184432.jpeg?auto=compress&cs=tinysrgb&w=600',
      content: 'The quality of work and professionalism shown by this team is outstanding. They delivered exactly what we needed and more.',
      company: 'innovate'
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentTestimonial];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-16 h-16 bg-pink-400 transform rotate-45 opacity-60 animate-spin-slow"></div>
      <div className="absolute bottom-20 left-10 w-12 h-12 bg-blue-400 transform rotate-45 opacity-70 animate-bounce-slow"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Client's Testimonials
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            It is a long established fact that a reader will be distracted by the readable content 
            of a page when looking at its layout. The point of using.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 relative animate-fade-in-up">
            {/* Colorful border */}
            <div className="absolute right-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-pink-500 to-yellow-500 rounded-r-2xl"></div>
            
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Profile Image */}
              <div className="flex-shrink-0">
                <img 
                  src={current.image}
                  alt={current.name}
                  className="w-32 h-32 rounded-2xl object-cover shadow-lg"
                />
              </div>
              
              {/* Content */}
              <div className="flex-1 text-center md:text-left">
                <Quote className="w-12 h-12 text-gray-300 mb-4 mx-auto md:mx-0" />
                <p className="text-lg text-gray-600 italic mb-6 leading-relaxed">
                  {current.content}
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-xl font-bold text-gray-900">{current.name}</h4>
                    <p className="text-gray-600">{current.role}</p>
                  </div>
                  <div className="text-gray-400 font-semibold">
                    {current.company}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button 
              onClick={prevTestimonial}
              className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
            
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextTestimonial}
              className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialPage;