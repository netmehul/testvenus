import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { CategoryPage } from './pages/CategoryPage';
import { SignInPage } from './pages/SignInPage';
import { AccountPage } from './pages/AccountPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { StudentOfferPage } from './pages/StudentOfferPage';

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
        <Route path="/student-offers" element={<StudentOfferPage />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App
