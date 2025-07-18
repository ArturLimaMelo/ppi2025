import styles from "./Cart.module.css";

export function Cart({ cart }) {
  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cart.map((product, index) => (
            <li key={index}>
              <img src={product.thumbnail} alt={product.title} />
              <h3>{product.title}</h3>
              <p>${product.price.toFixed(2)}</p>
              <button onClick={() => removeFromCart(product)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}