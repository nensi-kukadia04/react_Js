import { Calendar, User } from 'lucide-react';

function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: 'Free advertising for your online business',
      author: 'Musharof Chy',
      date: '25 Dec, 2025',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      excerpt: 'Learn effective strategies to promote your business without breaking the bank.'
    },
    {
      id: 2,
      title: '9 simple ways to improve your design skills',
      author: 'Musharof Chy',
      date: '25 Dec, 2025',
      image: 'https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=800',
      excerpt: 'Discover practical tips and techniques to enhance your design capabilities.'
    },
    {
      id: 3,
      title: 'Tips to quickly improve your coding speed.',
      author: 'Musharof Chy',
      date: '25 Dec, 2025',
      image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=800',
      excerpt: 'Boost your productivity with these proven coding techniques and shortcuts.'
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
            Latest Blogs & News
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            It is a long established fact that a reader will be distracted by the readable content 
            of a page when looking at its layout. The point of using.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article 
              key={post.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {post.excerpt}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPage;