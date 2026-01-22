import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import ProductPage from "./pages/ProductPage"
import ProductDetailPage from "./pages/ProductDetailPage"

const App = () => {
  return (
    <>
     <Navbar />
     <Routes>
         <Route path="/" element={<HomePage />} />
         <Route path="/products" element={<ProductPage />} />
         <Route path="/product/:slug" element={<ProductDetailPage />} />
     </Routes>
     <Footer />
    </>
  )
}
export default App