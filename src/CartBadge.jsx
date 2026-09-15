import { useCartStore } from "./cart/cartStore.js";

function CartBadge() {
  const count = useCartStore((s) =>
    (s.items || []).reduce((sum, item) => sum + item.qty, 0)
  );

  return <span>Cart ({count})</span>;
}

export default CartBadge;