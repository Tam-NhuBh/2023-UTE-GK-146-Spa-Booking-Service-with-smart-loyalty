import { Box, Paper, Typography, Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React, { useEffect, useState } from "react";
import Axios from "axios";

type Customer = {
  idUser: number;
  fullname: string;
  address: string;
  city: string;
  phone: string;
  email: string;
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
        <Button variant="contained" size="small" color="secondary">
          Cập nhật
        </Button>
        <Button variant="contained" size="small" color="error">
          Xóa
        </Button>
      </Box>
    ),
  },
];

type Props = {};

const GuestDefaultPage = (props: Props) => {
  const [customers, setCustomers] = useState<Customer[]>([]);
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

  return (
    <Paper elevation={2}>
      <Box px={8} py={6}>
        <Typography variant="h6">Danh sách khách hàng</Typography>
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
