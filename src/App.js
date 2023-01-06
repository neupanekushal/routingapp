import "./App.css";
import Welcome from "./components/Welcome/Welcome";
import Products from "./components/Products/Products";
import { Routes, Route, Navigate } from "react-router-dom";
import MainHeader from "./components/MainHeader/MainHeader";
import ProductDetails from "./components/ProductDetails/Productdetails";
function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/welcome" />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:ProductId" element={<ProductDetails />} />
          <Route path="*" element={<p> Page not found</p>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
