import { Box, Paper, Typography, Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

const rows = [
  {
    id: 1,
    username: "admin",
    email: "admin@gmail.com",
    password: "123",
  },
  {
    id: 2,
    username: "nhanviena",
    email: "nhanviena@gmail.com",
    password: "123",
  },
  {
    id: 3,
    username: "khachhanga",
    email: "khachhanga@gmail.com",
    password: "123",
  },
];

const columns = [
  { field: "id", headerName: "Id", width: 50 },
  { field: "username", headerName: "Tên tài khoản", width: 300 },
  { field: "email", headerName: "Email", width: 300 },
  { field: "password", headerName: "Mật khẩu", width: 300 },
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

const AccountDefaultPage = (props: Props) => {
  return (
    <Paper elevation={2}>
      <Box px={8} py={6}>
        <Typography variant="h6">Danh sách tài khoản</Typography>
        <Box mt={4} height={"50vh"}>
          <DataGrid rows={rows} columns={columns} hideFooter={true} />
        </Box>
      </Box>
    </Paper>
  );
};

export default AccountDefaultPage;
