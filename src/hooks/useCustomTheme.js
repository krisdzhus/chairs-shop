// Modules from Material UI
// For creating custom theme
import { createTheme } from "@mui/material";

// The hook
const useCustomTheme = () => {
  const theme = createTheme({
    // Setting theme color paletter
    palette: {
      primary: {
        main: "#232832",
      },
      secondary: {
        main: "#4caf50",
      },
      accent: {
        main: "#ff5252",
      },
      neutral: {
        main: "#fefeff",
      },
    },
    // Setting custom typography
    typography: {
      fontFamily: "'Poppins', sans-serif",
      fontWeightRegular: 400,
      fontWeightMedium: 500,
      fontWeightBold: 700,
    },
  });

  return { theme };
};

export default useCustomTheme;
