import "./styles/theme.css";
import "./styles/global.css";
import { MyTextList } from "./components/MyTextList";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";
import { LuckyNumber } from "./components/etapa2/LuckyNumber";
import { ProductList } from "./components/etapa2/ProductList";
import { useState } from "react";

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
    newCart.splice(index, 1); // remove apenas o primeiro encontrado
    return newCart;
  });
  }
  return (
    <>
      <Header cart={cart}/>
      <ProductList addToCart={addToCart} removeFromCart={removeFromCart}/>
    </>
  );
}
