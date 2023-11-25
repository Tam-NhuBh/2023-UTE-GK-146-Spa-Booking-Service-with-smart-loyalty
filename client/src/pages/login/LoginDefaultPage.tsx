import { Box, Paper, Typography, Button, TextField } from "@mui/material";

type Props = {};

const LoginDefaultPage = (props: Props) => {
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
        <Typography variant="h6">Đăng nhập hệ thống</Typography>
        <Box mt={4}>
          <Box>
            <TextField size="small" sx={{ width: 400 }} label="username" />
          </Box>
          <Box mt={2}>
            <TextField
              size="small"
              sx={{ width: 400 }}
              label="password"
              type="password"
            />
          </Box>
          <Box mt={2} textAlign={"center"}>
            <Button variant="contained">Đăng nhập</Button>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
};

export default LoginDefaultPage;
