import { useSearchParams, Link } from "react-router-dom";
import { useCartStore } from "./cart/cartStore.js";

export const DISHES = [
  { id: 1, name: "Doro Wat", price: 240, category: "Main", spicy: true },
  { id: 2, name: "Shiro Wat", price: 120, category: "Vegetarian", spicy: false },
  { id: 3, name: "Beef Tibs", price: 280, category: "Main", spicy: true },
  { id: 4, name: "Veggie Beyaynetu", price: 180, category: "Vegetarian", spicy: false },
  { id: 5, name: "Injera Basket", price: 50, category: "Sides", spicy: false }
];

function Menu() {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentCategory = searchParams.get("category") ?? "All";

  const addItem = useCartStore((s) => s.addItem);

  const categories = ["All", "Main", "Vegetarian", "Sides"];

  const filtered = currentCategory === "All"
    ? DISHES
    : DISHES.filter((d) => d.category === currentCategory);

  return (
    <div>
      <div className="chip-bar">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            className={currentCategory === cat ? "chip on" : "chip"}
            onClick={() => setSearchParams(cat === "All" ? {} : { category: cat })}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid">
        {filtered.map((dish) => (
          <div key={dish.id} className="dish-card">
            <div>
              <h3>{dish.name} {dish.spicy && "🌶️"}</h3>
              <p className="price">{dish.price} ETB</p>
            </div>
            <div className="card-bottom">
              <Link to={`/menu/${dish.id}`} className="link-detail">Details</Link>
              <button
                type="button"
                className="btn-add"
                onClick={() => addItem(dish)}
              >
                + Add
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;