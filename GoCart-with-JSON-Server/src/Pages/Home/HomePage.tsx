import { NavLink, useLoaderData } from "react-router";
import type { ProductType } from "../../Service/ProductAPIService";
import { productAPIServices } from "../../Service/ProductAPIService";
import { useNavigate } from "react-router";
import { toast, ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";
import { SearchIcon, FunnelIcon } from "lucide-react";

export default function HomePage() {
  const allProducts: ProductType[] = useLoaderData() || [];
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("az");
  const [price, setPrice] = useState(0);
  const [maxAndMinPrice, setMaxAndMinPrice] = useState<number[]>([]);
  const [allCategories, setAllCategories] = useState<string[]>(["all"]);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const navigate = useNavigate();

  //price
  useEffect(() => {
    if (allProducts.length > 0) {
      const allPrice = allProducts.map((p) => Number(p.price));
      const max = Math.max(...allPrice);
      const min = Math.min(...allPrice);
      setMaxAndMinPrice([min, max]);
      setPrice(max)
    }
  }, [allProducts]);

  // categories
  useEffect(() => {
    const mySetCategories = new Set(allProducts.map((p) => p.category));
    setAllCategories(["all", ...mySetCategories]);
  }, [allProducts]);

  // add to cart
  const handleAddToCart = async (product: ProductType) => {
    const cartItem = {
      id: String(Date.now()),
      productId: product.id,
      name: product.name,
      price: Number(product.price),
      image: product.image,
      quantity: 1,
    };

    if (await productAPIServices.addToCart(cartItem)) {
      toast.success(`${product.name} added to cart`);
      navigate("/addToCart");
    } else {
      toast.error("Failed to add to cart");
    }
  };

  // filter & sort products
  const filteredProducts = allProducts
    .filter((product) => {
      const searchData =
        product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.category.toLowerCase().includes(search.toLowerCase()) ||
        product.id.includes(search);

      const priceData = Number(product.price) <= price;
      const categoryData = selectedCategory === "all" || product.category === selectedCategory;

      return searchData && priceData && categoryData;
    })
    .sort((a, b) =>
      sort === "az" ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
    );

  return (
    <div className="relative w-full max-w-[1600px] mx-auto flex">
      {/* Category Sidebar */}
      <aside className="hidden md:block w-64 bg-white border border-gray-200 shadow-lg rounded-xl p-5 h-fit sticky top-20 mr-6">
        <h3 className="text-lg font-bold mb-4 text-gray-800 border-b pb-2">
          Categories
        </h3>
        <ul className="space-y-2">
          {allCategories.map((cat) => (
            <li key={cat}>
              <button
                onClick={() => setSelectedCategory(cat)}
                className={`w-full text-left flex items-center justify-between gap-3 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200
              ${selectedCategory === cat
                    ? "bg-blue-600 text-white shadow"
                    : "bg-gray-50 hover:bg-gray-100 text-gray-700 border border-gray-200"
                  }`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`w-2 h-2 rounded-full ${selectedCategory === cat ? "bg-white" : "bg-blue-400"
                      }`}
                  ></span>
                  {cat[0].toUpperCase() + cat.slice(1)}
                </div>
                <span className="text-xs font-medium text-gray-700">{cat === "all"
                  ? allProducts.length
                  : allProducts.filter((p) => p.category === cat).length}</span>
              </button>
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Section */}
      <main className="flex-1">
        {/* Carousel */}
        <div className="w-full h-[420px] relative rounded-2xl overflow-hidden shadow-xl">
          <img
            src="https://rukminim2.flixcart.com/fk-p-flap/1600/400/image/ce75b75d19c39b98.jpg?q=50"
            alt="Big Sale"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end px-12 pb-12 text-white">
            <h2 className="text-4xl md:text-5xl font-extrabold drop-shadow-lg">
              The Big Billion Days
            </h2>
            <p className="text-lg md:text-xl mt-2 opacity-90">
              Starts 23rd Sep • Early Access for Plus Members
            </p>
            <button className="mt-5 bg-yellow-400 text-black px-6 py-3 rounded-2xl font-semibold shadow-lg hover:bg-yellow-300 transition-all">
              Shop Now
            </button>
          </div>
        </div>

        {/* Search & Sort Bar */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between px-6 py-8 gap-4">
          {/* Search Input */}
          <div className="flex items-center w-full md:w-1/3 border border-gray-300 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition">
            <input
              type="text"
              placeholder="Search products..."
              className="px-4 py-2 outline-none w-full text-gray-700"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button className="px-3 bg-gray-100 border-l border-gray-300">
              <SearchIcon className="w-5 h-5 text-gray-600" />
            </button>
          </div>

          {/* Sort & Price */}
          <div className="flex flex-col md:flex-row md:items-center gap-4 w-full md:w-auto">
            <div className="flex items-center gap-2 bg-gray-100 rounded-2xl px-3 py-2 shadow hover:bg-gray-200 transition">
              <FunnelIcon className="w-5 h-5 text-gray-600" />
              <select
                value={sort}
                onChange={(event) => setSort(event.target.value)}
                className="bg-transparent outline-none text-gray-700"
              >
                <option value="az">A - Z</option>
                <option value="za">Z - A</option>
              </select>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-gray-600 text-sm font-medium">
                Price: ₹0 - ₹{price}
              </span>
              <input
                type="range"
                min={maxAndMinPrice[0]}
                max={maxAndMinPrice[1]}
                value={price}
                onChange={(event) => setPrice(Number(event.target.value))}
                className="accent-yellow-400 w-40 md:w-52"
              />
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="px-6 py-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-1 overflow-hidden border border-gray-200"
              >
                {/* Product Image */}
                <div className="relative w-full h-52 flex items-center justify-center bg-gray-50">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="max-h-40 object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                  {product.stock > 0 && (
                    <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-md shadow">
                      20% OFF
                    </span>
                  )}
                </div>

                {/* Product Info */}
                <div className="p-5 flex flex-col">
                  <h3 className="text-base font-semibold text-gray-900 truncate group-hover:text-indigo-600 transition">
                    {product.name}
                  </h3>
                  <p className="text-xs text-gray-500 mt-1">{product.category}</p>

                  <div className="flex items-center gap-2 mt-2">
                    <p className="text-lg font-bold text-gray-900">
                      ₹{product.price}
                    </p>
                    <p className="text-sm text-gray-400 line-through">
                      ₹{Number(product.price) + 500}
                    </p>
                  </div>

                  <span
                    className={`text-xs mt-1 font-medium ${product.stock > 0 ? "text-green-600" : "text-red-500"
                      }`}
                  >
                    {product.stock > 0 ? "In stock" : "Out of stock"}
                  </span>

                  {/* Buttons */}
                  <div className="flex gap-2 mt-4">
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="flex-1 bg-emerald-500 text-white py-2 text-sm rounded-lg font-medium shadow-sm hover:bg-emerald-600 transition"
                    >
                      Add to Cart
                    </button>
                    <NavLink
                      to={`/view-productDetail/${product.id}`}
                      className="flex-1 bg-indigo-500 text-white py-2 text-sm text-center rounded-lg font-medium shadow-sm hover:bg-indigo-600 transition"
                    >
                      View Details
                    </NavLink>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-4 py-10">
              No products available
            </p>
          )}
        </div>
        <ToastContainer />
      </main>
    </div>
  );
}
