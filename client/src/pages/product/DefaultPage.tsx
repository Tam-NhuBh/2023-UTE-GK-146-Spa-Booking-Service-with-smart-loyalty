import { Box, Paper, Typography, Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";

type Product = {
  idProduct: string;
  nameProduct: string;
  price: Float32Array;
  quantity: Int16Array;
  brand: string;
  img: string;
};

type Props = {};

const DefaultPage = (props: Props) => {
  const [products, setProducts] = useState<Product[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    Axios.get("http://localhost:8000/admin/product/list")
      .then((res) => {
        if (res.data.Status === "Success") {
          setProducts(res.data.data);
        } else {
          console.error("Error fetching products:", res.data.message);
        }
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  const getRowId = (row: Product) => row.idProduct;

  const handleDelete = (id: string) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      Axios.delete(`http://localhost:8000/admin/product/list/${id}`)
        .then((res) => {
          if (res.data.Status === "Success") {
            // Refresh the employee list after deletion
            Axios.get("http://localhost:8000/admin/product/list")
              .then((res) => {
                if (res.data.Status === "Success") {
                  setProducts(res.data.data);
                } else {
                  console.error("Error fetching products:", res.data.message);
                }
              })
              .catch((error) => {
                console.error("Error fetching products:", error);
              });
          } else {
            console.error("Error deleting products:", res.data.message);
          }
        })
        .catch((error) => {
          console.error("Error deleting products:", error);
        });
    }
  };

  const handleAddNew = () => {
    navigate("/admin/product/add");
  };

  const handleEdit = (id: string) => {
    navigate(`/admin/product/edit/${id}`);
  };

  const columns = [
    { field: "idProduct", headerName: "ID", width: 50 },
    { field: "nameProduct", headerName: "Tên sản phẩm", width: 200 },
    { field: "price", headerName: "Giá sản phẩm", width: 120 },
    { field: "quantity", headerName: "Số lượng", width: 100 },
    { field: "brand", headerName: "Thương hiệu", width: 150 },
    {
      field: "img",
      headerName: "Hình ảnh",
      width: 90,
      renderCell: (params: any) => (
        <Box
          component={"img"}
          src={params.row.img}
          width={50}
          height={50}
          sx={{ objectFit: "cover" }}
        />
      ),
    },
    {
      field: "action",
      headerName: "Hành động",
      width: 300,
      renderCell: (params: any) => (
        <Box
          display={"flex"}
          gap={2}
          alignItems={"center"}
        >
          <Button
            variant="contained"
            size="small"
            color="secondary"
            onClick={() => handleEdit(params.row.idProduct as string)}
          >
            Cập nhật
          </Button>
          <Button
            variant="contained"
            size="small"
            color="error"
            onClick={() => handleDelete(params.row.idProduct as string)}
          >
            Xóa
          </Button>
        </Box>
      ),
    },
  ];

  return (
    <Paper elevation={2}>
      <Box
        px={8}
        py={6}
      >
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="h6">Danh sách sản phẩm</Typography>
          <Button
            variant="contained"
            size="small"
            onClick={handleAddNew}
          >
            Thêm mới
          </Button>
        </Box>
        <Box
          mt={4}
          height={"50vh"}
        >
          <DataGrid
            rows={products}
            columns={columns}
            hideFooter={true}
            rowHeight={60}
            getRowId={getRowId}
          />
        </Box>
      </Box>
    </Paper>
  );
};

export default DefaultPage;
