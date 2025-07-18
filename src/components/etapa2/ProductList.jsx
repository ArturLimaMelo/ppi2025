import styles from "./ProductList.module.css";
import { useEffect, useState } from "react";
import { Product } from "./Product.jsx";
import { CircularProgress } from "@mui/material";

export function ProductList({ addToCart, removeFromCart }) {
  var category =  "mens-shirts";
  var limit = 12;
  var apiUrl = `https://dummyjson.com/products/category/${category}?limit=${limit}&select=id,thumbnail,title,price,description`;
  const [products, setProducts] = useState([]);
  var [carrinho, setCarrinho] = useState([]);
  var [total, setTotal] = useState(0);
   const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        setProducts(data.products);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    setTimeout(() => {
      fetchProducts();
    }, 100);
  }, []);
  

  return (
    <div className={styles.container}>
       <div className= {styles.main}>
       {products.map((product) => (
      <Product key={product.id} product={product} addToCart={addToCart} removeFromCart={removeFromCart}/>
        
        ))}
        </div>
         {loading && (
        <div>
          <CircularProgress
            // size="sm"
            thickness={5}
            style={{ margin: "2rem auto", display: "block" }}
            sx={{
              color: "#001111",
            }}
          />
          <p>Loading products...</p>
        </div>
      )}
      {error && <p>Error loading products: {error.message}</p>}
    </div>
  );
}