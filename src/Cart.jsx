import { Link } from "react-router-dom";
import { useCartStore } from "./cart/cartStore.js";

function Cart() {
  const items = useCartStore((s) => s.items);
  const remove = useCartStore((s) => s.remove);
  const total = useCartStore((s) =>
    s.items.reduce((sum, item) => sum + item.price * item.qty, 0)
  );

  if (items.length === 0) {
    return (
      <div className="card" style={{ textAlign: "center", padding: "40px 20px" }}>
        <h2>Your Cart</h2>
        <p style={{ margin: "12px 0", color: "var(--text-muted)" }}>Your cart is empty.</p>
        <Link to="/menu" className="btn-primary">Browse Menu</Link>
      </div>
    );
  }

  return (
    <div className="card">
      <h2>Your Cart</h2>
      <ul className="cart-list">
        {items.map((item) => (
          <li key={item.id} className="cart-row">
            <span><strong>{item.name}</strong> &bull; {item.qty} &times; {item.price} ETB</span>
            <button type="button" className="btn-del" onClick={() => remove(item.id)} title="Remove">&times;</button>
          </li>
        ))}
      </ul>
      <h3 style={{ margin: "18px 0" }}>Total: {total} ETB</h3>
      <Link to="/checkout" className="btn-primary">
        Proceed to Checkout &rarr;
      </Link>
    </div>
  );
}

export default Cart;