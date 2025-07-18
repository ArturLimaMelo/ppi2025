import styles from "./Cart.module.css";
import { useState } from "react";

export function Cart({ cart, removeFromCart, addToCart }) {
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  return (
    <div className={styles.cart}>
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cart.map((product, index) => (
            <li key={index}>
              <div className={styles.cartItem}>
                <img src={product.thumbnail} alt={product.title} />
                <h3>{product.title}</h3>
                <button
                  onClick={() => {
                    if (qty > 0) {
                      setQty(qty - 1);
                      removeFromCart(product);
                      if (qty === 1) {
                        setAdded(false);
                      }
                    }
                  }}
                >
                  -
                </button>
                <p>{qty}</p>
                <button
                  onClick={() => {
                    setQty(qty + 1);
                    if (!added) {
                      setAdded(true);
                    }
                    addToCart(product);
                  }}
                >
                  +
                </button>
                <p>${(product.price * qty).toFixed(2)}</p>
                <button onClick={() => removeFromCart(product)}>Remove</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
