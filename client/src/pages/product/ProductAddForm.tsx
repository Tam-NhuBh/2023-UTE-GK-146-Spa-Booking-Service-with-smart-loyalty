import {
  Box,
  Paper,
  Typography,
  Button,
  TextField,
  TextareaAutosize,
  InputAdornment,
} from "@mui/material";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import Validation from "../../../../server/src/models/productValidation";
import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

type Product = {
  idProduct: string;
  nameProduct: string;
  description: string;
  price: number;
  importDate: string;
  quantity: number;
  brand: string;
  status: number;
  img: string;
  productError?: string; // Add this line
};
type FormErrors = {
  [key in keyof Product]?: string;
};

const ProductAddForm = () => {
  const [values, setValues] = useState<Product>({
    idProduct: "",
    nameProduct: "",
    description: "",
    price: 0,
    importDate: "",
    quantity: 0,
    brand: "",
    status: 1,
    img: "",
  });
  const [error, setError] = useState<FormErrors>({});
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError(Validation(values));
    // Wait for the state to update
    await new Promise((resolve) => setTimeout(resolve, 0));
    if (
      Object.values(error).every((value) => value === "") &&
      Object.values(values).every((value) => value !== "")
    ) {
      try {
        const res = await Axios.post(
          "http://localhost:8000/admin/product/checkProductID",
          { idProduct: values.idProduct }
        );

        if (res.data.Status === "Success") {
          const addRes = await Axios.post(
            "http://localhost:8000/admin/product/add",
            values
          );

          if (addRes.data.Status === "Success") {
            navigate("/admin/product/list");
          } else {
            alert("Error");
          }
        } else if (res.data.productError) {
          setValues((prevValues) => ({
            ...prevValues,
            productError: res.data.productError,
          }));
        }
      } catch (err) {
        console.log("Error in Axios request:", err);
      }
    }
  };

  return (
    <Paper elevation={2}>
      <Box
        px={8}
        py={6}
        display={"flex"}
        width={"100%"}
        flexDirection={"column"}
        alignItems={"center"}
      >
        <Typography variant="h6">Thêm Sản Phẩm</Typography>
        <Box mt={4}>
          <form onSubmit={handleSubmit}>
            <Box>
              <TextField
                size="small"
                sx={{ width: 150 }}
                label="Product ID"
                onChange={(e) =>
                  setValues({ ...values, idProduct: e.target.value })
                }
                value={values.idProduct}
              />
              <Box mt={1}>
                {error.idProduct && (
                  <span className="text-danger">{error.idProduct}</span>
                )}
                {values.productError && (
                  <span className="text-danger">{values.productError}</span>
                )}
              </Box>
            </Box>
            <Box mt={2}>
              <TextField
                size="small"
                sx={{ width: 300 }}
                label="Product Name"
                type="text"
                onChange={(e) => {
                  setValues({ ...values, nameProduct: e.target.value });
                }}
                value={values.nameProduct}
              />
              <Box mt={1}>
                {error.nameProduct && (
                  <span className="text-danger">{error.nameProduct}</span>
                )}
              </Box>
            </Box>
            <Box mt={2}>
              <TextareaAutosize
                minRows={3}
                maxRows={10}
                style={{ width: 400, border: "1px solid gray" }}
                placeholder="Product Description"
                onChange={(e) => {
                  setValues({ ...values, description: e.target.value });
                }}
                value={values.description}
              />
              <Box mt={1}>
                {error.description && (
                  <span className="text-danger">{error.description}</span>
                )}
              </Box>
            </Box>
            <Box mt={2}>
              <TextField
                size="small"
                sx={{ width: 400 }}
                type="date"
                onChange={(e) =>
                  setValues({
                    ...values,
                    importDate: e.target.value + " 00:00:00",
                  })
                }
                inputProps={{
                  min: "1900-01-01 00:00:00",
                  max: new Date().toISOString().split("T")[0],
                }}
                InputLabelProps={{
                  shrink: true,
                }}
                placeholder="Import Date"
              />
              <Box mt={1}>
                {error.importDate && (
                  <span className="text-danger">{error.importDate}</span>
                )}
              </Box>
            </Box>
            <Box mt={2}>
              <TextField
                size="small"
                sx={{ width: 400 }}
                label="Price"
                // type="text"
                onChange={(e) => {
                  const priceValue = parseFloat(e.target.value);
                  setValues({
                    ...values,
                    price: isNaN(priceValue) ? 0 : priceValue,
                  });
                }}
                value={values.price.toString()} // Convert number to string for TextField
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">$</InputAdornment>
                  ),
                }}
              />
              <Box mt={1}>
                {error.price && (
                  <span className="text-danger">{error.price}</span>
                )}
              </Box>
            </Box>
            <Box mt={2}>
              <TextField
                size="small"
                sx={{ width: 400 }}
                label="Quantity"
                type="text"
                onChange={(e) => {
                  const quantityValue = parseFloat(e.target.value);
                  setValues({
                    ...values,
                    quantity: isNaN(quantityValue) ? 0 : quantityValue,
                  });
                }}
                value={values.quantity.toString()}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start"></InputAdornment>
                  ),
                }}
              />
              <Box mt={1}>
                {error.quantity && (
                  <span className="text-danger">{error.quantity}</span>
                )}
              </Box>
            </Box>
            <Box mt={2}>
              <TextField
                size="small"
                sx={{ width: 400 }}
                label="Brand"
                type="text"
                onChange={(e) => {
                  setValues({ ...values, brand: e.target.value });
                }}
                value={values.brand}
              />
              <Box mt={1}>
                {error.brand && (
                  <span className="text-danger">{error.brand}</span>
                )}
              </Box>
            </Box>
            <Box mt={2}>
              <TextField
                size="small"
                sx={{ width: 400 }}
                label="Image link"
                type="text"
                onChange={(e) => {
                  setValues({ ...values, img: e.target.value });
                }}
                value={values.img}
              />
              <Box mt={1}>
                {error.img && <span className="text-danger">{error.img}</span>}
              </Box>
            </Box>
            <Box mt={2}>
              <RadioGroup
                aria-label="status"
                name="status"
                defaultValue="0"
                onChange={(e) => {
                  setValues({
                    ...values,
                    status: parseInt(e.target.value, 10),
                  });
                }}
                value={values.status.toString()}
              >
                <FormControlLabel
                  value="1"
                  control={<Radio />}
                  label="In Stock"
                />
                <FormControlLabel
                  value="0"
                  control={<Radio />}
                  label="Out Of Stock"
                />
              </RadioGroup>
            </Box>
            <Box
              mt={2}
              textAlign={"center"}
            >
              <Button
                variant="contained"
                type="submit"
              >
                Thêm Sản Phẩm
              </Button>
            </Box>
          </form>
        </Box>
      </Box>
    </Paper>
  );
};

export default ProductAddForm;
