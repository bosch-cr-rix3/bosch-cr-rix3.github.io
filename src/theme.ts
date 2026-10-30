import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#b84212",
      contrastText: "#ffffff",
    },
    background: {
      default: "#f5f4f1",
      paper: "#ffffff",
    },
    text: {
      primary: "#1b1a18",
      secondary: "#625f5b",
    },
    divider: "#dedbd5",
  },
  shape: {
    borderRadius: 10,
  },
  typography: {
    fontFamily: '"DM Sans", "Segoe UI", sans-serif',
    h2: {
      fontSize: "1.8rem",
      fontWeight: 400,
    },
    button: {
      textTransform: "none",
      fontWeight: 600,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          minWidth: 320,
          scrollBehavior: "smooth",
        },
        body: {
          minWidth: 320,
          minHeight: "100vh",
          backgroundImage:
            "linear-gradient(135deg, #ffffff 0%, #fcf8f2 46%, #f0e2d6 100%)",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 999,
          textTransform: "none",
          fontWeight: 600,
        },
        contained: {
          color: "#ffffff",
          transition: "box-shadow 160ms ease, background-color 160ms ease",
          "&:hover, &.MuiButton-disableElevation:hover": {
            backgroundColor: "#9f3510",
            boxShadow: "0 4px 12px rgba(27, 26, 24, 0.18)",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 30,
          transition: "border-color 160ms ease, box-shadow 160ms ease",
          "&:hover": {
            boxShadow: "0 5px 16px rgba(27, 26, 24, 0.12)",
          },
          "&.MuiPaper-outlined:hover": {
            boxShadow: "0 5px 16px rgba(27, 26, 24, 0.12)",
          },
        },
      },
    },
    MuiToggleButton: {
      styleOverrides: {
        root: {
          borderRadius: "999px !important",
          textTransform: "none",
        },
      },
    },
  },
});

export default theme;