export default function AddProductFormUI() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 p-4">
      <div className="w-full max-w-lg bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
          Add New Product
        </h2>
        <form className="space-y-5">
          {/* Product Name */}
          <div>
            <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
              Product Name
            </label>
            <input
              type="text"
              placeholder="Enter product name"
              className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Price */}
          <div>
            <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
              Price (₹)
            </label>
            <input
              type="number"
              placeholder="Enter price"
              className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Image URL */}
          <div>
            <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
              Product Image
            </label>
            <input
              type="text"
              placeholder="Enter image URL"
              className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Category & Stock */}
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
                Category
              </label>
              <select className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Select category</option>
                <option>Electronics</option>
                <option>Fashion</option>
                <option>Home & Kitchen</option>
                <option>Books</option>
                <option>Others</option>
              </select>
            </div>
            <div className="flex-1">
              <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
                Stock
              </label>
              <input
                type="number"
                placeholder="Enter stock quantity"
                className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Product Description */}
          <div>
            <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
              Product Description
            </label>
            <textarea
              placeholder="Enter product description"
              rows={4}
              className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
}
