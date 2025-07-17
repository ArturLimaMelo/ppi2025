import styles from "./ProductList.module.css";
import { useEffect, useState } from "react";

export function Product({ product, handleClick}) {
  var category = "mens-shirts";
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
      <div key={product.id} className={styles.productCard}>
        <img
          src={product.thumbnail}
          alt={product.title}
          className={styles.productImage}
        />
        <h2 className={styles.productTitle}>{product.title}</h2>
        <p className={styles.productDescription}>{product.description}</p>
        <p className={styles.productPrice}>${product.price}</p>
        <button
          className={styles.productButton}
          onClick={() => handleClick(product)}
        >
          Adicionar ao carrinho
        </button>
      </div>
    );
  }

