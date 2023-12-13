import { Box, Paper, Typography, Button, TextField } from "@mui/material";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import Validation from "../../../../server/src/models/signupValidation";
import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

type Employee = {
  fullName: string;
  birthDate: string;
  address: string;
  city: string;
  phone: string;
  gender: string;
  emailError?: string; // Add this line
};
type FormErrors = {
  [key in keyof Employee]?: string;
};

const StaffEditForm = () => {
  const { id } = useParams();
  const [values, setValues] = useState<Employee>({
    fullName: "",
    birthDate: "",
    address: "",
    city: "",
    phone: "",
    gender: "female",
  });
  const [error, setError] = useState<FormErrors>({});
  const navigate = useNavigate();

  useEffect(() => {
    Axios.get(`http://localhost:8000/admin/staff/${id}`)
      .then((res) => {
        setValues({
          ...values,
          fullName: res.data.Result[0].fullname,
          birthDate: res.data.Result[0].birthday.substring(0, 10),
          address: res.data.Result[0].address,
          city: res.data.Result[0].city,
          phone: res.data.Result[0].phone,
          gender: res.data.Result[0].gender,
        });
      })
      .catch((err) => console.log(err));
  }, [id]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setError(Validation(values));
    if (
      error.fullName === "" &&
      error.birthDate === "" &&
      error.address === "" &&
      error.city === "" &&
      error.phone === ""
    ) {
      Axios.put(`http://localhost:8000/admin/staff/edit/${id}`, values)
        .then((res) => {
          if (res.data.Status === "Success") {
            navigate("/admin/staff/list");
          } else {
            alert("Error");
          }
        })
        .catch((err) => console.log(err));
    };
  }

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
        <Typography variant="h6">Chỉnh Sửa Nhân Viên</Typography>
        <Box mt={4}>
          <form onSubmit={handleSubmit}>
            <Box>
              <TextField
                size="small"
                sx={{ width: 400 }}
                label="Full Name"
                onChange={(e) =>
                  setValues({ ...values, fullName: e.target.value })
                }
                value={values.fullName}
              />
              <Box mt={1}>
                {error.fullName && (
                  <span className="text-danger">{error.fullName}</span>
                )}
              </Box>
            </Box>
            <Box mt={2}>
              <TextField
                size="small"
                sx={{ width: 400 }}
                type="date"
                onChange={(e) =>
                  setValues({
                    ...values,
                    birthDate: e.target.value + " 00:00:00",
                  })
                }
                inputProps={{
                  min: "1900-01-01 00:00:00",
                  max: new Date().toISOString().split("T")[0],
                }}
              />
              <Box mt={1}>
                {error.birthDate && (
                  <span className="text-danger">{error.birthDate}</span>
                )}
              </Box>
            </Box>
            <Box mt={2}>
              <TextField
                size="small"
                sx={{ width: 400 }}
                label="Address"
                type="text"
                onChange={(e) => {
                  setValues({ ...values, address: e.target.value });
                }}
                value={values.address}
              />
              <Box mt={1}>
                {error.address && (
                  <span className="text-danger">{error.address}</span>
                )}
              </Box>
            </Box>
            <Box mt={2}>
              <TextField
                size="small"
                sx={{ width: 400 }}
                label="city"
                type="text"
                onChange={(e) => {
                  setValues({ ...values, city: e.target.value });
                }}
                value={values.city}
              />
              <Box mt={1}>
                {error.city && (
                  <span className="text-danger">{error.city}</span>
                )}
              </Box>
            </Box>
            <Box mt={2}>
              <TextField
                size="small"
                sx={{ width: 400 }}
                label="Phone Number"
                type="text"
                onChange={(e) => {
                  setValues({ ...values, phone: e.target.value });
                }}
                value={values.phone}
              />
              <Box mt={1}>
                {error.phone && (
                  <span className="text-danger">{error.phone}</span>
                )}
              </Box>
            </Box>
            <Box mt={2}>
              <RadioGroup
                aria-label="gender"
                name="gender"
                defaultValue="female"
                onChange={(e) => {
                  setValues({ ...values, gender: e.target.value });
                }}
                value={values.gender}
              >
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Nam"
                />
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Nữ"
                />
              </RadioGroup>
            </Box>
            <Box mt={2} textAlign={"center"}>
              <Button variant="contained" type="submit">
                Chỉnh Sửa
              </Button>
            </Box>
          </form>
        </Box>
      </Box>
    </Paper>
  );
};

export default StaffEditForm;
