// React
import React from "react";

// Modules from Material UI
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Grid,
  Rating,
  Typography,
} from "@mui/material";

// Main Review Component
const Review = ({ review }) => {
  return (
    <Grid item xs={1} md={4}>
      <Card>
        {/* Render if the user has avatar image */}
        {review.image ? (
          <CardHeader
            avatar={<Avatar src={review.image} />}
            title={review.name}
            subheader={
              <Rating value={review.rating} readOnly precision={0.1} />
            }
          />
        ) : (
          // Render if the user has no avatar image
          <CardHeader
            avatar={<Avatar>{review?.name.slice(0, 1)}</Avatar>}
            title={review.name}
            subheader={
              <Rating value={review.rating} readOnly precision={0.1} />
            }
          />
        )}
        {/* Content */}
        <CardContent>
          <Typography variant="body1" color="text.secondary">
            {review.description}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Review;
