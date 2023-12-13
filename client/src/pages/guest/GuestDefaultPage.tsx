import { Box, Paper, Typography, Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";

type Customer = {
  idUser: number;
  fullname: string;
  address: string;
  city: string;
  phone: string;
  email: string;
};



const GuestDefaultPage = () => {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    Axios.get("http://localhost:8000/admin/customer/list")
      .then((res) => {
        if (res.data.Status === "Success") {
          setCustomers(res.data.data);
        } else {
          console.error("Error fetching customers:", res.data.message);
        }
      })
      .catch((error) => {
        console.error("Error fetching customers:", error);
      });
  }, []);

  const getRowId = (row: Customer) => row.idUser;

  const handleDelete = (id: string) => {
    if (window.confirm("Are you sure you want to delete this customer?")) {
      Axios.delete(`http://localhost:8000/admin/customer/list/${id}`)
        .then((res) => {
          if (res.data.Status === "Success") {
            // Refresh the employee list after deletion
            Axios.get("http://localhost:8000/admin/customer/list")
              .then((res) => {
                if (res.data.Status === "Success") {
                  setCustomers(res.data.data);
                } else {
                  console.error("Error fetching customers:", res.data.message);
                }
              })
              .catch((error) => {
                console.error("Error fetching customers:", error);
              });
          } else {
            console.error("Error deleting customer:", res.data.message);
          }
        })
        .catch((error) => {
          console.error("Error deleting customer:", error);
        });
    }
  };
  const handleAddNew = () => {
    navigate("/admin/customer/register");
  };
 const handleEdit = (id: string) => {
   navigate(`/admin/customer/edit/${id}`);
  };
  
  const columns = [
    { field: "idUser", headerName: "ID", width: 100 },
    { field: "fullname", headerName: "Tên khách hàng", width: 200 },
    { field: "address", headerName: "Địa chỉ", width: 200 },
    { field: "city", headerName: "Thành phố", width: 100 },
    { field: "phone", headerName: "Số điện thoại", width: 120 },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "action",
      headerName: "Hành động",
      width: 300,
      renderCell: (params: any) => (
        <Box display={"flex"} gap={2} alignItems={"center"}>
          <Button
            variant="contained"
            size="small"
            color="secondary"
            onClick={() => handleEdit(params.row.idUser as string)}
          >
            Cập nhật
          </Button>
          <Button
            variant="contained"
            size="small"
            color="error"
            onClick={() => handleDelete(params.row.idUser as string)}
          >
            Xóa
          </Button>
        </Box>
      ),
    },
  ];

  return (
    <Paper elevation={2}>
      <Box px={8} py={6}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h6">Danh sách khách hàng</Typography>
          <Button variant="contained" size="small" onClick={handleAddNew}>
            Thêm mới
          </Button>
        </Box>
        <Box mt={4} height={"50vh"}>
          <DataGrid
            rows={customers}
            columns={columns}
            hideFooter={true}
            getRowId={getRowId}
          />
        </Box>
      </Box>
    </Paper>
  );
};

export default GuestDefaultPage;
