export default function AdminViewProducts() {
  const products = [
    {
      id: 1,
      name: "OnePlus Nord 5",
      description: "8 GB RAM + 256 GB ROM | Marble Sands",
      price: "₹31,999",
      oldPrice: "₹34,999",
    },
    {
      id: 2,
      name: "iPhone 15 Pro",
      description: "8 GB RAM + 512 GB ROM | Titanium Gray",
      price: "₹1,39,999",
      oldPrice: "₹1,49,999",
    },
    {
      id: 3,
      name: "Samsung S24 Ultra",
      description: "12 GB RAM + 256 GB ROM | Phantom Black",
      price: "₹1,19,999",
      oldPrice: "₹1,29,999",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg p-6">
        {/* Title */}
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Admin – View Products
        </h1>

        {/* Products Table */}
        <table className="w-full border border-gray-200 text-sm">
          <thead className="bg-gray-50 text-gray-700">
            <tr>
              <th className="px-4 py-3 border-b text-left">ID</th>
              <th className="px-4 py-3 border-b text-left">Product</th>
              <th className="px-4 py-3 border-b text-left">Description</th>
              <th className="px-4 py-3 border-b text-left">Price</th>
              <th className="px-4 py-3 border-b text-left">Old Price</th>
              <th className="px-4 py-3 border-b text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="hover:bg-gray-50">
                <td className="px-4 py-3 border-b">{product.id}</td>
                <td className="px-4 py-3 border-b font-medium">{product.name}</td>
                <td className="px-4 py-3 border-b text-gray-600">
                  {product.description}
                </td>
                <td className="px-4 py-3 border-b text-green-600 font-semibold">
                  {product.price}
                </td>
                <td className="px-4 py-3 border-b line-through text-gray-500">
                  {product.oldPrice}
                </td>
                <td className="px-4 py-3 border-b text-center">
                  <button className="bg-green-500 text-white px-3 py-1 rounded mr-2">
                    ✏️ Edit
                  </button>
                  <button className="bg-red-500 text-white px-3 py-1 rounded">
                    ❌ Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
