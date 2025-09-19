import BlogPage from "../Blog/BlogPage";
import ContactPage from "../Contact/ContactPage";
import FeaturePage from "../Features/FeaturePage";
import PortfolioPage from "../Portfolio/PortfolioPage";
import PricingPage from "../Pricing/PricingPage";
import ServicePage from "../Services/ServicePage";
import StatsPage from "../Stats/StatsPage";
import TeamPage from "../Team/TeamPage";
import TestimonialPage from "../Testimonials/TestimonialPage";
import WhyChooseUsPage from "../Why Choose Us/WhyChooseUs";

export default function HomePage() {
  return (
    <>
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Background Decorative Elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-blue-600 rounded-full opacity-90 transform translate-x-48 -translate-y-12 animate-float"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-yellow-400 rounded-full animate-bounce-slow"></div>
      <div className="absolute bottom-20 right-40 w-6 h-20 transform rotate-45">
        <div className="w-full h-full bg-pink-400 opacity-70 animate-wiggle"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-slide-in-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              We specialize in{' '}
              <span className="text-blue-600">UI/UX</span>,{' '}
              <span className="text-blue-600">Web Development</span>,{' '}
              <span className="text-blue-600">Digital Marketing</span>.
            </h1>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fringilla 
              magna mauris. Nulla fermentum viverra sem eu rhoncus consequat 
              varius nisl quis, posuere magna.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 items-start">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
                Get Started Now
              </button>
              
              <div className="space-y-2">
                <p className="font-semibold text-gray-900 text-lg">Call us (0123) 456 - 789</p>
                <p className="text-gray-600">For any question or concern</p>
              </div>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="relative animate-slide-in-right">
            <div className="relative z-10">
              <img 
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Woman working on laptop"
                className="rounded-3xl shadow-2xl w-full max-w-lg mx-auto transform hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-8 h-24 bg-pink-400 transform rotate-12 animate-wiggle"></div>
          </div>
        </div>
      </div>
    </section>
    <FeaturePage/>
    <WhyChooseUsPage/>
    <TeamPage/>
    <ServicePage/>
    <PortfolioPage/>
    <TestimonialPage/>
    <StatsPage/>
    <BlogPage/>
    <PricingPage/>
    <ContactPage/>
    </>
  );
}
