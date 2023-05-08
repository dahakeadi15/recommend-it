import { Container, CssBaseline, Grid, ThemeProvider } from "@mui/material";
import Navbar from "../components/Navbar";
import React from "react";
import darkTheme from "../assets/themes/theme";
import data from "../temp-data";
import MovieCard from "../components/MovieCard";

export default function Movies() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Navbar />
      <Container maxWidth="xxl">
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          // alignItems="center"
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {data.movies.map((movie) => (
            <Grid
              item
              sm={6}
              md={4}
              xl={3}
              container
              justifyContent="center"
              key={movie.id}
            >
              <MovieCard
                title={movie.title}
                imgUrl={
                  "https://image.tmdb.org/t/p/original" + movie.backdrop_path
                }
                description={movie.overview}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </ThemeProvider>
  );
}
