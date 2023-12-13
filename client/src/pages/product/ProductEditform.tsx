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
import { useNavigate, useParams } from "react-router-dom";

type Product = {
  nameProduct: string;
  description: string;
  price: number;
  quantity: number;
  brand: string;
  status: number;
  img: string;
  productError?: string; // Add this line
};
type FormErrors = {
  [key in keyof Product]?: string;
};

const ProductEditForm = () => {
  const { id } = useParams();
  const [values, setValues] = useState<Product>({
    nameProduct: "",
    description: "",
    price: 0,
    quantity: 0,
    brand: "",
    status: 1,
    img: "",
  });
  const [error, setError] = useState<FormErrors>({});
  const navigate = useNavigate();

  useEffect(() => {
    Axios.get(`http://localhost:8000/admin/product/${id}`)
      .then((res) => {
        setValues({
          ...values,
          nameProduct: res.data.Result[0].nameProduct,
          description: res.data.Result[0].description,
          price: res.data.Result[0].price.toString(),
          quantity: res.data.Result[0].quantity.toString(),
          brand: res.data.Result[0].brand,
          status: res.data.Result[0].status,
          img: res.data.Result[0].img,
        });
      })
      .catch((err) => console.log(err));
  }, [id]);

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
        const res = await Axios.put(
          `http://localhost:8000/admin/product/edit/${id}`,
          values
        );
        if (res.data.Status === "Success") {
          navigate("/admin/product/list");
        } else {
          alert("Error");
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
        <Typography variant="h6">Cập Nhật Sản Phẩm</Typography>
        <Box mt={4}>
          <form onSubmit={handleSubmit}>
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
                Chỉnh Sửa Sản Phẩm
              </Button>
            </Box>
          </form>
        </Box>
      </Box>
    </Paper>
  );
};

export default ProductEditForm;
