// Modules from Material UI
import {
  Button,
  CircularProgress,
  Container,
  FormHelperText,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";

// React and necessary hook
import React, { useState } from "react";

// Hooks from React Router
import { useHistory, useLocation } from "react-router-dom";

// Login image
import holderImage from "../../assets/login-pc.svg";

// Hooks for managing auth
import useAuth from "../../hooks/useAuth";

// Main Login Component
const Login = () => {
  // Getting auth related data
  const { authError, logInUser, isLoading } = useAuth();

  // Storing login data in the state
  const [loginData, setLoginData] = useState({});

  // Using hooks
  const history = useHistory();
  const location = useLocation();

  // Getting user info
  const handleUserInput = (e) => {
    const field = e.target.name;
    const value = e.target.value;

    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };

  // Function for handling user login
  const handleSubmit = (e) => {
    e.preventDefault();

    logInUser(loginData.email, loginData.password, location, history);
  };

  return (
    <Container sx={{ mt: 10 }}>
      <Box>
        {/* Section header */}
        <Typography
          variant="h4"
          component="h2"
          sx={{ mb: 4, color: "secondary.main", fontWeight: 700 }}
        >
          Log In
        </Typography>
        <Grid container columns={{ xs: 1, md: 12 }} spacing={{ xs: 4, md: 6 }}>
          <Grid item xs={1} md={5}>
            {isLoading ? (
              // Show when loading the auth state
              <CircularProgress
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "20%",
                  color: "#4caf50",
                }}
              />
            ) : (
              <>
                <form onSubmit={handleSubmit}>
                  <Stack direction="column" spacing={3}>
                    {/* User email */}
                    <TextField
                      type="email"
                      label="Email"
                      variant="outlined"
                      name="email"
                      required
                      onBlur={handleUserInput}
                    />
                    {/* User password */}
                    <TextField
                      type="password"
                      label="Password"
                      variant="outlined"
                      name="password"
                      required
                      onBlur={handleUserInput}
                    />
                  </Stack>
                  {/* Show when firebsae throw error */}
                  {authError && (
                    <FormHelperText sx={{ color: "red" }}>
                      {authError}
                    </FormHelperText>
                  )}
                  <Button
                    type="submit"
                    sx={{ mt: 3, width: "50%" }}
                    variant="contained"
                    color="secondary"
                  >
                    Sign In
                  </Button>
                </form>
                <Box sx={{ mt: 1 }}>
                  {/* For registering */}
                  <Typography variant="body1">
                    Don't have an account?
                    <Typography variant="body1" component="span">
                      <Button
                        onClick={() => history.push("/register")}
                        variant="text"
                        color="secondary"
                      >
                        Join Us
                      </Button>
                    </Typography>
                  </Typography>
                </Box>
                {/* Home backlink */}
                <Button
                  onClick={() => history.push("/")}
                  type="submit"
                  sx={{ mt: 1, width: "50%" }}
                  variant="outlined"
                  color="secondary"
                >
                  Back to home
                </Button>
              </>
            )}
          </Grid>
          {/* Login Image */}
          <Grid item xs={1} md={6}>
            <img
              style={{ width: "60%", display: "block", margin: "0 auto" }}
              src={holderImage}
              alt="Login PC"
            />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Login;
