import styles from "./ProductList.module.css";
import { useEffect, useState } from "react";
import { Product } from "./Product.jsx";

export function ProductList({ addToCart, removeFromCart }) {
  var category =  "mens-shirts";
  var limit = 12;
  var apiUrl = `https://dummyjson.com/products/category/${category}?limit=${limit}&select=id,thumbnail,title,price,description`;
  const [products, setProducts] = useState([]);
  var [carrinho, setCarrinho] = useState([]);
  var [total, setTotal] = useState(0);
  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        setProducts(data.products);
      } catch (error) {
      } finally {
      }
    }
    setTimeout(() => {
      fetchProducts();
    }, 2000);
  }, []);
  

  return (
    <div className={styles.container}>
       <div className= {styles.main}>
       {products.map((product) => (
      <Product key={product.id} product={product} addToCart={addToCart} removeFromCart={removeFromCart}/>
        
        ))}
        </div>
    </div>
  );
}