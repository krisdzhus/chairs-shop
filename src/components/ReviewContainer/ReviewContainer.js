// React and necessary hooks
import React, { useEffect, useState } from "react";

// Modules from Material UI
import { CircularProgress, Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";

// Axios for data fetching
import axios from "axios";

// Review component
import Review from "../Review/Review";

// Main Review Container Component
const ReviewContainer = () => {
  // Storing the reviews in the state
  const [reviews, setReviews] = useState([]);

  // Fetching data from the API
  useEffect(() => {
    axios
      .get("https://morning-scrubland-84603.herokuapp.com/reviews")
      .then((res) => {
        setReviews(res.data);
      });
  }, []);

  return (
    <Container sx={{ mb: 15, position: "relative" }}>
      {/* Section title */}
      <Typography
        variant="h4"
        component="h3"
        sx={{ textAlign: "center", fontWeight: 700, mb: 10 }}
      >
        Our Satisfied Customers Say...
      </Typography>
      {reviews.length === 0 ? (
        <CircularProgress
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            color: "#232832",
          }}
        />
      ) : (
        <Box>
          {/* Map through the reviews data */}
          <Grid
            container
            columns={{ xs: 1, md: 12 }}
            spacing={{ xs: 1, md: 6 }}
          >
            {reviews.map((review) => (
              <Review key={review._id} review={review}></Review>
            ))}
          </Grid>
        </Box>
      )}
    </Container>
  );
};

export default ReviewContainer;
