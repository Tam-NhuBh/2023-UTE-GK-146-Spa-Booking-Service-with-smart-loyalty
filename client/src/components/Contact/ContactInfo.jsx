import { Box, Grid, Typography, styled } from "@mui/material";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";

const Wrapper = styled(Box)({
  boxShadow: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.22)",
  padding: "5px",
});

const Input = styled("input")({
  margin: "5px 0px",
  boxShadow: "inset 0 1px 2px rgba(0,0,0,0)",
  borderRadius: "3px",
  border: "1px solid #ddd",
  padding: "0 0.75em",
  height: "2.507em",
  fontSize: ".97em",
  backgroundColor: "#fff",
  color: "#333",
  width: "100%",
  outline: "none",
  "&:focus": {
    borderColor: "#f8b742",
    boxShadow:
      "inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(248, 183, 66, 0.6)",
  },
});

const TextArea = styled("textarea")({
  margin: "5px 0px",
  boxShadow: "inset 0 1px 2px rgba(0,0,0,0)",
  borderRadius: "3px",
  border: "1px solid #ddd",
  padding: "0.75em 0.75em",
  height: "7em",
  fontSize: ".97em",
  backgroundColor: "#fff",
  color: "#333",
  width: "100%",
  outline: "none",
  "&:focus": {
    borderColor: "#f8b742",
    boxShadow:
      "inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(248, 183, 66, 0.6)",
  },
});

function ContactInfo() {
  return (
    <Box mt={"70px"}>
      <Grid container spacing={4}>
        <Grid item md={6} xs={12}>
          <Typography
            color={"#000"}
            fontWeight={700}
            fontSize={"1.6em"}
            lineHeight={1.3}
            mb={"12px"}
          >
            ĐỊA CHỈ
          </Typography>
          <Typography color={"#777"} fontSize={"1.1em"} mb={"20px"}>
            319 C16 Lý Thường Kiệt, Phường 15, Quận 11, Tp.HCM
          </Typography>
          <Typography
            color={"#000"}
            fontWeight={700}
            fontSize={"1.6em"}
            lineHeight={1.3}
            mb={"12px"}
          >
            YÊU CẦU ĐẶT PHÒNG
          </Typography>
          <Typography color={"#777"} fontSize={"1.1em"} mb={"20px"}>
            Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur
            ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas
            tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit
            amet adipiscing sem neque sed ipsum.
          </Typography>
          <Box display={"flex"} alignItems={"center"} gap={2}>
            <LocalPhoneOutlinedIcon />
            <Typography color={"#333"} fontSize={"1.1em"}>
              1900 636 648
            </Typography>
          </Box>
          <Typography
            mt={"40px"}
            mb={"20px"}
            color={"#000"}
            fontWeight={700}
            fontSize={"1.6em"}
            lineHeight={1.3}
          >
            KẾT NỐI VỚI CHÚNG TÔI
          </Typography>
          <Box display={"flex"} gap={1.2}>
            <Box component={"img"} src={"/img/contact/Facebook.png"} />
            <Box component={"img"} src={"/img/contact/Instagram.png"} />
            <Box component={"img"} src={"/img/contact/Twitter.png"} />
            <Box component={"img"} src={"/img/contact/Pinterest.png"} />
            <Box component={"img"} src={"/img/contact/Flickr.png"} />
          </Box>
        </Grid>
        <Grid item md={6} xs={12}>
          <Wrapper>
            <Box mt={"25px"} textAlign={"center"}>
              <Typography
                color={"#000"}
                fontWeight={700}
                fontSize={"1.6em"}
                lineHeight={1.3}
              >
                Liên hệ chúng tôi
              </Typography>
              <Typography color={"#777"} fontSize={"1.1em"} mt={"12px"}>
                HÃY ĐẾN KINH NGHIỆM BÍ MẬT THƯ GIÃN.
              </Typography>
            </Box>
            <Box mt={"25px"} px={"50px"} pb={"50px"}>
              <Input placeholder="Họ và tên" />
              <Input placeholder="Email" />
              <Input placeholder="Số điện thoại" />
              <Input placeholder="Địa chỉ" />
              <TextArea placeholder="Lời nhắn" />
              <Box display={"flex"} justifyContent={"center"} mt={"4px"}>
                <Box
                  bgcolor={"#efa697"}
                  color={"white"}
                  padding={"8px 10px"}
                  fontWeight={700}
                  fontSize={"1.1em"}
                  width={240}
                  display={"flex"}
                  justifyContent={"center"}
                >
                  GỬI
                </Box>
              </Box>
            </Box>
          </Wrapper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ContactInfo;
