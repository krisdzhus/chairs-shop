// From React
import React from "react";

// From Material UI
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";

// Material Icons
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import {
  Alert,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@emotion/react";

// React router
import { useHistory } from "react-router";

// Authentication hook
import useAuth from "../../hooks/useAuth";

// Modal style
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#fefeff",
  borderRadius: "5px",
  boxShadow: 24,
  p: 4,
};

// Drawer width
const drawerWidth = 220;

// Main Navbar Component
const Navbar = () => {
  // Getting user and logout function from the hook
  const { user, logOut } = useAuth();

  // Declaring breakpoint for mobile device
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  // State for opening the drawer
  const [mobileOpen, setMobileOpen] = React.useState(false);

  // State for modal
  const [openModal, setOpenModal] = React.useState(false);

  // History hook
  const history = useHistory();

  // Handling the logout button
  const handleLogOut = () => {
    logOut();
    setOpenModal(false);
  };

  // Drawer button toggler
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Main Drawer Component
  const drawer = (
    <div>
      {/* App Toolbar */}
      <Toolbar />
      <Divider />
      <List>
        {/* Common List items  */}
        <ListItem onClick={() => history.push("/home")}>
          <ListItemIcon>
            <HomeIcon sx={{ color: "secondary.main" }} />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem onClick={() => history.push("/explore")}>
          <ListItemIcon>
            <ExploreIcon sx={{ color: "secondary.main" }} />
          </ListItemIcon>
          <ListItemText primary="Explore" />
        </ListItem>
        {user?.email ? (
          // Rendered for logged in user
          <>
            <ListItem onClick={() => history.push("/dashboard")}>
              <ListItemIcon>
                <DashboardIcon sx={{ color: "secondary.main" }} />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItem>
            <ListItem onClick={() => setOpenModal(true)}>
              <ListItemIcon>
                <LogoutIcon sx={{ color: "secondary.main" }} />
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItem>
          </>
        ) : (
          // Login
          <ListItem onClick={() => history.push("/login")}>
            <ListItemIcon>
              <LoginIcon sx={{ color: "secondary.main" }} />
            </ListItemIcon>
            <ListItemText primary="Login" />
          </ListItem>
        )}
      </List>
      <Divider />
    </div>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* Main App Bar */}
      <AppBar position="static" elevation={0}>
        <Toolbar>
          {/* Render only for mobile devices */}
          {isMobile && (
            <IconButton
              onClick={handleDrawerToggle}
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          )}
          {/* Site title */}
          <Typography
            onClick={() => history.push("/")}
            style={{
              fontFamily: "'Comfortaa', cursive",
              cursor: "pointer",
            }}
            variant="h5"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            Hobby{" "}
            <Typography
              sx={{ color: "secondary.main" }}
              variant="h5"
              component="span"
            >
              Lobby
            </Typography>
          </Typography>
          {!isMobile && (
            // Render only for mobile devices
            <>
              <Button onClick={() => history.push("/home")} color="inherit">
                Home
              </Button>
              <Button onClick={() => history.push("/explore")} color="inherit">
                Explore
              </Button>
              {/* Render only for logged in user */}
              {user?.email ? (
                <>
                  <Button
                    onClick={() => history.push("/dashboard")}
                    color="inherit"
                  >
                    Dashboard
                  </Button>
                  <Button onClick={() => setOpenModal(true)} color="inherit">
                    Logout
                  </Button>
                </>
              ) : (
                // Login Button
                <Button onClick={() => history.push("/login")} color="inherit">
                  Login
                </Button>
              )}
            </>
          )}
        </Toolbar>
      </AppBar>
      {/* Drawer will render only for mobile devices */}
      {isMobile && (
        <>
          {/* The Drawer Component */}
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: "none", sm: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
            open
          >
            {drawer}
          </Drawer>
        </>
      )}
      {/* Modal */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openModal}
        onClose={() => setOpenModal(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        {/* Modal effect */}
        <Fade in={openModal}>
          <Box sx={style}>
            <Alert sx={{ mb: 2 }} severity="warning">
              Want to log out?
            </Alert>
            <Stack direction="row" justifyContent="flex-end" spacing={2}>
              <Button
                onClick={() => setOpenModal(false)}
                variant="contained"
                color="secondary"
              >
                Nope
              </Button>
              <Button onClick={handleLogOut} variant="outlined" color="warning">
                Yes
              </Button>
            </Stack>
          </Box>
        </Fade>
      </Modal>
    </Box>
  );
};

export default Navbar;
