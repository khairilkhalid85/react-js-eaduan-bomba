import React, { useState } from "react";
import { useNavigate } from "react-router"; // Import useNavigate for navigation

const BorangAduan: React.FC = () => {
  const [formData, setFormData] = useState({
    nama_pengadu: "",
    email: "",
    kategori_aduan: "",
    catatan: "",
  });

  const navigate = useNavigate(); // Initialize the navigate function

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/aduan/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData), // Send form data as JSON
      });

      if (!response.ok) {
        throw new Error("Failed to submit aduan");
      }

      alert("Report submitted successfully!");
      setFormData({ nama_pengadu: "", email: "", kategori_aduan: "", catatan: "" }); // Reset form

      // Redirect to /aduan/dashboard after successful submission
      navigate("/aduan/dashboard");
    } catch (error) {
      console.error("Error submitting aduan:", error);
      alert("Failed to submit aduan. Please try again.");
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
      <h1>Buat Aduan</h1>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="nama_pengadu" style={{ display: "block", marginBottom: "5px" }}>
            Nama Pengadu:
          </label>
          <input
            type="text"
            id="nama_pengadu"
            name="nama_pengadu"
            value={formData.nama_pengadu}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
            required
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="email" style={{ display: "block", marginBottom: "5px" }}>
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
            required
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="kategori_aduan" style={{ display: "block", marginBottom: "5px" }}>
            Kategori Aduan:
          </label>
          <textarea
            id="kategori_aduan"
            name="kategori_aduan"
            value={formData.kategori_aduan}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
            rows={3}
            required
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="catatan" style={{ display: "block", marginBottom: "5px" }}>
            Catatan:
          </label>
          <textarea
            id="catatan"
            name="catatan"
            value={formData.catatan}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
            rows={5}
            required
          />
        </div>
        <button
          type="submit"
          style={{
            padding: "10px 20px",
            backgroundColor: "#007BFF",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default BorangAduan;