import { NavLink, Outlet } from "react-router-dom";
import CartBadge from "./CartBadge.jsx";
import { useAuth } from "./auth/useAuth.jsx";

function Layout() {
  const { user, logout } = useAuth();

  return (
    <div className="app-container">
      <header className="site-header">
        <div className="brand">
          <NavLink to="/" className="brand-title">Addis Eats</NavLink>
        </div>

        <nav className="site-nav">
          <NavLink to="/" end className={({ isActive }) => (isActive ? "on" : "")}>
            Home
          </NavLink>
          <NavLink to="/menu" className={({ isActive }) => (isActive ? "on" : "")}>
            Menu
          </NavLink>
          <NavLink to="/cart" className={({ isActive }) => (isActive ? "on" : "")}>
            <CartBadge />
          </NavLink>
          <NavLink to="/checkout" className={({ isActive }) => (isActive ? "on" : "")}>
            Checkout
          </NavLink>

          {user ? (
            <button type="button" className="btn-auth" onClick={logout}>
              Sign Out ({user.phone.slice(-4)})
            </button>
          ) : (
            <NavLink to="/login" className={({ isActive }) => (isActive ? "on" : "")}>
              Sign In
            </NavLink>
          )}
        </nav>
      </header>

      <main className="main-content">
        <Outlet />
      </main>

      <footer className="site-footer">
        <p>&copy; 2026 Addis Eats &bull; Bole, Addis Ababa</p>
      </footer>
    </div>
  );
}

export default Layout;