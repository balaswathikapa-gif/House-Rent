import { useLocation, useNavigate } from "react-router-dom";

function PropertyDetails() {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h2>No Property Selected</h2>
      </div>
    );
  }

  const { property, image } = state;

  return (
    <div
      style={{
        width: "500px",
        margin: "40px auto",
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "20px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      }}
    >
      <img
        src={image}
        alt={property.title}
        style={{
          width: "100%",
          height: "300px",
          objectFit: "cover",
          borderRadius: "10px",
        }}
      />

      <h2>{property.title}</h2>

      <p>{property.description}</p>

      <p>
        <strong>Location:</strong> {property.location}
      </p>

      <p>
        <strong>Price:</strong> ₹{property.price}/month
      </p>

      <button
        onClick={() =>
          navigate("/booking", {
            state: {
              property: property.title,
            },
          })
        }
        style={{
          padding: "10px 20px",
          background: "#2c3e50",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Book Now
      </button>
    </div>
  );
}

export default PropertyDetails;