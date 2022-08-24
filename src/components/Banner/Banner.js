// React
import React from "react";

// Modules from  Material UI
import { Typography, useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";

// Banner Image
import bgBanner from "../../assets/bg-banner-main.png";
import { useTheme } from "@emotion/react";

// Banner style
const bgStyle = {
  height: "90vh",
  backgroundImage: `url(${bgBanner})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
};

// Main Banner
const Banner = () => {
  // Declaring breakpoint for mobile
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      style={bgStyle}
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box sx={{ textAlign: "center", mt: 15 }}>
        {/* Checking the view and set the view for mobile device */}
        {isMobile ? (
          <>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 700,
                textShadow: "1px 1px #232832",
                lineHeight: "1.5",
                mb: 3,
              }}
              component="h1"
              color="secondary.main"
            >
              It's Really Important <br /> to Have A Good Gaming Chair
            </Typography>
            <Typography
              variant="body1"
              component="p"
              color="neutral.main"
              sx={{
                color: "#81c784",
                textAlign: "justify",
                textShadow: "1px 1px #232832",
                lineHeight: "2",
                px: 1,
                fontWeight: 500,
              }}
            >
              We are always overlooking the most importanct factor while gaming.
              A good gaming chair helps us to mantain our postures. It's really
              important for those who spend a long session in sitting.
            </Typography>
          </>
        ) : (
          <>
            {/* Render from medium devices to up */}
            <Typography
              variant="h2"
              sx={{
                fontWeight: 700,
                textShadow: "1px 1px #232832",
                lineHeight: "1.5",
                mb: 3,
              }}
              component="h1"
              color="secondary.main"
            >
              It's Really Important <br /> to Have A Good Gaming Chair
            </Typography>
            <Typography
              variant="body1"
              component="p"
              color="neutral.main"
              sx={{
                textShadow: "1px 1px #232832",
                fontSize: "1.2rem",
                lineHeight: "2",
                fontWeight: 500,
              }}
            >
              We are always overlooking the most importanct factor while gaming.
              <br />
              A good gaming chair helps us to mantain our postures. <br /> It's
              really important for those who spend a long session in sitting.
            </Typography>
          </>
        )}
      </Box>
    </Box>
  );
};

export default Banner;
