import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "./auth/useAuth.jsx";

function Login() {
  const [phone, setPhone] = useState("0912345678");
  const { login } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/menu";

  function handleSubmit(e) {
    e.preventDefault();
    login(phone);
    navigate(from, { replace: true });
  }

  return (
    <div className="card" style={{ maxWidth: "400px", margin: "0 auto" }}>
      <h2>Sign In with TeleBirr</h2>
      <p style={{ fontSize: "14px", color: "var(--text-muted)", margin: "8px 0 16px" }}>
        You must sign in to view the checkout page.
      </p>

      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="0912345678"
          style={{
            padding: "10px 14px",
            borderRadius: "6px",
            border: "1px solid #334155",
            backgroundColor: "#0f172a",
            color: "#fff",
            fontSize: "15px"
          }}
          required
        />
        <button type="submit" className="btn-primary" style={{ width: "100%", padding: "12px" }}>
          Sign In
        </button>
      </form>
    </div>
  );
}

export default Login;