import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

function Profile() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token");

        if (!token) {
          navigate("/login");
          return;
        }

        const res = await API.get("/auth/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUser(res.data);
      } catch (error) {
        console.log(error);

        localStorage.removeItem("token");

        alert("Please Login First");

        navigate("/login");
      }
    };

    fetchProfile();
  }, [navigate]);

  if (!user) {
    return (
      <h2 style={{ textAlign: "center", marginTop: "50px" }}>
        Loading Profile...
      </h2>
    );
  }

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "40px auto",
        padding: "30px",
        border: "1px solid #ddd",
        borderRadius: "10px",
        background: "#fff",
        boxShadow: "0 2px 8px rgba(0,0,0,.1)",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <img
          src="/images/logo.png"
          alt="Profile"
          style={{
            width: "100px",
            height: "100px",
            borderRadius: "50%",
          }}
        />

        <h2>{user.name}</h2>

        <p style={{ color: "gray" }}>{user.role}</p>
      </div>

      <hr />

      <p>
        <strong>👤 Name :</strong> {user.name}
      </p>

      <p>
        <strong>📧 Email :</strong> {user.email}
      </p>

      <p>
        <strong>🛡 Role :</strong> {user.role}
      </p>

      <button
        onClick={() => alert("Edit Profile Coming Soon")}
        style={{
          width: "100%",
          padding: "12px",
          background: "#2c3e50",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          marginTop: "20px",
        }}
      >
        Edit Profile
      </button>
    </div>
  );
}

export default Profile;