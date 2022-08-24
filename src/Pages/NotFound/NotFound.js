// Modules from Material UI
import { Button, Container, Typography } from "@mui/material";
import { Box } from "@mui/system";

// React
import React from "react";

// Hooks from React Router
import { useHistory } from "react-router";

// Main Not Found Component
const NotFound = () => {
  // Calling the hook
  const history = useHistory();

  return (
    <Container>
      {/* Contents */}
      <Box sx={{ textAlign: "center", mt: 10 }}>
        <Typography
          sx={{ fontWeight: 700, color: "secondary.main" }}
          variant="h1"
        >
          404
        </Typography>
        <Typography variant="h4">Page not found</Typography>
        <Typography mt={3} color="text.secondary" variant="subtitle1">
          Let me guess, you did something with the url... 🤔
        </Typography>
        {/* For going back to home */}
        <Button
          onClick={() => history.push("/")}
          sx={{ mt: 2 }}
          variant="outlined"
          color="secondary"
        >
          Take me where I belong
        </Button>
      </Box>
    </Container>
  );
};

export default NotFound;
