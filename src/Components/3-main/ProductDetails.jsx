import { Box, Stack, Typography } from "@mui/material";

import PropTypes from "prop-types";
import { useState } from "react";

export default function ProductDetails({ selectedProduct }) {
  const [selsetedImg, setSelectedImag] = useState(selectedProduct.img0);
  return (
    <Stack
      direction={"row"}
      sx={{
        gap: 3,
        alignItems: "center",
        flexDirection: { xs: "column", sm: "row" },
        minWidth: { sm: "100%", lg: "90%" },
      }}>
      <Box>
        <img width={300} src={selsetedImg} alt={selectedProduct.productTitle} />
      </Box>
      <Box sx={{ textAlign: { xs: "center", sm: "left" } }}>
        <Typography
          variant="h4"
          sx={{
            textTransform: "uppercase",
            fontSize: { sm: "24px", md: "34px" },
          }}>
          {selectedProduct.productCategory}&apos;s Fashion
        </Typography>
        {selectedProduct.discount === "yes" ? (
          <Box>
            <Typography gutterBottom variant="h6" component="p">
              <del style={{ color: "#D23F57" }}>
                Dhs {selectedProduct.productPrice}
              </del>
              <ins
                style={{ textDecoration: "none", color: "var(--main-color)" }}>
                {" "}
                Dhs{" "}
                {(
                  selectedProduct.productPrice *
                  (selectedProduct.discountValue / 100)
                ).toFixed(2)}{" "}
              </ins>
            </Typography>
            <Box
              sx={{
                backgroundColor: "#D23F57",
                padding: "3px 10px",
                color: "#fff",
                textAlign: "center",
                mb: 1,
              }}>
              SALE {selectedProduct.discountValue}%
            </Box>
          </Box>
        ) : (
          <Typography
            variant="h5"
            sx={{
              my: 0.5,
              color: "var(--main-color)",
            }}>
            Dhs {selectedProduct.productPrice}
          </Typography>
        )}

        <Typography sx={{ color: "rgb(174, 180, 190)", my: 0.5 }}>
          {selectedProduct.productDescription}
        </Typography>
        <Stack
          direction={"row"}
          flexWrap={"wrap"}
          justifyContent={{ xs: "center", sm: "left" }}>
          {[
            selectedProduct.img0,
            selectedProduct.img1,
            selectedProduct.img2,
            selectedProduct.img3,
          ].map((imgSrc, index) => {
            return (
              imgSrc && (
                <Box key={index}>
                  <img
                    onClick={() => {
                      setSelectedImag(imgSrc);
                    }}
                    width={100}
                    src={imgSrc}
                    alt={selectedProduct.productTitle}
                    style={{ marginRight: "10px" }}
                  />
                </Box>
              )
            );
          })}
        </Stack>
      </Box>
    </Stack>
  );
}

ProductDetails.propTypes = {
  selectedProduct: PropTypes.shape({
    // Ensure selectedProduct is an object with required properties
    productTitle: PropTypes.string.isRequired,
    productPrice: PropTypes.number.isRequired,
    productDescription: PropTypes.string.isRequired,
    productCategory: PropTypes.string.isRequired,
    discount: PropTypes.string.isRequired,
    discountValue: PropTypes.number.isRequired,
    img0: PropTypes.string,
    img1: PropTypes.string,
    img2: PropTypes.string,
    img3: PropTypes.string,
  }).isRequired,
};
