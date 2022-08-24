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

// Hook from React Router
import { useHistory } from "react-router-dom";

// Register Image
import holderImage from "../../assets/login-pc.svg";

// Hooks for auth
import useAuth from "../../hooks/useAuth";

// Main Register Component
const Register = () => {
  // Getting info from the hook
  const { registerUser, isLoading, authError } = useAuth();

  // History hook
  const history = useHistory();

  // Storing login data in the state
  const [loginData, setLoginData] = useState({});

  // State for showing pass mismatch error
  const [passError, setPassError] = useState(false);

  // Function for handling user input
  const handleUserInput = (e) => {
    const field = e.target.name;
    const value = e.target.value;

    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };

  // Function for handling registration
  const handleSubmit = (e) => {
    e.preventDefault();
    if (loginData.password !== loginData.passwordConfirm) {
      setPassError(true);
      return;
    }

    registerUser(loginData.email, loginData.password, loginData.name, history);
  };

  return (
    <Container sx={{ mt: 10 }}>
      <Box>
        {/* Section title */}
        <Typography
          variant="h4"
          component="h2"
          sx={{ mb: 4, color: "secondary.main", fontWeight: 700 }}
        >
          Create an account
        </Typography>
        <Grid container columns={{ xs: 1, md: 12 }} spacing={{ xs: 4, md: 6 }}>
          <Grid item xs={1} md={5}>
            {isLoading ? (
              // Show if the state is loading
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
                    {/* User name */}
                    <TextField
                      type="text"
                      label="Name"
                      variant="outlined"
                      name="name"
                      required
                      onBlur={handleUserInput}
                    />
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
                    {/* Password Confirmation */}
                    <TextField
                      type="password"
                      label="Repeat Password"
                      variant="outlined"
                      name="passwordConfirm"
                      required
                      onBlur={handleUserInput}
                      error={passError}
                    />
                    {/* Show if the password doesn't match with each other */}
                    {passError && (
                      <FormHelperText sx={{ color: "red" }}>
                        Password Doesn't Match
                      </FormHelperText>
                    )}
                  </Stack>
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
                    Sign Up
                  </Button>
                </form>
                <Box sx={{ mt: 1 }}>
                  <Typography variant="body1">
                    {/* Link to login page */}
                    Already registered?
                    <Typography variant="body1" component="span">
                      <Button
                        onClick={() => history.push("/login")}
                        variant="text"
                        color="secondary"
                      >
                        Log In
                      </Button>
                    </Typography>
                  </Typography>
                </Box>
                {/* Backlink for going home */}
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
          {/* Register image */}
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

export default Register;
