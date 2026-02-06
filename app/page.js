"use client";

import { Box, Button, Container, Typography } from "@mui/material";

export default function Home() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        background:
          "linear-gradient(135deg, #1976d2 0%, #42a5f5 100%)",
      }}
    >
      <Container maxWidth="md" sx={{ textAlign: "center", color: "#fff" }}>
        <Typography variant="h2" fontWeight="bold" gutterBottom>
          Welcome to Anish Krishnan
        </Typography>

        <Typography variant="h6" sx={{ mb: 4 }}>
          This is a simple landing page built using Next.js and MUI
        </Typography>

        <Button
          variant="contained"
          size="large"
          sx={{
            backgroundColor: "#fff",
            color: "#1976d2",
            "&:hover": {
              backgroundColor: "#e3f2fd",
            },
          }}
        >
          Get Started
        </Button>
      </Container>
    </Box>
  );
}
