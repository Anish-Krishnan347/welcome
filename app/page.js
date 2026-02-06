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
           <Typography variant="subtitle2" fontWeight="bold" gutterBottom>
          Welcome back
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
          CLICK ME
        </Button>
      </Container>
    </Box>
  );
}
