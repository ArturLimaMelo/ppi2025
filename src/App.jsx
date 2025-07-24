import "./styles/theme.css";
import "./styles/global.css";
import { Header } from "./components/Header";
import { Routes, Route } from "react-router";
import { CartProvider } from "./service/CartContext";

export default function App() {
  return (

    <>
    <CartProvider>
      <Header/>
      <Routes>
        <Route path="/" element={<ProductList/>}/>
        <Route path="/cart" element={<Cart/>} />
      </Routes>
    </CartProvider>
    </>
  );
  }
  

