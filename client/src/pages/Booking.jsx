import { useState } from "react";
import { useLocation } from "react-router-dom";
import API from "../services/api";

function Booking() {
  const location = useLocation();

  const propertyName = location.state?.property || "No Property Selected";

  const [booking, setBooking] = useState({
    property: propertyName,
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    setBooking({
      ...booking,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/bookings", booking);

      alert("Booking Submitted Successfully!");

      console.log(res.data);

      setBooking({
        property: propertyName,
        name: "",
        email: "",
        phone: "",
      });
    } catch (error) {
      console.log(error);
      alert("Booking Failed");
    }
  };

  return (
    <div
      style={{
        width: "400px",
        margin: "40px auto",
        padding: "25px",
        border: "1px solid #ddd",
        borderRadius: "10px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      }}
    >
      <h2 style={{ textAlign: "center" }}>Book Property</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="property"
          value={booking.property}
          readOnly
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "15px",
            background: "#f2f2f2",
          }}
        />

        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={booking.name}
          onChange={handleChange}
          required
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "15px",
          }}
        />

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={booking.email}
          onChange={handleChange}
          required
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "15px",
          }}
        />

        <input
          type="text"
          name="phone"
          placeholder="Enter Phone Number"
          value={booking.phone}
          onChange={handleChange}
          required
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "15px",
          }}
        />

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            background: "#2c3e50",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Confirm Booking
        </button>
      </form>
    </div>
  );
}

export default Booking;