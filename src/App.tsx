import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { CategoryPage } from './pages/CategoryPage';
import { SignInPage } from './pages/SignInPage';
import { AccountPage } from './pages/AccountPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { StudentOfferPage } from './pages/StudentOfferPage';
import { StudentApplicationPage } from './pages/StudentApplicationPage';

import { BookingPage } from './pages/BookingPage';
import { CheckoutPage } from './pages/CheckoutPage';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
      <Header />


      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/category/:type" element={<CategoryPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />
        <Route path="/book/:id" element={<BookingPage />} />
        <Route path="/checkout/:id" element={<CheckoutPage />} />
        <Route path="/student-offers" element={<StudentOfferPage />} />
        <Route path="/student-application" element={<StudentApplicationPage />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App
