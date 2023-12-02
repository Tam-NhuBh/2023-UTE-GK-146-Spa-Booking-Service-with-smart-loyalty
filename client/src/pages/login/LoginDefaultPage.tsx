import { Box, Paper, Typography, Button, TextField } from "@mui/material";
import React from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

type Props = {};

const LoginDefaultPage = (props: Props) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    Axios.get("http://localhost:8000/logout")
      .then((res) => {
        navigate("/");
      })
      .catch((err) => console.log(err));
  };
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
        <Typography variant="h6">Đăng xuất khỏi hệ thống</Typography>
        <Box mt={4}>
          <Box mt={1} textAlign={"center"}>
            <Button onClick={handleLogout} variant="contained">
              Đăng xuất
            </Button>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
};

export default LoginDefaultPage;
