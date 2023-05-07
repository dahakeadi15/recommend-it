import React from "react";
import Navbar from "../components/Navbar";
import {
  Container,
  CssBaseline,
  ThemeProvider,
  Typography,
} from "@mui/material";
import darkTheme from "../assets/themes/theme";

export default function Home() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Navbar />
      <Container maxWidth="xxl">
        <Typography variant="h2">Home</Typography>
      </Container>
    </ThemeProvider>
  );
}
