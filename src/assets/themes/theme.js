import { createTheme, responsiveFontSizes } from "@mui/material";

const darkTheme = responsiveFontSizes(
  createTheme({
    spacing: 4,
    typography: {
      fontFamily: ["Roboto", "Oxygen", "Ubuntu"].join(","),
      h1: {
        fontSize: "5rem",
        fontFamily: "Roboto Slab",
        fontWeight: 900,
      },
      h2: {
        fontSize: "3.5rem",
        fontFamily: "Roboto Slab",
        fontWeight: 400,
      },
      h3: {
        fontSize: "2.5rem",
        fontFamily: "Roboto",
        fontWeight: 400,
      },
    },
    palette: {
      background: {
        default: "#252A34",
      },
      primary: {
        main: "#15171D",
      },
      secondary: {
        main: "#4A5468",
        icons: "#EAEAEA",
      },
      text: {
        primary: "#EAEAEA",
        secondary: "#08D9D6",
        highlight: "#FF2E63",
      },
    },
  })
);

export default darkTheme;
