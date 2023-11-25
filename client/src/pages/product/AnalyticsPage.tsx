import { Box, Paper, Typography, Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

const rows = [
  {
    id: 1,
    code: "SP01",
    name: "Quạt điện thông minh",
    type: "Đồ điện",
    price: "650.000 (VNĐ)",
    note: "Quạt điện thông minh thế hệ mới",
    img: "https://thegioidodung.vn/wp-content/uploads/2023/04/quat-cay-lung-tico-b400-Viet-Nam.webp",
  },
  {
    id: 2,
    code: "SP02",
    name: "Quạt điện thông minh",
    type: "Đồ điện",
    price: "650.000 (VNĐ)",
    note: "Quạt điện thông minh thế hệ mới",
    img: "https://thegioidodung.vn/wp-content/uploads/2023/04/quat-cay-lung-tico-b400-Viet-Nam.webp",
  },
  {
    id: 3,
    code: "SP03",
    name: "Quạt điện thông minh",
    type: "Đồ điện",
    price: "650.000 (VNĐ)",
    note: "Quạt điện thông minh thế hệ mới",
    img: "https://thegioidodung.vn/wp-content/uploads/2023/04/quat-cay-lung-tico-b400-Viet-Nam.webp",
  },
  {
    id: 4,
    code: "SP04",
    name: "Quạt điện thông minh",
    type: "Đồ điện",
    price: "650.000 (VNĐ)",
    note: "Quạt điện thông minh thế hệ mới",
    img: "https://thegioidodung.vn/wp-content/uploads/2023/04/quat-cay-lung-tico-b400-Viet-Nam.webp",
  },
];

const columns = [
  { field: "id", headerName: "Id", width: 50 },
  { field: "code", headerName: "Mã sản phẩm", width: 100 },
  { field: "name", headerName: "Tên sản phẩm", width: 200 },
  { field: "type", headerName: "Mã loại sản phẩm", width: 150 },
  { field: "price", headerName: "Đơn giá", width: 150 },
  { field: "note", headerName: "Ghi chú", width: 300 },
  {
    field: "img",
    headerName: "Hình ảnh",
    width: 70,
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

const AnalyticsPage = (props: Props) => {
  return (
    <Paper elevation={2}>
      <Box px={8} py={6}>
        <Typography variant="h6">Danh mục sản phẩm</Typography>
        <Box mt={4} height={"50vh"}>
          <DataGrid
            rows={rows}
            columns={columns}
            hideFooter={true}
            rowHeight={60}
          />
        </Box>
      </Box>
    </Paper>
  );
};

export default AnalyticsPage;
