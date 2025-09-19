export default function AddToCartPage() {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Side - Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {/* Delivery Section */}
          <div className="bg-white rounded-lg shadow p-4">
            <h2 className="font-semibold text-gray-700 mb-2">
              Deliver to: <span className="font-bold">Nensi Kukadia, 395010</span>
              <span className="ml-2 bg-gray-200 text-gray-600 text-xs px-2 py-0.5 rounded">
                HOME
              </span>
            </h2>
            <p className="text-gray-600 text-sm">
              A-146 Samrat soc, near bhulka sagar vidhyabhavan school, Surat
            </p>
            <button className="mt-2 text-blue-600 font-medium">Change</button>
          </div>

          {/* Cart Item */}
          <div className="bg-white rounded-lg shadow p-4">
            <div className="flex gap-4">
              <img
                src="https://rukminim2.flixcart.com/image/416/416/xif0q/bottle/n/t/z/1200-1-stainless-steel-sipper-bottle-for-office-school-home-original-imagzwhr2tzwz3wc.jpeg?q=70"
                alt="Steel Bottle"
                className="w-28 h-28 object-contain"
              />
              <div className="flex-1">
                <h3 className="font-semibold text-gray-800">
                  MYOZ 1200 ml Steel Bottle (Pack of 1, Pink)
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  Seller: <span className="font-medium">MYOZ</span>{" "}
                  <span className="ml-1 text-blue-600 text-xs">✔ Assured</span>
                </p>

                {/* Price */}
                <div className="mt-2 flex items-center gap-2">
                  <span className="text-lg font-bold text-gray-800">₹823</span>
                  <span className="line-through text-gray-500 text-sm">₹2499</span>
                  <span className="text-green-600 text-sm font-medium">67% Off</span>
                </div>

                {/* Qty + Actions */}
                <div className="mt-3 flex items-center gap-4">
                  <div className="flex items-center border rounded">
                    <button className="px-3 py-1 text-lg">–</button>
                    <span className="px-4">1</span>
                    <button className="px-3 py-1 text-lg">+</button>
                  </div>
                  <button className="text-sm font-medium text-gray-700 hover:text-blue-600">
                    SAVE FOR LATER
                  </button>
                  <button className="text-sm font-medium text-gray-700 hover:text-red-600">
                    REMOVE
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Place Order Button */}
          <div className="bg-white rounded-lg shadow p-4 flex justify-end">
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded shadow">
              PLACE ORDER
            </button>
          </div>
        </div>

        {/* Right Side - Price Details */}
        <div className="bg-white rounded-lg shadow p-6 h-fit">
          <h2 className="font-semibold text-gray-700 mb-4">PRICE DETAILS</h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Price (1 item)</span>
              <span>₹2499</span>
            </div>
            <div className="flex justify-between text-green-600">
              <span>Discount</span>
              <span>- ₹1623</span>
            </div>
            <div className="flex justify-between">
              <span>Coupons for you</span>
              <span>- ₹53</span>
            </div>
            <div className="flex justify-between">
              <span>Platform Fee</span>
              <span>₹7</span>
            </div>
            <hr className="my-2" />
            <div className="flex justify-between font-bold text-gray-800">
              <span>Total Amount</span>
              <span>₹830</span>
            </div>
            <p className="text-green-600 text-sm mt-2">
              You will save ₹1669 on this order
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
