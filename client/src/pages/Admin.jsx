import { useEffect, useState } from "react";
import API from "../services/api";

function Admin() {
  const [property, setProperty] = useState({
    title: "",
    description: "",
    location: "",
    price: "",
  });

  const [properties, setProperties] = useState([]);
  const [editingId, setEditingId] = useState(null);

  // Fetch all properties
  const fetchProperties = async () => {
    try {
      const res = await API.get("/properties");
      setProperties(res.data);
    } catch (error) {
      console.log(error);
    }
  };

 useEffect(() => {
  const loadProperties = async () => {
    try {
      const res = await API.get("/properties");
      setProperties(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  loadProperties();
}, []);
  // Handle input change
  const handleChange = (e) => {
    setProperty({
      ...property,
      [e.target.name]: e.target.value,
    });
  };

  // Add or Update Property
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editingId) {
        await API.put(`/properties/${editingId}`, property);

        alert("Property Updated Successfully");
      } else {
        await API.post("/properties", property);

        alert("Property Added Successfully");
      }

      setProperty({
        title: "",
        description: "",
        location: "",
        price: "",
      });

      setEditingId(null);

      fetchProperties();
    } catch (error) {
      console.log(error);
      alert("Operation Failed");
    }
  };

  // Delete Property
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this property?"
    );

    if (!confirmDelete) return;

    try {
      await API.delete(`/properties/${id}`);

      alert("Property Deleted Successfully");

      fetchProperties();
    } catch (error) {
      console.log(error);
      alert("Delete Failed");
    }
  };

  // Edit Property
  const handleEdit = (item) => {
    setProperty({
      title: item.title,
      description: item.description,
      location: item.location,
      price: item.price,
    });

    setEditingId(item._id);
  };

  return (
    <div
      style={{
        width: "700px",
        margin: "30px auto",
      }}
    >
      <h2 style={{ textAlign: "center" }}>
        Admin Panel
      </h2>

      <form
        onSubmit={handleSubmit}
        style={{
          border: "1px solid #ddd",
          borderRadius: "10px",
          padding: "20px",
          marginBottom: "30px",
        }}
      >
        <input
          type="text"
          name="title"
          placeholder="Property Title"
          value={property.title}
          onChange={handleChange}
          required
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "10px",
          }}
        />

        <textarea
          name="description"
          placeholder="Description"
          value={property.description}
          onChange={handleChange}
          required
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "10px",
          }}
        />

        <input
          type="text"
          name="location"
          placeholder="Location"
          value={property.location}
          onChange={handleChange}
          required
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "10px",
          }}
        />

        <input
          type="number"
          name="price"
          placeholder="Price"
          value={property.price}
          onChange={handleChange}
          required
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "10px",
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
            cursor: "pointer",
          }}
        >
          {editingId ? "Update Property" : "Add Property"}
        </button>
      </form>

      <h2>All Properties</h2>

      {properties.map((item) => (
        <div
          key={item._id}
          style={{
            border: "1px solid #ddd",
            borderRadius: "10px",
            padding: "15px",
            marginBottom: "15px",
          }}
        >
          <h3>{item.title}</h3>

          <p>{item.description}</p>

          <p>📍 {item.location}</p>

          <p>💰 ₹ {item.price}</p>

          <button
            onClick={() => handleEdit(item)}
            style={{
              background: "green",
              color: "white",
              border: "none",
              padding: "8px 15px",
              marginRight: "10px",
              cursor: "pointer",
            }}
          >
            Edit
          </button>

          <button
            onClick={() => handleDelete(item._id)}
            style={{
              background: "red",
              color: "white",
              border: "none",
              padding: "8px 15px",
              cursor: "pointer",
            }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default Admin;