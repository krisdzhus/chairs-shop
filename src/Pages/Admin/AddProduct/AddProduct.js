// Modules from Material UI
import {
  Button,
  Container,
  Grid,
  Rating,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";

// Axios
import axios from "axios";

// Modules and hooks from React
import React, { useState } from "react";

// Hook from React Router
import { useHistory } from "react-router";

// Main Add Product component
const AddProduct = () => {
  // Store the product in the state
  const [product, setProduct] = useState({});

  // State for storing rating value
  const [ratingValue, setRatingValue] = useState(0);

  // Using history hook
  const history = useHistory();

  // Getting the product info
  const handleProductInfo = (e) => {
    const field = e.target.name;
    const value = e.target.value;

    const newProductInfo = { ...product };
    newProductInfo[field] = value;
    setProduct(newProductInfo);
  };

  // Function for adding a product in database
  const handleAddProduct = (e) => {
    e.preventDefault();

    // Set the request
    axios
      .post("https://morning-scrubland-84603.herokuapp.com/products", {
        productName: product.productName,
        productImage: product.productImage,
        productShorDesc: product.productShorDesc,
        productLongDesc: product.productLongDesc,
        productPrice: product.productPrice,
        productRating: ratingValue,
      })
      .then((res) => {
        if (res.data.insertedId) {
          window.alert("Product added successfully!");
          history.push("/explore");
        }
      });
  };

  return (
    <Container>
      <Box>
        <Grid container columns={{ xs: 1, md: 12 }}>
          <Grid item xs={1} md={6}>
            {/* Section title */}
            <Box
              sx={{ display: "flex", flexDirection: "column", gap: 1, mb: 4 }}
            >
              <Typography variant="h4">Add a product</Typography>
              <Typography variant="subtitle1" color="text.secondary">
                Product will be added to the database
              </Typography>
            </Box>
            <form onSubmit={handleAddProduct}>
              {/* Getting product name */}
              <Stack direction="column" spacing={3}>
                <TextField
                  variant="outlined"
                  name="productName"
                  label="Product Name"
                  required
                  onBlur={handleProductInfo}
                />
                {/* Getting product image */}
                <TextField
                  variant="outlined"
                  name="productImage"
                  label="Product Image"
                  required
                  onBlur={handleProductInfo}
                />
                {/* Getting short description */}
                <TextField
                  variant="outlined"
                  name="productShorDesc"
                  label="Product Short Description"
                  required
                  onBlur={handleProductInfo}
                />
                {/* Getting long Desc */}
                <TextField
                  variant="outlined"
                  name="productLongDesc"
                  label="Product Long Description"
                  required
                  onBlur={handleProductInfo}
                />
                {/* Product price */}
                <TextField
                  variant="outlined"
                  name="productPrice"
                  label="Product Price"
                  required
                  onBlur={handleProductInfo}
                />
                {/* Rating component */}
                <Stack direction="column" spacing={1}>
                  <Typography variant="subtitle1" component="legend">
                    Product Rating
                  </Typography>
                  <Rating
                    name="simple-controlled"
                    precision={0.1}
                    value={ratingValue}
                    onChange={(event, newValue) => {
                      setRatingValue(newValue);
                    }}
                  />
                </Stack>
              </Stack>
              {/* Add Button */}
              <Button
                sx={{ mt: 3, minWidth: "200px" }}
                type="submit"
                variant="contained"
                color="secondary"
              >
                Add Product
              </Button>
            </form>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default AddProduct;
