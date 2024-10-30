import { Stack, Box, Typography, IconButton } from "@mui/material";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import CloseIcon from "@mui/icons-material/Close";
import ProductDetails from "./ProductDetails";
import productsApi from "./productApi";
import { motion, AnimatePresence } from "framer-motion";

export default function Main() {
  const [open, setOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [product, setProduct] = useState("all"); // Default to show all products
  const [filteredProducts, setFilteredProducts] = useState(productsApi); // Initially show all products

  const handleClickOpen = (product) => {
    setSelectedProduct(product); // Set the clicked product
    setOpen(true); // Open the modal
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedProduct(null); // Clear the selected product when modal closes
  };

  const handleProducts = (event, newCategory) => {
    // If the same category is selected, do nothing
    if (newCategory === null || newCategory === product) {
      return; // Exit early, retain current filtered products
    }
    // Update the selected product category
    setProduct(newCategory);
    // Filter products based on the new category
    const updatedFilteredProducts = productsApi.filter((item) => {
      if (newCategory === "all") return true; // Show all products
      return item.productCategory === newCategory; // Filter by category
    });
    // Update the displayed products
    setFilteredProducts(updatedFilteredProducts);
  };

  return (
    <Box className="sectionPadding" id="products">
      <h2 className="main-title">منتجاتنا</h2>
      <Box className="container">
        <Stack
          direction={"row"}
          sx={{
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 3,
          }}>
          <ToggleButtonGroup
            value={product}
            exclusive
            onChange={handleProducts}
            sx={{
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "center",
              gap: 2,
              ".myButton": {
                border: "1px solid #000",
                borderRadius: "6px",
                color: "var(--main-color)",
                fontSize: "20px",
                "&:hover": {
                  border: "1px solid #fff",
                  color: "#fff",
                  backgroundColor: "var(--main-color)",
                },
              },
              ".Mui-selected": {
                border: "1px solid #fff !important",
                color: "#fff !important",
                backgroundColor: "var(--main-color) !important",
              },
            }}>
            <ToggleButton className="myButton" value="all">
              كل المنتجات
            </ToggleButton>
            <ToggleButton className="myButton" value="men">
              القشاطى
            </ToggleButton>
            <ToggleButton className="myButton" value="women">
              النواشف
            </ToggleButton>
          </ToggleButtonGroup>
        </Stack>
        <Stack
          direction={"row"}
          sx={{
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 2,
          }}>
          <AnimatePresence>
            {filteredProducts.length > 0 ? (
              filteredProducts.map((item, index) => (
                <motion.article
                  layout
                  initial={{ transform: "scale(0)" }}
                  animate={{ transform: "scale(1)" }}
                  transition={{ type: "spring", damping: 8, stiffness: 50 }}
                  key={index}
                  className="card">
                  <Card
                    sx={{
                      position: "relative",
                      maxWidth: 300,
                      mt: 4,
                      "&:hover ": {
                        border: "1px solid var(--main-color)",
                        ".MuiCardMedia-root": {
                          rotate: "1deg",
                          scale: "1.1",
                          transition: "0.3s",
                        },
                      },
                    }}>
                    <CardMedia
                      component="img"
                      alt={item.productTitle}
                      height="200"
                      image={item.img0}
                    />
                    <CardContent sx={{ textAlign: "center" }}>
                      <Typography gutterBottom variant="h6" component="div">
                        {item.productTitle}
                      </Typography>
                      {item.discount === "yes" ? (
                        <Box>
                          <Typography gutterBottom variant="h6" component="p">
                            <del style={{ color: "#D23F57" }}>
                              Dhs {item.productPrice}
                            </del>
                            <ins style={{ textDecoration: "none" }}>
                              {" "}
                              Dhs{" "}
                              {(
                                item.productPrice *
                                (item.discountValue / 100)
                              ).toFixed(2)}{" "}
                            </ins>
                          </Typography>
                          <Typography
                            variant="h6"
                            sx={{
                              position: "absolute",
                              top: "0",
                              right: "0",
                              bgcolor: "#D23F57",
                              color: "#fff",
                            }}>
                            خصم %{item.discountValue}
                          </Typography>
                        </Box>
                      ) : (
                        <Typography gutterBottom variant="h6" component="p">
                          Dhs {item.productPrice}
                        </Typography>
                      )}
                    </CardContent>
                    <CardActions
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}>
                      <Button
                        onClick={() => handleClickOpen(item)}
                        sx={{
                          width: "100%",
                          textTransform: "capitalize",
                          border: "1px solid #000",
                          borderRadius: "6px",
                          color: "var(--main-color)",
                          fontSize: "18px",
                          padding: "5px 15px ",
                          "&:hover": {
                            color: "#fff",
                            bgcolor: "var(--main-color)",
                            borderColor: "#fff",
                          },
                        }}
                        size="large">
                        تفاصيل
                      </Button>
                    </CardActions>
                  </Card>
                </motion.article>
              ))
            ) : (
              <Typography
                className="main-title"
                sx={{ color: "red" }}
                variant="h6">
                لا توجد منتجات متاحة
              </Typography> // Message for no products
            )}
          </AnimatePresence>
        </Stack>
        <Dialog
          sx={{
            direction: "ltr",
            ".MuiPaper-root": {
              minWidth: { xs: "100%", md: 800 },
            },
          }}
          open={open}>
          <DialogContent>
            <IconButton
              sx={{
                position: "absolute",
                top: 0,
                right: 10,
                "&:hover": {
                  color: "#D23F57",
                  rotate: "180deg",
                  transition: "0.3s",
                },
              }}
              onClick={handleClose}>
              <CloseIcon />
            </IconButton>
            {selectedProduct && (
              <ProductDetails selectedProduct={selectedProduct} />
            )}
          </DialogContent>
        </Dialog>
      </Box>
    </Box>
  );
}
