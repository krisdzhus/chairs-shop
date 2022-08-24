// React
import React from "react";

// Modules from Material UI
import { Button, Paper, Rating, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";

// Importing axios
import axios from "axios";

// Hooks from React Router
import { useHistory, useLocation } from "react-router";

// Main Product Component
const Product = ({ product }) => {
  // Using the hooks
  const location = useLocation();
  const history = useHistory();

  // Destructuring values from props
  const {
    _id,
    productName,
    productImage,
    productShorDesc,
    productLongDesc,
    productPrice,
    productRating,
  } = product;

  // Function for handling the order
  const handleOrder = (id) => {
    axios
      .get(`https://morning-scrubland-84603.herokuapp.com/products/${id}`)
      .then((res) => {
        history.push(`/purchase/${id}`);
      });
  };

  return (
    <Paper
      sx={{ p: 3, border: "2px solid #4caf50", borderRadius: "5px" }}
      elevation={0}
    >
      {/* Product image */}
      <img
        style={{ width: "80%", marginBottom: "2rem" }}
        src={productImage}
        alt={productName}
      />
      {/* Product rating */}
      <Stack direction="row" spacing={2} alignItems="center">
        <Typography variant="body1">Rating:</Typography>
        <Rating precision={0.1} value={productRating} readOnly />
      </Stack>
      {/* Product information */}
      <Box sx={{ textAlign: "left", mb: 3 }}>
        <Typography sx={{ mt: 2 }} variant="h6" component="h3">
          {productName}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {productShorDesc}
        </Typography>
      </Box>
      {/* Render the description if the route match with the following route */}
      {location.pathname === "/explore" && (
        <Box sx={{ mb: 2, textAlign: "left" }}>
          <Typography variant="body2" color="text.secondary">
            <Typography
              sx={{ fontWeight: 700 }}
              variant="body1"
              component="span"
            >
              Description:
            </Typography>{" "}
            {productLongDesc}
          </Typography>
          {/* Product price */}
          <Typography sx={{ fontWeight: 700, mt: 3 }} variant="h6">
            Price: ${productPrice}
          </Typography>
        </Box>
      )}
      {/* Order button */}
      <Stack>
        <Button
          onClick={() => handleOrder(_id)}
          variant="contained"
          color="secondary"
        >
          Order Now
        </Button>
      </Stack>
    </Paper>
  );
};

export default Product;
