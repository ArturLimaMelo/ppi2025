import styles from "./Product.module.css";
import { useState } from "react";

export function Product({ product, addToCart, removeFromCart }) {
  const [added, setAdded] = useState(false);
  const [qty, setQty] = useState(0);

  return (
    <div className={styles.productCard}>
      <img
        src={product.thumbnail}
        alt={product.title}
        className={styles.productImage}
      />
      <h2 className={styles.productTitle}>{product.title}</h2>
      <p className={styles.productDescription}>{product.description}</p>
      <div className={styles.productQty}>
        { qty === 0 ? <p className={styles.productPrice}>${product.price}</p> : <p className={styles.productPrice}>${(product.price * qty).toFixed(2)}</p> }
        {added && (
          <div className={styles.productQty}>
            <button onClick={() => {
                if (qty > 0) {
                    setQty(qty - 1);
                    removeFromCart(product);
                    if (qty === 1) {
                    setAdded(false);
                    }
                }
            }}>-</button>
            <p>{qty}</p>
            <button onClick={() => {
                setQty(qty + 1);
                if (!added) {
                    setAdded(true);
                }
                addToCart(product);
            }}>+</button>
          </div>
        )}
      </div>
      <button
        className={styles.productButton}
        onClick={() => {
          addToCart(product);
          setAdded(true);
          setQty(qty + 1);
        }}
      >
        ADD TO CART
      </button>
    </div>
  );
}