// React
import React from "react";

// Modules from Material UI
import {
  Container,
  Grid,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";

// Icons from react icons
import { AiFillYoutube } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";

// Main Footer Component
const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "#4caf50", py: 10 }}>
      <Container>
        <Grid container columns={{ xs: 1, md: 12 }} spacing={{ xs: 6 }}>
          {/* Branding column */}
          <Grid item xs={1} md={4}>
            <Typography
              style={{
                fontFamily: "'Comfortaa', cursive",
                fontSize: "1.5rem",
                cursor: "pointer",
              }}
              variant="h4"
            >
              Hobby Lobby
            </Typography>
            <Typography sx={{ mt: 1, color: "text.secondary" }} variant="body1">
              Your chair, your throne
            </Typography>
            <Typography
              sx={{ mt: 2 }}
              color="text.secondary"
              variant="subtitle1"
            >
              Find us!
            </Typography>
            <Stack direction="row" justifyContent="flex-start" spacing={2}>
              {/* Social Icons */}
              <IconButton>
                <AiFillYoutube />
              </IconButton>
              <IconButton>
                <AiOutlineTwitter />
              </IconButton>
              <IconButton>
                <AiFillInstagram />
              </IconButton>
            </Stack>
          </Grid>
          <Grid item xs={1} md={4}>
            {/* Customer service column */}
            <Typography variant="h5" color="text.secondary">
              Customer Service
            </Typography>
            <List>
              <ListItemButton>
                <ListItemText primary="Customer Relations" />
              </ListItemButton>
            </List>
            <List>
              <ListItemButton>
                <ListItemText primary="FAQs" />
              </ListItemButton>
            </List>
            <List>
              <ListItemButton>
                <ListItemText primary="Terms & Conditions" />
              </ListItemButton>
            </List>
          </Grid>
          <Grid item xs={1} md={4}>
            {/* Links section */}
            <Typography variant="h5" color="text.secondary">
              Important Links
            </Typography>
            <List>
              <ListItemButton>
                <ListItemText primary="Cookie Policy" />
              </ListItemButton>
            </List>
            <List>
              <ListItemButton>
                <ListItemText primary="Payment Methods" />
              </ListItemButton>
            </List>
            <List>
              <ListItemButton>
                <ListItemText primary="Data Protection Policy" />
              </ListItemButton>
            </List>
            <List>
              <ListItemButton>
                <ListItemText primary="Secure E-commerce" />
              </ListItemButton>
            </List>
          </Grid>
        </Grid>
        <Box sx={{ mt: 4, textAlign: "center" }}>
          {/* Copyright area */}
          <Typography color="text.secondary" variant="caption">
            copyright &copy; Hobby Lobby 2021
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
