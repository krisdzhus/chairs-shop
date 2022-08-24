// Modules from Material UI
import {
  Alert,
  Button,
  Container,
  Grid,
  Snackbar,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

// Axios
import axios from "axios";

// React and necessary hook
import React, { useState } from "react";

// Main Make Admin Component
const MakeAdmin = () => {
  // Store the email in the state
  const [email, setEmail] = useState("");

  // State for Snackbar
  const [openSnackBar, setOpenSnackBar] = useState(false);

  // Functionality for making an admin
  const handleMakeAdmin = (e) => {
    e.preventDefault();

    // Set email
    const user = { email };
    axios
      .put("https://morning-scrubland-84603.herokuapp.com/users", user)
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          handleOpenSnackBar(); // Show Snackbar for successfully modified count
        }
      });
  };

  // Function for handling snackbar
  const handleOpenSnackBar = () => {
    setOpenSnackBar(true);
  };
  const handleCloseSnackBar = () => {
    setOpenSnackBar(false);
  };

  return (
    <Container>
      {/* Snackbar component */}
      <Snackbar
        open={openSnackBar}
        autoHideDuration={6000}
        onClose={handleCloseSnackBar}
      >
        <Alert
          onClose={handleCloseSnackBar}
          severity="success"
          sx={{ width: "100%" }}
        >
          Admin created successfully
        </Alert>
      </Snackbar>
      <Grid container columns={{ xs: 1, md: 12 }}>
        <Grid item xs={12} md={5}>
          {/* Section title */}
          <Typography sx={{ mb: 3 }} variant="h4">
            Make an admin
          </Typography>
          <form onSubmit={handleMakeAdmin}>
            {/* Getting information */}
            <Stack direction="column" spacing={3}>
              <TextField
                variant="outlined"
                type="email"
                name="email"
                label="Email"
                fullWidth
                required
                onBlur={(e) => setEmail(e.target.value)}
              />
              <Button type="submit" variant="contained" color="secondary">
                Make Admin
              </Button>
            </Stack>
          </form>
        </Grid>
      </Grid>
    </Container>
  );
};

export default MakeAdmin;
