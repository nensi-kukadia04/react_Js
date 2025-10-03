# 🛒 E-Commerce React Application

---

## 📌 Overview

This is a **modern E-Commerce web application** built with **React**, **Tailwind CSS**, and **TypeScript**.
It features **product management (CRUD)**, a **shopping cart**, **product details page**, and **dynamic pricing calculations**.
It uses **React Router v6** for navigation and **SweetAlert2** for interactive notifications.

---

## 🚀 Features

### Home Page

- Responsive **carousel** banner for promotions.
- **Product Grid**: Displays all products with image, name, category, price, stock status, and discounts.
- **Add to Cart** button with dynamic cart updates.
- **View Details** button for each product.

### Product Details Page

- Detailed view with description, highlights, offers, and delivery info.
- Add to cart with **SweetAlert2** confirmation.
- Buy Now button for future payment integration.

### Admin Dashboard

- **View Products**: Table with edit and delete actions.
- **Add Product**: Add new products dynamically.
- **Edit Product**: Update product details.
- **Delete Product**: Delete products with confirmation.

### Cart Page

- View all cart items with images and price.
- Increase/decrease quantity dynamically.
- Remove items from cart.
- Real-time **price calculations**: Total price, discount (20%), platform fee, and final amount.
- Place Order confirmation using **SweetAlert2**.

### Contact Page

- Simple static contact page for customer support.

---

## 🗂 Project Structure

```
src/
├── App.tsx                  # Root component
├── Pages/
│   ├── Home/
│   │   └── HomePage.tsx
│   ├── Add Products/
│   │   └── AddProductForm.tsx
│   ├── View Products/
│   │   ├── ViewProductPage.tsx
│   │   └── ProductDetailPage.tsx
│   ├── Edit Products/
│   │   └── EditProductPage.tsx
│   ├── Add To Cart/
│   │   └── AddToCartPage.tsx
│   └── Contacts/
│       └── ContactPage.tsx
├── Service/
│   └── ProductAPIService.ts
└── Routes/
    └── Routes.tsx
```

---

## 🌐 Routes

| Path                      | Component          | Loader                 |
| ------------------------- | ------------------ | ---------------------- |
| `/`                       | HomePage           | fetchAllProducts()     |
| `/add-product`            | AddProductForm     | N/A                    |
| `/view-product`           | AdminViewProducts  | fetchAllProducts()     |
| `/edit-product/:id`       | EditProductPage    | fetchSingleProduct(id) |
| `/view-productDetail/:id` | ProductDetailsPage | fetchProductById(id)   |
| `/contact`                | ContactPage        | N/A                    |
| `/addToCart`              | AddToCartPage      | fetchCart()            |

---

## ⚡ API Services

The application uses a **ProductAPIService** class for API interactions:

```ts
class ProductAPIService {
  async fetchAllProducts() {...}
  async fetchSingleProduct(id: string) {...}
  async addNewProduct(body: any) {...}
  async updateProduct(id: string, body: any) {...}
  async deleteproduct(id: string) {...}
  async fetchCart() {...}
  async addToCart(item: any) {...}
  async updateCartItem(id: string, body: any) {...}
  async removeCartItem(id: string) {...}
}
```

---

## 💻 Technologies Used

- **React 18+**
- **TypeScript**
- **Tailwind CSS**
- **React Router v6**
- **react-Toastify**
- **SweetAlert2**
- **Local JSON Server / REST API**
- **Vite** (or CRA)

---

## 🛠 Installation

1. Clone the repository:

```bash
git clone <repository-url>
```

2. Install dependencies:

```bash
npm install
```

3. Start the application:

```bash
npm start
```

4. Ensure the **JSON server** or backend API is running for products and cart.

---

## 🖼 Screenshots

- **Home Page**: ![HomePage](/homePage.png)
- **Home Page**: ![HomePage](/homePage2.png)
- **Product Details**: ![ProductDetails](/detailPage.png)
- **View Admin Product**: ![AdminView](/viewProduct.png)
- **Cart Page**: ![CartPage](/addTocart.png)
- **edit Page**: ![AdminView](/editProduct.png)
- **Add product Page**: ![AdminView](/addProduct.png)
- **Order Placed Page**: ![orderPlaced](/orderPlaced.png)
- **delete Page**: ![AdminView](/deleteProduct.png)
- **Contact Page**: ![Contactpage](/ContactPage.png)

---

## 📦 Usage

- Browse products and add them to your cart.
- View detailed information for each product.
- Manage products using the Admin Dashboard.
- Modify quantity, remove items, and place orders from the Cart page.

---

## 📜 License

This project is open source and **free to use** for learning and development purposes.
[MIT License](LICENSE)
