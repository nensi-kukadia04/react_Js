export default function HomeCarousel() {
  return (
    <div className="relative w-full max-w-[1600px] mx-auto overflow-hidden rounded-lg shadow-md">
      {/* One Slide (Static Example) */}
      <div className="w-full h-[350px] relative flex-shrink-0">
        <img
          src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/34575d26b01c56f6.jpg?q=20"
          alt="Big Sale"
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-start px-10 text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            The Big Billion Days
          </h2>
          <p className="text-lg mb-4">
            Starts 23rd Sep • Early Access for Plus Members
          </p>
          <button className="bg-yellow-400 text-black px-6 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition">
            Shop Now
          </button>
        </div>
      </div>

      {/* Left Arrow */}
      <button className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white text-gray-800 p-2 rounded-full shadow hover:bg-gray-100">
        ❮
      </button>

      {/* Right Arrow */}
      <button className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white text-gray-800 p-2 rounded-full shadow hover:bg-gray-100">
        ❯
      </button>

      {/* Dots */}
      <div className="absolute bottom-3 w-full flex justify-center space-x-2">
        <span className="h-2 w-2 rounded-full bg-blue-600"></span>
        <span className="h-2 w-2 rounded-full bg-gray-300"></span>
        <span className="h-2 w-2 rounded-full bg-gray-300"></span>
      </div>
    </div>
  );
}
