import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    alert("Logged Out Successfully!");
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <Link
        to={token ? "/profile" : "/login"}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          textDecoration: "none",
        }}
      >
        <img
          src="/images/logo.png"
          alt="Logo"
          style={{
            width: "45px",
            height: "45px",
            borderRadius: "50%",
          }}
        />

        <h2
          style={{
            margin: 0,
            color: "white",
          }}
        >
          House Rent
        </h2>
      </Link>

      <div
        className="nav-links"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "15px",
        }}
      >
        {token ? (
          <>
            <Link to="/">Home</Link>
            <Link to="/properties">Properties</Link>
            <Link to="/my-bookings">My Bookings</Link>
            <Link to="/admin">Admin</Link>

            <button
              onClick={handleLogout}
              style={{
                padding: "8px 15px",
                background: "#e74c3c",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;