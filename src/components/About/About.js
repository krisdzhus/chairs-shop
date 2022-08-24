// React
import React from "react";

// Modules from Material UI
import { Container, Grid, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";

// About image
import AboutImage from "../../assets/about-concept-img.png";

// Icons from react icons
import { BsFillHandIndexFill } from "react-icons/bs";
import { FaFlag } from "react-icons/fa";
import { FaMountain } from "react-icons/fa";

// Main About Component
const About = () => {
  return (
    <Container sx={{ mb: 10 }}>
      {/* Section Title */}
      <Typography
        sx={{ fontWeight: 700, textAlign: "center", mb: 3 }}
        variant="h3"
        component="h3"
      >
        About us
      </Typography>
      <Grid container columns={{ xs: 1, md: 12 }} spacing={{ xs: 4, md: 8 }}>
        <Grid item xs={1} md={6}>
          {/* Content image */}
          <img
            style={{
              width: "100%",
              display: "block",
              marginTop: "5rem",
              borderRadius: "5px",
            }}
            src={AboutImage}
            alt="Why Choose Us"
          />
        </Grid>
        <Grid item xs={1} md={6}>
          <Box sx={{ mt: 4 }}>
            <Grid
              container
              columns={{ xs: 1, md: 12 }}
              spacing={{ xs: 2, md: 4 }}
            >
              <Grid item xs={1} md={2}>
                {/* Icon */}
                <BsFillHandIndexFill
                  style={{
                    marginTop: "1rem",
                    fontSize: "4rem",
                    color: "#4caf50",
                  }}
                />
              </Grid>
              <Grid item xs={1} md={7}>
                {/* Our Vision */}
                <Stack>
                  <Typography variant="h6" component="div">
                    Our Vision
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Our vision is to keep safe the physical issue that face by a
                    gamer or any person who works long hour in sitting. We are
                    care for those individuals and help them realize the
                    importance of a good postures.
                  </Typography>
                </Stack>
              </Grid>
            </Grid>
          </Box>
          <Box sx={{ mt: 4 }}>
            <Grid
              container
              columns={{ xs: 1, md: 12 }}
              spacing={{ xs: 2, md: 4 }}
            >
              {/* Icon */}
              <Grid item xs={1} md={2}>
                <FaFlag
                  style={{
                    marginTop: "1rem",
                    fontSize: "4rem",
                    color: "#4caf50",
                  }}
                />
              </Grid>
              <Grid item xs={1} md={7}>
                {/* Our Mission */}
                <Stack>
                  <Typography variant="h6" component="div">
                    Our Mission
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    We have to earn the trust and respect of our customers
                    everyday in order to ensure that the customer makes the
                    decision to choose our products and services.
                  </Typography>
                </Stack>
              </Grid>
            </Grid>
          </Box>
          <Box sx={{ mt: 4 }}>
            <Grid
              container
              columns={{ xs: 1, md: 12 }}
              spacing={{ xs: 2, md: 4 }}
            >
              {/* Icon */}
              <Grid item xs={1} md={2}>
                <FaMountain
                  style={{
                    marginTop: "1rem",
                    fontSize: "4rem",
                    color: "#4caf50",
                  }}
                />
              </Grid>
              <Grid item xs={1} md={7}>
                {/* Our Goals */}
                <Stack>
                  <Typography variant="h6" component="div">
                    Our Goals
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Our goal is to serve a small portion of community with great
                    care. We crave for our customer's satisfaction. We already
                    create a solid space in gaming community who are concerned
                    about their health. In coming days, we have a plan to make
                    it an international moovements
                  </Typography>
                </Stack>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;
