import React from "react";
import { Box, Card, CardContent, Typography, Button } from "@mui/material";
import { Link } from "react-router"; // Import Link from react-router
// import Dashboard from "./dashboard";
import BorangAduan from "./borangAduan";
// Sample data for the list of aduan
const aduanList = [
  {
    title: "Broken Streetlight",
    description: "The streetlight on Main Street has been broken for weeks.",
    date: "2026-05-10",
  },
  {
    title: "Pothole on Road",
    description: "There is a large pothole on Elm Street causing traffic issues.",
    date: "2026-05-11",
  },
  {
    title: "Water Leakage",
    description: "Water leakage near the park is wasting a lot of water.",
    date: "2026-05-12",
  },
];

const Dashboard: React.FC = () => {
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
        {aduanList.map((aduan, index) => (
          <Card key={index} sx={{ marginBottom: 2 }}>
            <CardContent>
              <Typography variant="h6" component="div" gutterBottom>
                {aduan.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                {aduan.description}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                Date: {aduan.date}
              </Typography>
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