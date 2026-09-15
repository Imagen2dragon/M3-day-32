import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="card" style={{ textAlign: "center", padding: "40px 20px" }}>
      <h2>Welcome to Addis Eats</h2>
      <p style={{ margin: "14px 0", color: "var(--text-muted)" }}>
        Authentic Ethiopian cuisine delivered fresh across Addis Ababa.
      </p>
      <Link to="/menu" className="btn-primary" style={{ display: "inline-block", marginTop: "12px" }}>
        Explore Full Menu &rarr;
      </Link>
    </div>
  );
}

export default Home;