
import styles from "./Header.module.css";
import { Github, Instagram, Phone, BookOpenCheck } from "lucide-react";
export function Header({ cart }) {
  // Desestruturação de props
  return (
    <header className={styles.header1}>
      <h1>Schalk</h1>
      <div className={styles.cart}>
        <p>{cart.length} products</p>
        <p>Total $: {cart.reduce((total, product) => total + product.price, 0).toFixed(2)}</p>
      </div>
    </header>
  );
}
