import { Box, Paper, Typography, Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

const rows = [
  {
    id: 1,
    code: "NV001",
    name: "Nhân viên A",
    address: "Hà Nội",
    phone: "0123456789",
    bank: "9876543210",
    email: "nva@gmail.com",
  },
  {
    id: 2,
    code: "NV002",
    name: "Nhân viên B",
    address: "Sài gòn",
    phone: "0123456789",
    bank: "9876543210",
    email: "nvb@gmail.com",
  },
  {
    id: 3,
    code: "NV003",
    name: "Nhân viên B",
    address: "Đà Nẵng",
    phone: "0123456789",
    bank: "9876543210",
    email: "nvc@gmail.com",
  },
  {
    id: 4,
    code: "NV004",
    name: "Nhân viên D",
    address: "Cần thơ",
    phone: "0123456789",
    bank: "9876543210",
    email: "nvd@gmail.com",
  },
];

const columns = [
  { field: "id", headerName: "Id", width: 50 },
  { field: "code", headerName: "Mã nhân viên", width: 100 },
  { field: "name", headerName: "Tên nhân viên", width: 200 },
  { field: "address", headerName: "Địa chỉ", width: 150 },
  { field: "phone", headerName: "Số điện thoại", width: 150 },
  { field: "email", headerName: "Email", width: 300 },
  {
    field: "action",
    headerName: "Hành động",
    width: 300,
    renderCell: (params: any) => (
      <Box display={"flex"} gap={2} alignItems={"center"}>
        <Button variant="contained" size="small">
          Thêm mới
        </Button>
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

const StaffDefaultPage = (props: Props) => {
  return (
    <Paper elevation={2}>
      <Box px={8} py={6}>
        <Typography variant="h6">Danh sách nhân viên</Typography>
        <Box mt={4} height={"50vh"}>
          <DataGrid rows={rows} columns={columns} hideFooter={true} />
        </Box>
      </Box>
    </Paper>
  );
};

export default StaffDefaultPage;
