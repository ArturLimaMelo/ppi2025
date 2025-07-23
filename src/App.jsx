import "./styles/theme.css";
import "./styles/global.css";
import { Header } from "./components/Header";
import { ProductList } from "./components/etapa2/ProductList";
import { useState } from "react";
import { Cart } from "./components/etapa2/Cart";
import { Routes, Route } from "react-router";

export default function App() {
  
  const [cart, setCart] = useState([]);

  function addToCart(product) {
    setCart((prevCart) => [...prevCart, product]);
  }

  function removeFromCart(product) {
    setCart((prevCart) => {
    const index = prevCart.findIndex((item) => item.id === product.id);
    if (index === -1) return prevCart;
    const newCart = [...prevCart];
    newCart.splice(index, 1);
    return newCart;
  });
  }
  return (
    <>
      <Header cart={cart}/>
      <Routes>
        <Route path="/" element={<ProductList addToCart={addToCart} removeFromCart={removeFromCart}/>}/>
        <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} addToCart={addToCart}/>} />
      </Routes>
      
    </>
  );
}
