import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

function Properties() {
  const [properties, setProperties] = useState([]);
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  const houseImages = [
    "/images/house1.jpg",
    "/images/house2.jpg",
    "/images/house3.jpg",
    "/images/house4.jpg",
  ];

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const res = await API.get("/properties");
        setProperties(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProperties();
  }, []);

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "40px",
        paddingBottom: "30px",
      }}
    >
      <h2>Available Properties</h2>

      <h3>Total Properties: {properties.length}</h3>

      <input
        type="text"
        placeholder="Search by Title or Location..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: "320px",
          padding: "10px",
          marginBottom: "20px",
          borderRadius: "5px",
          border: "1px solid #ccc",
        }}
      />

      {properties
        .filter(
          (property) =>
            property.title.toLowerCase().includes(search.toLowerCase()) ||
            property.location.toLowerCase().includes(search.toLowerCase())
        )
        .map((property, index) => (
          <div
            key={property._id}
            style={{
              width: "340px",
              margin: "20px auto",
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "20px",
              background: "#fff",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            }}
          >
            <img
              src={houseImages[index % houseImages.length]}
              alt={property.title}
              style={{
                width: "100%",
                height: "220px",
                objectFit: "cover",
                borderRadius: "10px",
                marginBottom: "15px",
              }}
            />

            <h3>{property.title}</h3>

            <p>{property.description}</p>

            <p>📍 {property.location}</p>

            <p>💰 ₹{property.price} / month</p>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "15px",
              }}
            >
              <button
                onClick={() =>
                  navigate("/property-details", {
                    state: {
                      property,
                      image: houseImages[index % houseImages.length],
                    },
                  })
                }
                style={{
                  padding: "10px 15px",
                  background: "#27ae60",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                View Details
              </button>

              <button
                onClick={() =>
                  navigate("/booking", {
                    state: {
                      property: property.title,
                    },
                  })
                }
                style={{
                  padding: "10px 15px",
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
          </div>
        ))}
    </div>
  );
}

export default Properties;