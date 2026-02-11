import React, { useState } from "react";
import ProductList from "./ProductList";
import AboutUs from "./AboutUs";
import "./App.css";

function App() {
  const [showProducts, setShowProducts] = useState(false);

  return (
    <div>
      {!showProducts ? (
        <div className="landing-page">
          <div className="landing-overlay">
            <div className="landing-content">
              <h1>Paradise Nursery</h1>
              <p>Where Green Meets Serenity</p>

              <button
                className="get-started-button"
                onClick={() => setShowProducts(true)}
              >
                Get Started
              </button>

              <AboutUs />
            </div>
          </div>
        </div>
      ) : (
        <ProductList onHomeClick={() => setShowProducts(false)} />
      )}
    </div>
  );
}

export default App;
