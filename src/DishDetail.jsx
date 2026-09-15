import { useParams, Link } from "react-router-dom";
import { DISHES } from "./Menu.jsx";
import { useCartStore } from "./cart/cartStore.js";

function DishDetail() {
  const { id } = useParams();
  const addItem = useCartStore((s) => s.addItem);

  const dish = DISHES.find((d) => d.id === Number(id));

  if (!dish) {
    return (
      <div className="card" style={{ textAlign: "center", padding: "40px 20px" }}>
        <h2>Dish Not Found</h2>
        <p style={{ margin: "12px 0", color: "var(--text-muted)" }}>
          No dish exists with ID #{id}.
        </p>
        <Link to="/menu" className="btn-primary">
          &larr; Back to Menu
        </Link>
      </div>
    );
  }

  return (
    <div className="card" style={{ maxWidth: "600px", margin: "0 auto" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h2>{dish.name} {dish.spicy && "🌶️"}</h2>
        <span style={{ backgroundColor: "#334155", padding: "4px 10px", borderRadius: "12px", fontSize: "12px" }}>
          {dish.category}
        </span>
      </div>

      <p style={{ margin: "16px 0", color: "var(--text-muted)", fontSize: "15px" }}>
        {dish.desc}
      </p>

      <p className="price" style={{ fontSize: "24px", marginBottom: "20px" }}>
        {dish.price} ETB
      </p>

      <div style={{ display: "flex", gap: "12px" }}>
        <button
          type="button"
          className="btn-add"
          style={{ padding: "10px 20px", fontSize: "15px" }}
          onClick={() => addItem(dish)}
        >
          + Add to Cart
        </button>
        <Link to="/menu" className="btn-secondary" style={{ padding: "10px 20px", fontSize: "15px" }}>
          Back to Menu
        </Link>
      </div>
    </div>
  );
}

export default DishDetail;