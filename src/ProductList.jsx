import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./CartSlice";
import CartItem from "./CartItem";
import "./ProductList.css";

function ProductList({ onHomeClick }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const [showCart, setShowCart] = useState(false);
  const [addedItems, setAddedItems] = useState([]);

  const plantCategories = [
    {
      category: "Air Purifying Plants",
      plants: [
        { id: 1, name: "Snake Plant", price: 15, image: "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg" },
        { id: 2, name: "Spider Plant", price: 12, image: "https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3530413_1280.jpg" },
        { id: 3, name: "Peace Lily", price: 18, image: "https://cdn.pixabay.com/photo/2019/06/12/14/14/peace-lilies-4269365_1280.jpg" },
        { id: 4, name: "Boston Fern", price: 20, image: "https://cdn.pixabay.com/photo/2020/04/30/19/52/boston-fern-5114414_1280.jpg" },
        { id: 5, name: "Rubber Plant", price: 17, image: "https://cdn.pixabay.com/photo/2020/02/15/11/49/flower-4850729_1280.jpg" },
        { id: 6, name: "Aloe Vera", price: 14, image: "https://cdn.pixabay.com/photo/2018/04/02/07/42/leaf-3283175_1280.jpg" }
      ]
    },
    {
      category: "Aromatic Plants",
      plants: [
        { id: 7, name: "Lavender", price: 20, image: "https://images.unsplash.com/photo-1611909023032-2d6b3134ecba" },
        { id: 8, name: "Jasmine", price: 18, image: "https://images.unsplash.com/photo-1592729645009-b96d1e63d14b" },
        { id: 9, name: "Rosemary", price: 15, image: "https://cdn.pixabay.com/photo/2019/10/11/07/12/rosemary-4541241_1280.jpg" },
        { id: 10, name: "Mint", price: 12, image: "https://cdn.pixabay.com/photo/2016/01/07/18/16/mint-1126282_1280.jpg" },
        { id: 11, name: "Lemon Balm", price: 14, image: "https://cdn.pixabay.com/photo/2019/09/16/07/41/balm-4480134_1280.jpg" },
        { id: 12, name: "Hyacinth", price: 22, image: "https://cdn.pixabay.com/photo/2019/04/07/20/20/hyacinth-4110726_1280.jpg" }
      ]
    },
    {
      category: "Low Maintenance Plants",
      plants: [
        { id: 13, name: "ZZ Plant", price: 25, image: "https://images.unsplash.com/photo-1632207691143-643e2a9a9361" },
        { id: 14, name: "Pothos", price: 10, image: "https://cdn.pixabay.com/photo/2018/11/15/10/32/plants-3816945_1280.jpg" },
        { id: 15, name: "Cast Iron Plant", price: 20, image: "https://cdn.pixabay.com/photo/2017/02/16/18/04/cast-iron-plant-2072008_1280.jpg" },
        { id: 16, name: "Succulent", price: 18, image: "https://cdn.pixabay.com/photo/2016/11/21/16/05/cacti-1846147_1280.jpg" },
        { id: 17, name: "Aglaonema", price: 22, image: "https://cdn.pixabay.com/photo/2014/10/10/04/27/aglaonema-482915_1280.jpg" },
        { id: 18, name: "Snake Plant", price: 15, image: "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg" }
      ]
    }
  ];

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedItems([...addedItems, plant.id]);
  };

  return (
    <div>
      {/* NAVBAR */}
      <div className="navbar">
        <h2 onClick={onHomeClick}>Paradise Nursery</h2>
        <div className="nav-links">
          <button onClick={() => setShowCart(false)}>Plants</button>
          <button onClick={() => setShowCart(true)}>Cart ({totalItems})</button>
        </div>
      </div>

      {!showCart ? (
        <div>
          {plantCategories.map((category) => (
            <div key={category.category}>
              <h2>{category.category}</h2>
              <div className="product-grid">
                {category.plants.map((plant) => (
                  <div key={plant.id} className="product-card">
                    <img src={plant.image} alt={plant.name} />
                    <h3>{plant.name}</h3>
                    <p>${plant.price}</p>
                    <button
                      onClick={() => handleAddToCart(plant)}
                      disabled={addedItems.includes(plant.id)}
                    >
                      {addedItems.includes(plant.id) ? "Added" : "Add to Cart"}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <CartItem onContinueShopping={() => setShowCart(false)} />
      )}
    </div>
  );
}

export default ProductList;
