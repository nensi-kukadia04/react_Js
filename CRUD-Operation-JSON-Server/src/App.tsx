import Footer from "./Components/Footer";
import Navbar from "./Components/NavBar";
import HomeCarousel from "./Pages/Home/HomePage";
import AdminViewProducts from "./Pages/View Products/ViewProductPage";
// import AddProductForm from "./Pages/Add Products/AddProductForm";
// import AddToCartPage from "./Pages/Add To Cart/AddToCartPage";
import ProductViewPage from "./Pages/View Products/ProductDetailPage";
// import ContactFormPage from "./Pages/Contacts/ContactFormPage";

export default function App() {
  return (
    <div>
      <Navbar/>
      <ProductViewPage/>
      <AdminViewProducts/>
      <HomeCarousel/>
      <Footer/>
    </div>
  )
}
