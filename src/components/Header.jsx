
import styles from "./Header.module.css";
import { ShoppingBasket } from "lucide-react";
import { Link } from "react-router";


export function Header({ cart }) {
  // Desestruturação de props
  return (
    <header className={styles.header1}>
      <Link to="/" className={styles.title}>Schalk</Link>
      <div className={styles.cart}>
        <Link to="/cart"><ShoppingBasket /></Link>
        { cart.length === 0 ? <p></p> : <p>{cart.length} products</p>}
        <p>Total $: {cart.reduce((total, product) => total + product.price, 0).toFixed(2)}</p>
      </div>
    </header>
  );
}
