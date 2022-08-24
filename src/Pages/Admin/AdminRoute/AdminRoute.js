// React
import React from "react";

// Loading spinner from Material UI
import { CircularProgress } from "@mui/material";

// Modules from React Router
import { Redirect, Route } from "react-router";

// User authentication hook
import useAuth from "../../../hooks/useAuth";

// Main Admin Route Component
function AdminRoute({ children, ...rest }) {
  // Getting auth info
  const { user, admin, isLoading } = useAuth();

  // Show if the window is reloading
  if (isLoading) {
    return (
      <CircularProgress
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          color: "#4caf50",
        }}
      />
    );
  }
  // Render for general purpose
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.email && admin ? ( // Check if the user has email and if he is admin or not
          children
        ) : (
          <Redirect
            to={{
              pathname: "/dashboard",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

export default AdminRoute;
