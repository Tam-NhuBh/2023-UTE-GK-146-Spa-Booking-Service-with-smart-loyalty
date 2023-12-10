import { Typography } from "@mui/material";

function ContactDescription() {
  return (
    <>
      <Typography
        fontSize={"40px"}
        fontWeight={"300"}
        color={"#333"}
        letterSpacing={"-2px"}
      >
        CAM KẾT CỦA CHÚNG TÔI
      </Typography>
      <Typography
        mt={"20px"}
        color={"#777"}
        fontSize={"20px"}
        lineHeight={"1.6"}
        fontWeight={"400"}
      >
        “Hít thở bình yên, thở ra căng thẳng. Thư giãn có thể mang lại sự nhẹ
        nhõm cho phần lớn những gì khiến bạn cảm thấy khó chịu. Trong thế giới
        căng thẳng và thường xuyên tiêu cực của chúng tôi, quyết định ưu tiên
        thư giãn của bạn sẽ giúp bạn điều hướng, xử lý và giảm thiểu căng thẳng”
      </Typography>
    </>
  );
}

export default ContactDescription;
