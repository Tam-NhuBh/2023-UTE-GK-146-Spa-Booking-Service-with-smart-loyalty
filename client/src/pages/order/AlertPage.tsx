import { Box, Paper, Typography, Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

const rows = [
  {
    id: 1,
    code: "DH001",
    staff: "NV001",
    day: "20/11/2023",
  },
  {
    id: 2,
    code: "DH002",
    staff: "NV002",
    day: "21/11/2023",
  },
  {
    id: 3,
    code: "DH003",
    staff: "NV003",
    day: "20/11/2023",
  },
  {
    id: 4,
    code: "DH004",
    staff: "NV004",
    day: "21/11/2023",
  },
];

const columns = [
  { field: "id", headerName: "Id", width: 50 },
  { field: "code", headerName: "Mã đơn hàng", width: 200 },
  { field: "staff", headerName: "Mã nhân viên", width: 200 },
  { field: "day", headerName: "Ngày bán", width: 150 },
  {
    field: "action",
    headerName: "Hành động",
    width: 500,
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
        <Button variant="contained" size="small" color="success">
          Chi tiết
        </Button>
      </Box>
    ),
  },
];

type Props = {};

const AlertPage = (props: Props) => {
  return (
    <Paper elevation={2}>
      <Box px={8} py={6}>
        <Typography variant="h6">Danh sách đơn hàng</Typography>
        <Box mt={4} height={"50vh"}>
          <DataGrid rows={rows} columns={columns} hideFooter={true} />
        </Box>
      </Box>
    </Paper>
  );
};

export default AlertPage;
