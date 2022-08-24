// Modules from Material UI
import {
  Alert,
  Button,
  Container,
  Grid,
  Rating,
  Snackbar,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";

// Axios
import axios from "axios";

// React and necessary hook
import React, { useState } from "react";

// Hooks for getting auth info
import useAuth from "../../../hooks/useAuth";

// Main User Review Component
const UserReviews = () => {
  // Getting user info from the hook
  const { user } = useAuth();

  // State for rating value
  const [ratingValue, setRatingValue] = useState(0);

  // State for storing review description
  const [description, setDescription] = useState("");

  // State for Snackbar
  const [openSnackBar, setOpenSnackBar] = useState(false);

  // Getting the review
  const handleUserInfo = (e) => {
    setDescription(e.target.value);
  };

  // Function for submitting the review
  const handleSubmitReview = (e) => {
    e.preventDefault();
    axios
      .post("https://morning-scrubland-84603.herokuapp.com/reviews", {
        name: user.displayName,
        image: "",
        description: description,
        rating: ratingValue,
      })
      .then((res) => {
        if (res.data.insertedId) {
          setRatingValue(0);
          setOpenSnackBar(true); //Showing Snackbar
          window.location.reload();
        }
      });
  };

  const handleCloseSnackBar = () => {
    setOpenSnackBar(false);
  };

  return (
    <Container>
      {/* Section title */}
      <Typography sx={{ mb: 3 }} variant="h4">
        Write a review for us!
      </Typography>
      <Grid container>
        <Grid item xs={12} md={6}>
          <form onSubmit={handleSubmitReview}>
            <Stack direction="column" spacing={3}>
              {/* User name */}
              <TextField
                type="text"
                defaultValue={user.displayName}
                variant="outlined"
                label="Name"
                disabled
              />
              {/* Rating */}
              <Stack direction="row">
                <Typography component="legend">Your rating:</Typography>
                <Rating
                  name="simple-controlled"
                  precision={0.1}
                  value={ratingValue}
                  onChange={(event, newValue) => {
                    setRatingValue(newValue);
                  }}
                />
              </Stack>
              {/* Review message */}
              <TextField
                type="text"
                variant="outlined"
                label="Say Anything"
                name="description"
                multiline
                rows={4}
                defaultValue=""
                required
                onBlur={handleUserInfo}
              />
            </Stack>
            <Box sx={{ mt: 3 }}>
              <Button type="submit" variant="contained" color="secondary">
                Submit
              </Button>
            </Box>
          </form>
        </Grid>
      </Grid>
      {/* Snackbar */}
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
          Thanks for your kind review!
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default UserReviews;
