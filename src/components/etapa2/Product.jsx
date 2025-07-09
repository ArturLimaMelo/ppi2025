import styles from "./Product.module.css";
import { useEffect, useState } from "react";

export function Product() {
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
  function handleClick(product) {
    if (products.length > 0) {
      setCarrinho([...carrinho, product]);
      total += product.price;
      setTotal(total);
      console.log(total);
    }
  }

  return (
    <div className={styles.container}>
       <h1>Schalk</h1>
       <div className= {styles.main}>
       {products.map((product) => (
        <div key={product.id} className={styles.productCard}>
          <img
            src={product.thumbnail}
            alt={product.title}
            className={styles.productImage}
          />
          <h2 className={styles.productTitle}>{product.title}</h2>
          <p className={styles.productDescription}>{product.description}</p>
          <p className={styles.productPrice}>${product.price}</p>
          <button className={styles.productButton} onClick={() => handleClick(product)}>Adicionar ao carrinho</button>
        </div>
        
        ))}
        </div>
        <h1>Carrinho:</h1>
        <div className={styles.carrinho}>
            {carrinho.length > 0 ? (
                carrinho.map((item, index) => (
                <div key={index} className={styles.carrinhoItem}>
                    <p>{item.title}</p>
                    <p>${item.price}</p>
                </div>
                ))
            ) : (
                <p>Seu carrinho está vazio.</p>
            )}
        </div>
        <p>Total: ${total}</p>
    </div>
  );
}
