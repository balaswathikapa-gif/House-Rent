import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        textAlign: "center",
        padding: "40px 20px",
      }}
    >
      <img
        src="/images/house1.jpg"
        alt="House"
        style={{
          width: "90%",
          maxWidth: "900px",
          height: "450px",
          objectFit: "cover",
          borderRadius: "15px",
          boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
        }}
      />

      <h1
        style={{
          marginTop: "30px",
          color: "#2c3e50",
          fontSize: "42px",
        }}
      >
        Welcome to House Rent Management System
      </h1>

      <p
        style={{
          fontSize: "20px",
          color: "#555",
          width: "80%",
          margin: "20px auto",
          lineHeight: "32px",
        }}
      >
        Find your dream home with ease. Browse verified rental properties,
        explore complete details, and book your favorite house in just a few
        clicks.
      </p>

      <button
        onClick={() => navigate("/properties")}
        style={{
          padding: "15px 35px",
          fontSize: "18px",
          background: "#2c3e50",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          marginTop: "15px",
        }}
      >
        Explore Properties
      </button>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          flexWrap: "wrap",
          marginTop: "60px",
        }}
      >
        <div
          style={{
            width: "250px",
            padding: "20px",
            border: "1px solid #ddd",
            borderRadius: "10px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          }}
        >
          <h2>🏡 Verified Homes</h2>
          <p>Browse quality rental properties with complete information.</p>
        </div>

        <div
          style={{
            width: "250px",
            padding: "20px",
            border: "1px solid #ddd",
            borderRadius: "10px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          }}
        >
          <h2>💰 Affordable Prices</h2>
          <p>Find houses that match your budget and lifestyle.</p>
        </div>

        <div
          style={{
            width: "250px",
            padding: "20px",
            border: "1px solid #ddd",
            borderRadius: "10px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          }}
        >
          <h2>📞 Easy Booking</h2>
          <p>Book your favorite property quickly with a simple booking form.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;