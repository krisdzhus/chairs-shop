// Modules from Material UI
import {
  Alert,
  Container,
  IconButton,
  Snackbar,
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

// React and necessary hooks
import React, { useEffect, useState } from "react";

// Axios
import axios from "axios";

// Icons from Material UI
import DeleteIcon from "@mui/icons-material/Delete";

// Main Manage Products Component
const ManageProducts = () => {
  // Storing all products in the statee
  const [products, setProducts] = useState([]);

  // State for snackbar
  const [openSnackBar, setOpenSnackBar] = useState(false);

  // Fetching data
  useEffect(() => {
    axios
      .get("https://morning-scrubland-84603.herokuapp.com/products")
      .then((res) => {
        setProducts(res.data);
      });
  }, []);

  // Function for deleting a product
  const handleDeleteProduct = (id) => {
    const confirmation = window.confirm("Want to delete this product?");
    if (confirmation) {
      axios
        .delete(`https://morning-scrubland-84603.herokuapp.com/products/${id}`)
        .then((res) => {
          if (res.data.deletedCount > 0) {
            const newProducts = products.filter(
              (product) => product._id !== id
            );
            setProducts(newProducts);
            setOpenSnackBar(true); // Snackbar
          }
        });
    }
  };

  // For closing the Snackbar
  const handleCloseSnackBar = () => {
    setOpenSnackBar(false);
  };

  return (
    <Container>
      <Box>
        {/* Section title */}
        <Typography variant="h4" mb={3}>
          Manage all products
        </Typography>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              {/* Table Headers */}
              <TableRow>
                <TableCell>Product Image</TableCell>
                <TableCell align="left">Product Name</TableCell>
                <TableCell align="left">Product Description</TableCell>
                <TableCell align="left">Price</TableCell>
                <TableCell align="left">Rating</TableCell>
                <TableCell align="left">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {/* Map through all products and set them as a table cell */}
              {products.map((product) => (
                <TableRow
                  key={product._id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <img
                      style={{ width: "30%" }}
                      src={product.productImage}
                      alt={product.productName}
                    />
                  </TableCell>
                  <TableCell align="left">{product.productName}</TableCell>
                  <TableCell align="left">{product.productShorDesc}</TableCell>
                  <TableCell align="left">{product.productPrice}</TableCell>
                  <TableCell align="left">{product.productRating}</TableCell>
                  <TableCell align="left">
                    <Tooltip title="Delete the product">
                      <IconButton
                        onClick={() => handleDeleteProduct(product._id)} // Delete handler
                      >
                        <DeleteIcon sx={{ color: "accent.main" }} />
                      </IconButton>
                    </Tooltip>
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
          Product has been deleted successfully!
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default ManageProducts;
