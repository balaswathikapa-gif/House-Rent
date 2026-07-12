import { useEffect, useState } from "react";
import API from "../services/api";

function MyBookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    async function fetchBookings() {
      try {
        const res = await API.get("/bookings");

        console.log("Bookings:", res.data);

        setBookings(res.data);
      } catch (err) {
        console.log(err);
      }
    }

    fetchBookings();
  }, []);

  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "40px auto",
        textAlign: "center",
      }}
    >
      <h2>My Bookings</h2>

      {bookings.length === 0 ? (
        <h3>No Bookings Found</h3>
      ) : (
        bookings.map((booking) => (
          <div
            key={booking._id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "20px",
              margin: "20px 0",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              background: "#fff",
            }}
          >
            <h3>{booking.property}</h3>

            <p>
              <strong>Name:</strong> {booking.name}
            </p>

            <p>
              <strong>Email:</strong> {booking.email}
            </p>

            <p>
              <strong>Phone:</strong> {booking.phone}
            </p>

            <p>
              <strong>Status:</strong>{" "}
              <span style={{ color: "green" }}>
                {booking.status}
              </span>
            </p>
          </div>
        ))
      )}
    </div>
  );
}

export default MyBookings;