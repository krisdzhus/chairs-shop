// React
import React from "react";

// Module from Material UI
import { Box } from "@mui/system";

// Necessary components
import Navbar from "../../components/Navbar/Navbar";
import Banner from "../../components/Banner/Banner";
import ProductContainer from "../../components/ProductContainer/ProductContainer";
import ReviewContainer from "../../components/ReviewContainer/ReviewContainer";
import About from "../../components/About/About";
import Footer from "../../components/Footer/Footer";

// Main Home Component
const Home = () => {
  return (
    <Box>
      <Navbar></Navbar>
      <Banner></Banner>
      <ProductContainer></ProductContainer>
      <ReviewContainer></ReviewContainer>
      <About></About>
      <Footer></Footer>
    </Box>
  );
};

export default Home;
