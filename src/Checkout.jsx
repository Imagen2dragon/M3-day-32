import { useNavigate, Link } from "react-router-dom";
import { useCartStore } from "./cart/cartStore.js";
import { useAuth } from "./auth/useAuth.jsx";

function Checkout() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const total = useCartStore((s) =>
    (s.items || []).reduce((sum, item) => sum + item.price * item.qty, 0)
  );
  const itemCount = useCartStore((s) => (s.items || []).length);
  const clear = useCartStore((s) => s.clear);

  if (!user) {
    return (
      <div className="card" style={{ textAlign: "center", padding: "30px" }}>
        <h2>Please Sign In</h2>
        <p style={{ margin: "12px 0", color: "var(--muted)" }}>
          You must sign in with TeleBirr to complete your order.
        </p>
        <Link to="/login" className="btn-primary">
          Go to Sign In &rarr;
        </Link>
      </div>
    );
  }

  function handleCompleteOrder() {
    alert(`🎉 Order confirmed for ${total} ETB! Prompt sent to ${user.phone}`);
    clear();
    navigate("/", { replace: true });
  }

  return (
    <div className="card" style={{ maxWidth: "480px", margin: "0 auto" }}>
      <h2>TeleBirr Checkout</h2>
      <p style={{ margin: "10px 0" }}>
        Customer: <strong>{user.name}</strong> ({user.phone})
      </p>
      <p>Dish types in order: <strong>{itemCount}</strong></p>
      <h3 style={{ margin: "16px 0", color: "var(--red)" }}>
        Total to Pay: {total} ETB
      </h3>

      <button
        type="button"
        className="btn-primary"
        onClick={handleCompleteOrder}
        disabled={total === 0}
        style={{ width: "100%", padding: "12px" }}
      >
        {total > 0 ? "Confirm & Pay with TeleBirr" : "Your Cart is Empty"}
      </button>
    </div>
  );
}

export default Checkout;