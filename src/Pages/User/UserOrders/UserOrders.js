// Modules from Material UI
import {
  Alert,
  Container,
  Grid,
  Snackbar,
  Typography,
  Button,
} from "@mui/material";
import { Box } from "@mui/system";

// Axios
import axios from "axios";

// React and necessary hooks
import React, { useEffect, useState } from "react";

// Hooks for getting auth info
import useAuth from "../../../hooks/useAuth";

// Hooks from React Router
import { useHistory } from "react-router-dom";

// Single Order Component
import SingleOrder from "../../../components/SingleOrder/SingleOrder";

// Main User Orders Component
const UserOrders = () => {
  // Getting user info
  const { user } = useAuth();

  // Storing orders in the state
  const [orders, setOrders] = useState([]);

  // History hook
  const history = useHistory();

  // State for Snackbar
  const [openSnackBar, setOpenSnackBar] = useState(false);

  // Fetching data by individuals email
  useEffect(() => {
    axios
      .get(
        `https://morning-scrubland-84603.herokuapp.com/orders?email=${user.email}`
      )
      .then((res) => {
        setOrders(res.data);
      });
  }, [user.email]);

  // Function for deleting a order
  const handleDelete = (id) => {
    const confirmation = window.confirm("Want to cancel this item?");
    if (confirmation) {
      axios
        .delete(`https://morning-scrubland-84603.herokuapp.com/orders/${id}`)
        .then((res) => {
          if (res.data.deletedCount > 0) {
            const newOrders = orders.filter((order) => order._id !== id);
            setOrders(newOrders);
            setOpenSnackBar(true); //Snackbar
          }
        });
    }
  };

  // Closing the Snackbar
  const handleCloseSnackBar = () => {
    setOpenSnackBar(false);
  };

  return (
    <Container>
      <Box>
        {orders.length === 0 ? (
          <>
            {/* Render if there is no order */}
            <Typography variant="h4">You have no orders</Typography>
            <Typography variant="subtitle1" color="text.secondary">
              Order something amazing with us!
            </Typography>
            <Button
              onClick={() => history.push("/explore")}
              sx={{ mt: 2 }}
              variant="outlined"
              color="secondary"
            >
              Explore now!
            </Button>
          </>
        ) : (
          // Render if there is at least one order
          <Grid
            container
            columns={{ xs: 1, md: 12 }}
            spacing={{ xs: 4, md: 6 }}
          >
            {orders.map((order) => (
              <SingleOrder
                key={order._id}
                order={order}
                handleDelete={handleDelete}
              ></SingleOrder>
            ))}
          </Grid>
        )}
      </Box>
      {/* Snackbar */}
      <Snackbar
        open={openSnackBar}
        autoHideDuration={6000}
        onClose={handleCloseSnackBar}
      >
        <Alert
          onClose={handleCloseSnackBar}
          severity="success"
          sx={{ width: "100%" }}
        >
          Order has been canceled!
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default UserOrders;
