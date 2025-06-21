import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import LoginPage from './pages/LoginPage';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import CartDrawer from './components/cart/CartDrawer';
import CategoriesPage from './pages/CategoriesPage';
import CategoryDetailPage from './pages/CategoryDetailPage';
import SellersPage from './pages/SellersPage';
import SellerDetailPage from './pages/SellerDetailPage';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/products/:id" element={<ProductDetailPage />} />
            <Route path="/login" element={<LoginPage />} />
             <Route path="/categories" element={<CategoriesPage />} />
            <Route path="/categories/:id" element={<CategoryDetailPage />} />
               <Route path="/sellers" element={<SellersPage />} />
            <Route path="/sellers/:id" element={<SellerDetailPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </main>
        <Footer />
        <CartDrawer />
      </div>
    </Router>
  );
}

export default App;
