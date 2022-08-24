// Modules from Material UI
import { CircularProgress, Container, Typography } from "@mui/material";
import { Box } from "@mui/system";

// Axios
import axios from "axios";

// React and necessary hooks
import React, { useEffect, useState } from "react";

// Necessary components
import Navbar from "../../components/Navbar/Navbar";
import Product from "../../components/Product/Product";

// React Masonry CSS
import Masonry from "react-masonry-css";

// Breakpoints for different devices
const breakpoints = {
  default: 3,
  1100: 2,
  700: 1,
};

// Main Explore Component
const Explore = () => {
  // Storing all products in the state
  const [products, setProducts] = useState([]);

  // Fetching products for database
  useEffect(() => {
    axios
      .get("https://morning-scrubland-84603.herokuapp.com/products")
      .then((res) => {
        setProducts(res.data);
      });
  }, []);

  return (
    <Box>
      {/* Navbar */}
      <Navbar></Navbar>
      <Container sx={{ mt: 5 }}>
        {/* Section title */}
        <Typography
          sx={{ textAlign: "center", fontWeight: 700 }}
          variant="h3"
          component="h1"
        >
          Explore more from us!
        </Typography>
        {/* Section subtitle */}
        <Typography
          variant="h6"
          component="p"
          sx={{ mt: 2, color: "secondary.main", textAlign: "center" }}
        >
          We offer the best budget friendly gaming chairs
        </Typography>
        {products.length === 0 ? ( // Show while fetching data
          <CircularProgress
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              color: "#4caf50",
            }}
          />
        ) : (
          <Box sx={{ mt: 8 }}>
            <Masonry
              breakpointCols={breakpoints}
              className="my-masonry-grid"
              columnClassName="my-masonry-grid_column"
            >
              {products.map((product) => (
                <Product key={product._id} product={product}></Product>
              ))}
            </Masonry>
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default Explore;
