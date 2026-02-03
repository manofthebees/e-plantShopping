import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";
import AboutUs from "./components/AboutUs";
import AboutPage from "./components/AboutPage";
import "./App.css";

const App = () => {
  const [showProducts, setShowProducts] = useState(false);

  return (
    <Router>
      <div style={{ position: "relative", minHeight: "100vh" }}>
        <div className="background-image" />
        <div className="content-bg" style={{ position: "relative", zIndex: 1 }}>
          <Routes>
            <Route
              path="/"
              element={
                showProducts ? (
                  <ProductList />
                ) : (
                  <div className="landing">
                    <h1>Welcome to Paradise Nursery</h1>
                    <AboutUs />
                    <button onClick={() => setShowProducts(true)}>
                      Get Started
                    </button>
                  </div>
                )
              }
            />
            <Route path="/plants" element={<ProductList />} />
            <Route path="/cart" element={<CartItem />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
