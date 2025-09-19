# 🛒 Base - React + Tailwind Website

A modern **React + Tailwind CSS** e-commerce style website with **React Router** for page navigation.  
This project demonstrates clean UI design with reusable components such as Navbar, Footer, Product Page, and more.

---

## 📌 Features

- ⚡ Built with **React + TypeScript**
- 🎨 Styled using **Tailwind CSS**
- 🛣️ Navigation with **React Router v6**
- 📱 Fully responsive (mobile-first)
- 🔄 Reusable components (Navbar, Footer, Cards, etc.)

---

## 📂 Folder Structure

```
base/
├── src/
│   ├── components/        # Reusable UI components
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   ├── pages/             # Routing pages
│   │   ├── HomePage.tsx
│   │   ├── PortfolioPage.tsx
│   │   ├── ServicesPage.tsx
│   │   ├── BlogPage.tsx
│   │   ├── ContactPage.tsx
│   │   ├── PricingPage.tsx
│   │   ├── TeamPage.tsx
│   │   ├── FeaturesPage.tsx
│   │   ├── StatsPage.tsx
│   │   ├── TestimonialPage.tsx
│   │   ├── WhyChooseUsPage.tsx
│   ├── App.tsx            # Router setup
│   ├── main.tsx           # Entry point
│   └── index.css          # Tailwind styles
├── public/
│   └── index.html
├── package.json
└── README.md
```

---

## ⚙️ Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/nensi-kukadia04/reactJs/Tailwind-Routing-Website.git
   cd base-react-website
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

---

## 🚦 Routing Setup

The project uses **React Router v6**.

`App.tsx`

```tsx
import { BrowserRouter  } from "react-router";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home/HomePage";
import About from "./pages/Blog/BlogPage";
import Services from "./pages/Services/ServicesPage";
import Products from "./pages/Features/FeaturePage";
import Contact from "./pages/Contact/ContactPage";
import Contact from "./pages/Portfolio/PortfolioPage";
import Contact from "./pages/Pricing/PricingPage";
import Contact from "./pages/Stats/StatsPage";
import Contact from "./pages/Team/TeamPage";
import Contact from "./pages/Testimonials/TestimonialPage";
import Contact from "./pages/Why Choose Us/WhyChooseUsPage";

---

## 🌐 Live Demo
[Coming Soon](#)

---

## 🛠️ Built With
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Router](https://reactrouter.com/en/main)

---

## 🤝 Contributing
Contributions, issues, and feature requests are welcome!
Feel free to fork this repo and create a pull request.

---

## 📜 License
This project is licensed under the **MIT License**.


```
![HomePage](<Screenshot 2025-09-19 215808.png>)
![PortfolioPage](<Screenshot 2025-09-19 215829.png>)
![TeamPage](image.png)
![PricingPage](<Screenshot 2025-09-19 220631.png>)
![BlogPage](<Screenshot 2025-09-19 215950.png>)
![ContactPage](<Screenshot 2025-09-19 215829-1.png>)