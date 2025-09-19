
export default function ProductViewPage() {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow p-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left - Product Images */}
        <div className="flex flex-col items-center">
          <img
            src="https://rukminim2.flixcart.com/image/416/416/xif0q/bottle/n/t/z/1200-1-stainless-steel-sipper-bottle-for-office-school-home-original-imagzwhr2tzwz3wc.jpeg?q=70"
            alt="Steel Bottle"
            className="w-80 h-80 object-contain"
          />
          <div className="flex gap-3 mt-4">
            <img
              src="https://rukminim2.flixcart.com/image/128/128/xif0q/bottle/n/t/z/1200-1-stainless-steel-sipper-bottle-for-office-school-home-original-imagzwhr2tzwz3wc.jpeg?q=70"
              alt="thumb1"
              className="w-20 h-20 border rounded p-1 cursor-pointer hover:border-blue-500"
            />
            <img
              src="https://rukminim2.flixcart.com/image/128/128/xif0q/bottle/n/t/z/1200-1-stainless-steel-sipper-bottle-for-office-school-home-original-imagzwhr2tzwz3wc.jpeg?q=70"
              alt="thumb2"
              className="w-20 h-20 border rounded p-1 cursor-pointer hover:border-blue-500"
            />
            <img
              src="https://rukminim2.flixcart.com/image/128/128/xif0q/bottle/n/t/z/1200-1-stainless-steel-sipper-bottle-for-office-school-home-original-imagzwhr2tzwz3wc.jpeg?q=70"
              alt="thumb3"
              className="w-20 h-20 border rounded p-1 cursor-pointer hover:border-blue-500"
            />
          </div>
          {/* Buttons */}
          <div className="flex gap-4 mt-6 w-full">
            <button className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-white py-3 rounded font-semibold shadow">
              ADD TO CART
            </button>
            <button className="flex-1 bg-orange-500 hover:bg-orange-600 text-white py-3 rounded font-semibold shadow">
              BUY NOW
            </button>
          </div>
        </div>

        {/* Right - Product Details */}
        <div>
          {/* Title */}
          <h1 className="text-2xl font-bold text-gray-800">
            MYOZ 1200 ml Steel Bottle (Pack of 1, Pink)
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Specially designed steel bottle with durable body
          </p>

          {/* Ratings */}
          <div className="flex items-center gap-2 mt-2">
            <span className="bg-green-600 text-white text-xs px-2 py-1 rounded">
              4.2 ★
            </span>
            <span className="text-sm text-gray-500">12,341 Ratings & 1,243 Reviews</span>
          </div>

          {/* Price */}
          <div className="mt-4 flex items-center gap-2">
            <span className="text-3xl font-bold text-gray-800">₹823</span>
            <span className="line-through text-gray-500">₹2499</span>
            <span className="text-green-600 font-medium">67% off</span>
          </div>
          <p className="text-sm text-gray-600 mt-1">+ ₹40 Secured Packaging Fee</p>

          {/* Offers */}
          <div className="mt-6">
            <h3 className="font-semibold text-gray-800 mb-2">Available offers</h3>
            <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
              <li>Bank Offer: 10% off on ICICI Credit Cards</li>
              <li>Special Price: Get extra 5% off (price inclusive of discount)</li>
              <li>No Cost EMI available on select cards</li>
            </ul>
          </div>

          {/* Delivery */}
          <div className="mt-6">
            <h3 className="font-semibold text-gray-800">Delivery</h3>
            <p className="text-sm text-gray-600">
              Enter pincode to check delivery date and availability
            </p>
            <input
              type="text"
              placeholder="Enter Pincode"
              className="mt-2 border rounded px-3 py-2 w-40 focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>

          {/* Highlights */}
          <div className="mt-6">
            <h3 className="font-semibold text-gray-800 mb-2">Highlights</h3>
            <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
              <li>Made of: Steel</li>
              <li>Capacity: 1200 ml</li>
              <li>Color: Pink</li>
              <li>BPA Free, Rust Resistant</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
