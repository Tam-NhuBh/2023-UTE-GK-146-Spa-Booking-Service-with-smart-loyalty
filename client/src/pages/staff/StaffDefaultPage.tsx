import { Box, Paper, Typography, Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React, { useState, useEffect } from "react";
import Axios from "axios";

type Employee = {
  idEmployee: string;
  fullname: string;
  address: string;
  city: string;
  phone: string;
  email: string;
};

type Props = {};

const StaffDefaultPage = (props: Props) => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  useEffect(() => {
    Axios.get("http://localhost:8000/admin/staff/list")
      .then((res) => {
        if (res.data.Status === "Success") {
          setEmployees(res.data.data);
        } else {
          console.error("Error fetching employees:", res.data.message);
        }
      })
      .catch((error) => {
        console.error("Error fetching employees:", error);
      });
  }, []);
  const getRowId = (row: Employee) => row.idEmployee;
  const handleDelete = (id: string) => {
    if (window.confirm("Are you sure you want to delete this employee?")) {
      Axios.delete(`http://localhost:8000/admin/staff/list/${id}`)
        .then((res) => {
          if (res.data.Status === "Success") {
            // Refresh the employee list after deletion
            Axios.get("http://localhost:8000/admin/staff/list")
              .then((res) => {
                if (res.data.Status === "Success") {
                  setEmployees(res.data.data);
                } else {
                  console.error("Error fetching employees:", res.data.message);
                }
              })
              .catch((error) => {
                console.error("Error fetching employees:", error);
              });
          } else {
            console.error("Error deleting employee:", res.data.message);
          }
        })
        .catch((error) => {
          console.error("Error deleting employee:", error);
        });
    }
  };

  const columns = [
    { field: "idEmployee", headerName: "ID", width: 100 },
    { field: "fullname", headerName: "Tên Nhân viên", width: 200 },
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
          <Button
            variant="contained"
            size="small"
            color="error"
            onClick={() => handleDelete(params.row.idEmployee as string)}
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
          <Typography variant="h6">Danh sách nhân viên</Typography>
          {/* <Button variant="contained" size="small">
            Thêm mới
          </Button> */}
        </Box>
        <Box mt={4} height={"50vh"}>
          <DataGrid
            rows={employees}
            columns={columns}
            hideFooter={true}
            getRowId={getRowId}
          />
        </Box>
      </Box>
    </Paper>
  );
};

export default StaffDefaultPage;
