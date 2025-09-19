function TeamPage() {
  const teamMembers = [
    {
      name: "Olivia Andrium",
      role: "Product Manager",
      image:
        "https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=600",
      socialLinks: false,
    },
    {
      name: "Jemse Kemorun",
      role: "Product Designer",
      image:
        "https://images.pexels.com/photos/3184432/pexels-photo-3184432.jpeg?auto=compress&cs=tinysrgb&w=600",
      socialLinks: false,
    },
    {
      name: "Avi Pestarica",
      role: "Web Designer",
      image:
        "https://images.pexels.com/photos/3184611/pexels-photo-3184611.jpeg?auto=compress&cs=tinysrgb&w=600",
      socialLinks: true,
    },
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Meet With Our Creative Dedicated Team
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
            convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam
            ante in maximus.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="group">
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {member.socialLinks && (
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-600 via-blue-500 to-transparent p-6">
                    <div className="flex space-x-4 justify-center">
                      {/* Facebook */}
                      <button className="p-2 rounded-lg bg-white/20 hover:bg-white/30">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          className="w-5 h-5"
                          fill="white"
                        >
                          <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-3h2v-2c0-2 1.2-3.1 3-3.1.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2v1.8h2.3l-.4 3h-1.9v7A10 10 0 0 0 22 12z" />
                        </svg>
                      </button>
                      {/* Twitter */}
                      <button className="p-2 rounded-lg bg-white/20 hover:bg-white/30">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          className="w-5 h-5"
                          fill="white"
                        >
                          <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.3 4.3 0 0 0 1.88-2.37c-.84.5-1.77.85-2.76 1.05a4.27 4.27 0 0 0-7.3 3.89A12.1 12.1 0 0 1 3.1 4.9a4.27 4.27 0 0 0 1.32 5.7 4.2 4.2 0 0 1-1.93-.53v.05a4.27 4.27 0 0 0 3.43 4.18c-.47.13-.97.2-1.49.2-.36 0-.72-.04-1.06-.1a4.28 4.28 0 0 0 3.98 2.96A8.58 8.58 0 0 1 2 19.54a12.1 12.1 0 0 0 6.56 1.92c7.88 0 12.2-6.53 12.2-12.2v-.56c.84-.6 1.58-1.36 2.17-2.22z" />
                        </svg>
                      </button>
                      {/* LinkedIn */}
                      <button className="p-2 rounded-lg bg-white/20 hover:bg-white/30">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          className="w-5 h-5"
                          fill="white"
                        >
                          <path d="M19 3A2 2 0 0 1 21 5v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zm-9.5 6h-3v10h3V9zm-.5-3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm4.5 3h-3v10h3v-5.6c0-2 2.5-2.1 2.5 0V19h3v-6.5c0-4-4.5-3.9-5.5-1.9V9z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                )}
              </div>
              <div className="text-center mt-6 space-y-2">
                <h3 className="text-xl font-bold text-gray-900">
                  {member.name}
                </h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TeamPage;
