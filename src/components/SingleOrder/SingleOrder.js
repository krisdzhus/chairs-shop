// React
import React from "react";

// Modules from Material UI
import { Button, Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";

// Material Icon
import CancelIcon from "@mui/icons-material/Cancel";

// Main Single Order Component
const SingleOrder = ({ order, handleDelete }) => {
  return (
    <Grid item xs={1} md={4}>
      {/* Render for the User Order Page */}
      <Paper
        elevation={0}
        sx={{ boxShadow: "0px 15px 25px -4px rgba(30, 30, 60, 0.17)", p: 2 }}
      >
        <Grid container columns={{ xs: 1, md: 12 }} spacing={{ xs: 2, md: 3 }}>
          <Grid item xs={1} md={4}>
            <img
              style={{ width: "70%", display: "block", margin: "2rem auto" }}
              src={order.orderImage}
              alt={order.orderItem}
            />
          </Grid>
          <Grid item xs={1} md={8}>
            <Box>
              <Typography variant="h6">{order.orderItem}</Typography>
              <Typography variant="subtitle1" color="text.secondary">
                Price: ${order.orderPrice}
              </Typography>
            </Box>
            <Typography variant="subtitle1" component="div" my={2}>
              Status: {/* Render based on order status */}
              {order.status === "Pending" ? (
                <Typography variant="button" sx={{ color: "#ef6c00" }}>
                  {order.status}
                </Typography>
              ) : (
                <Typography variant="button" sx={{ color: "secondary.main" }}>
                  {order.status}
                </Typography>
              )}
            </Typography>
            <Button
              onClick={() => handleDelete(order._id)}
              variant="outlined"
              color="warning"
              endIcon={<CancelIcon />}
            >
              Cancel
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default SingleOrder;
