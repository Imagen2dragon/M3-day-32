import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="card" style={{ textAlign: "center", padding: "40px 20px" }}>
      <h2>404 — Page Not Found</h2>
      <p style={{ margin: "14px 0", color: "var(--text-muted)" }}>
        The page you are looking for does not exist.
      </p>
      <Link to="/" className="btn-primary">
        Back to Home
      </Link>
    </div>
  );
}

export default NotFound;