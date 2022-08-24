// Modules from Material UI
import { Avatar, Container, Typography } from "@mui/material";
import { Box } from "@mui/system";

// React
import React from "react";

// Hooks for getting auth info
import useAuth from "../../hooks/useAuth";

// Main Dashboard Home Component
const DashboardHome = () => {
  // Getting user info from the hook
  const { user } = useAuth();
  return (
    <Container>
      {/* Component body */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 2,
        }}
      >
        <Avatar>{user.displayName?.slice(0, 1)}</Avatar>
        <Typography variant="h4">
          Welcome{" "}
          <Typography
            sx={{ color: "secondary.main" }}
            variant="h4"
            component="span"
          >
            {user.displayName}
          </Typography>
        </Typography>
      </Box>
    </Container>
  );
};

export default DashboardHome;
