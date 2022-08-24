// React
import React from "react";

// Loading spinner
import { CircularProgress } from "@mui/material";

// From React Router
import { Redirect, Route } from "react-router";

// Authenticating hook
import useAuth from "../../hooks/useAuth";

// Main Private Route Component
function PrivateRoute({ children, ...rest }) {
  // Getting data from the hook
  const { user, isLoading } = useAuth();

  // Check the user state change and show
  // the loader for holding the state

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

  // This will render for every cases
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;
