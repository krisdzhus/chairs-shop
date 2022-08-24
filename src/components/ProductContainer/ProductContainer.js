// React and necessary modules
import React, { useEffect, useState } from "react";

// Hook for using the theme properties
import { useTheme } from "@emotion/react";

// Modules from Material UI
import {
  CircularProgress,
  Container,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Box } from "@mui/system";

// Importing axios
import axios from "axios";

// React Masonry CSS
import Masonry from "react-masonry-css";

// Location hook from React Router
import { useLocation } from "react-router";

// Product component
import Product from "../Product/Product";

// Setting the breakpoints for Masonry CSS
const breakpoints = {
  default: 3,
  1100: 2,
  700: 1,
};

// Main Product Container Component
const ProductContainer = () => {
  // Declare state for storing all products
  const [products, setProducts] = useState([]);

  // React router
  const location = useLocation();
  const homeLocation = location.pathname === "/" || "home";

  // Declaring breakpoint for mobile
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  // Fetching the data from the API
  useEffect(() => {
    axios
      .get("https://morning-scrubland-84603.herokuapp.com/products")
      .then((res) => {
        setProducts(res.data);
      });
  }, []);

  return (
    <Container sx={{ my: 15, textAlign: "center", position: "relative" }}>
      {/* Render only for mobile devices */}
      {isMobile ? (
        <>
          {location.pathname === "/" && (
            <Typography
              variant="h5"
              component="h2"
              sx={{ fontWeight: 700, mb: 8 }}
            >
              We have some{" "}
              <Typography variant="h3" component="span" color="secondary.main">
                Great Deals!
              </Typography>
            </Typography>
          )}
        </>
      ) : (
        // Render for every devices except mobile
        <>
          {location.pathname === "/" && (
            <Typography
              variant="h3"
              component="h2"
              sx={{ fontWeight: 700, mb: 8 }}
            >
              We have some{" "}
              <Typography variant="h3" component="span" color="secondary.main">
                Great Deals!
              </Typography>
            </Typography>
          )}
        </>
      )}
      {products.length === 0 ? (
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
          {/* Checking the location and render a limited amount of product */}
          {homeLocation && (
            <Masonry
              breakpointCols={breakpoints}
              className="my-masonry-grid"
              columnClassName="my-masonry-grid_column"
            >
              {products.slice(0, 6).map((product) => (
                <Product key={product._id} product={product}></Product>
              ))}
            </Masonry>
          )}
        </Box>
      )}
    </Container>
  );
};

export default ProductContainer;
