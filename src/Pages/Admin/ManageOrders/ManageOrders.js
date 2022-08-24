// Modules from Material UI
import {
  Alert,
  Container,
  IconButton,
  Snackbar,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

// Icons from Material UI
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import IndeterminateCheckBoxIcon from "@mui/icons-material/IndeterminateCheckBox";
import DeleteIcon from "@mui/icons-material/Delete";

// React and necessary hooks
import React, { useEffect, useState } from "react";

// Axios
import axios from "axios";

// Main Manage Orders Component
const ManageOrders = () => {
  // Store all orders in the state
  const [orders, setOrders] = useState([]);

  // State for Snackbar
  const [openSnackBar, setOpenSnackBar] = useState(false);

  // Fetching data from order collection
  useEffect(() => {
    axios
      .get("https://morning-scrubland-84603.herokuapp.com/orders")
      .then((res) => {
        setOrders(res.data);
      });
  }, []);

  // Function for deleting a order
  const handleDeleteOrder = (id) => {
    const confirmation = window.confirm("Want to delete this order?");
    if (confirmation) {
      axios
        .delete(`https://morning-scrubland-84603.herokuapp.com/orders/${id}`)
        .then((res) => {
          if (res.data.deletedCount > 0) {
            const newOrders = orders.filter((order) => order._id !== id);
            setOrders(newOrders);
            setOpenSnackBar(true); // Snackbar
          }
        });
    }
  };

  // Function for updating order status
  const handleUpdateStatus = (id) => {
    const confirmation = window.confirm("Want to update the order status?");
    if (confirmation) {
      // Making put request
      axios
        .put(`https://morning-scrubland-84603.herokuapp.com/orders/${id}`, {
          status: "Shipped",
        })
        .then((res) => {
          if (res.data.modifiedCount > 0) {
            window.alert("Order updated successfully!");
            window.location.reload(); // Reload the window for showing the updated status in the UI
          }
        });
    }
  };

  // Function for closing the Snackbar
  const handleCloseSnackBar = () => {
    setOpenSnackBar(false);
  };

  return (
    <Container>
      <Box>
        {/* Section title */}
        <Typography variant="h4" mb={2}>
          Manage all orders
        </Typography>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                {/* Table headers */}
                <TableCell align="left">Name</TableCell>
                <TableCell align="left">Email</TableCell>
                <TableCell align="left">Order Item</TableCell>
                <TableCell align="left">Order Status</TableCell>
                <TableCell align="left">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map((order) => (
                <TableRow
                  key={order._id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  {/* Table data */}
                  <TableCell component="th" scope="row">
                    {order.name}
                  </TableCell>
                  <TableCell align="left">{order.email}</TableCell>
                  <TableCell align="left">{order.orderItem}</TableCell>
                  <TableCell align="left">
                    {/* Conditional rendering for order status */}
                    {order.status === "Pending" ? (
                      // Show if it is PENDING
                      <Typography
                        color="#f57c00"
                        variant="body1"
                        component="span"
                      >
                        {order.status}
                      </Typography>
                    ) : (
                      // Show if it is UPDATED
                      <Typography
                        color="secondary.main"
                        variant="body1"
                        component="span"
                      >
                        {order.status}
                      </Typography>
                    )}
                  </TableCell>
                  <TableCell>
                    <Stack direction="row" spacing={1}>
                      {/* Tooltip */}
                      <Tooltip title="Update Order Status">
                        {/* Render the icon button for corresponding items status */}
                        {order.status === "Pending" ? (
                          <IconButton
                            onClick={() => handleUpdateStatus(order._id)}
                          >
                            <IndeterminateCheckBoxIcon
                              sx={{ color: "#f57c00" }}
                            />
                          </IconButton>
                        ) : (
                          <IconButton>
                            <CheckBoxIcon color="secondary" />
                          </IconButton>
                        )}
                      </Tooltip>
                      <Tooltip title="Delete Order">
                        <IconButton
                          onClick={() => handleDeleteOrder(order._id)} //Delete handler
                        >
                          <DeleteIcon
                            sx={{ color: "accent.main" }}
                            color="red"
                          />
                        </IconButton>
                      </Tooltip>
                    </Stack>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
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
          Order has been deleted successfully!
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default ManageOrders;
