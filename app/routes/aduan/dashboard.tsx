import React, { useEffect, useState } from "react";
import { Box, Card, CardContent, Typography, Button } from "@mui/material";
import { Link } from "react-router"; // Import Link from react-router

const Dashboard: React.FC = () => {
  const [aduanList, setAduanList] = useState([]); // State to store the fetched data
  const [loading, setLoading] = useState(true); // State to handle loading
  const [error, setError] = useState<string | null>(null); // State to handle errors

  useEffect(() => {
    // Fetch aduan data from the API
    fetch("http://localhost:3000/aduan")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => {
        setAduanList(data.data); // Update state with fetched data
        setLoading(false); // Set loading to false
      })
      .catch((err) => {
        setError(err.message); // Set error message
        setLoading(false); // Set loading to false
      });
  }, []);

  const handleDelete = async (id: number) => {
    try {
      const response = await fetch(`http://localhost:3000/aduan/delete/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete aduan");
      }

      // Remove the deleted aduan from the list
      setAduanList((prevList) => prevList.filter((aduan: any) => aduan.id !== id));
      alert("Aduan deleted successfully!");
    } catch (error) {
      console.error("Error deleting aduan:", error);
      alert("Failed to delete aduan. Please try again.");
    }
  };

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
        }}
      >
        <Typography variant="h6">Loading...</Typography>
      </Box>
    );
  }

  if (error) {
    return (
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
        }}
      >
        <Typography variant="h6" color="error">
          {error}
        </Typography>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh", // Center vertically
        padding: 3,
      }}
    >
      <Typography variant="h4" component="h1" gutterBottom>
        Dashboard
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Welcome to the dashboard! Below is the list of aduan:
      </Typography>
      <Box sx={{ width: "100%", maxWidth: 600 }}>
        {aduanList.map((aduan: any, index: number) => (
          <Card key={index} sx={{ marginBottom: 2 }}>
            <CardContent>
              <Typography variant="h6" component="div" gutterBottom>
                {aduan.nama_pengadu}
              </Typography>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                {aduan.catatan}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                Date: {aduan.date}
              </Typography>
              <Box sx={{ display: "flex", justifyContent: "flex-end", marginTop: 2 }}>
                <Button
                  variant="contained"
                  color="error"
                  size="small"
                  onClick={() => handleDelete(aduan.id)}
                >
                  Delete
                </Button>
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>
      <Button
        variant="contained"
        color="primary"
        sx={{ marginTop: 2 }}
      >
        <Link
          to="/aduan/borang-aduan"
          style={{
            textDecoration: "none",
            color: "inherit",
          }}
        >
          Add Aduan
        </Link>
      </Button>
    </Box>
  );
};

export default Dashboard;