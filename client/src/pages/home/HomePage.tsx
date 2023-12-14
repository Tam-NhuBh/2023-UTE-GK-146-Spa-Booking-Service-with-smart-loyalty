import { Box, Paper, Typography, Button } from "@mui/material";
import React from "react";
type Props = {};

const HomePage = (props: Props) => {
  return (
    <Paper elevation={2}>
      <Box px={8} py={6}>
        <Typography variant="h6">Thống kê chi tiết</Typography>
        {/* <Box mt={4} display={"flex"} gap={4}>
          <Button variant="contained" size="large" fullWidth>
            8 Sản Phẩm
          </Button>
          <Button variant="contained" size="large" fullWidth color="error">
            8 Hóa đơn
          </Button>
          <Button variant="contained" size="large" fullWidth color="success">
            8 Khách hàng
          </Button>
          <Button variant="contained" size="large" fullWidth color="secondary">
            8 Nhân viên
          </Button>
        </Box> */}
      </Box>
    </Paper>
  );
};

export default HomePage;
