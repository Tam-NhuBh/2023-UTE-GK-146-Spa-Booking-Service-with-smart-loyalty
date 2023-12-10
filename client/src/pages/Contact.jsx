import { Box, Container } from "@mui/material";
import HeaderTitle from "../components/Contact/HeaderTitle";
import ContactDescription from "../components/Contact/ContactDescription";
import ContactMap from "../components/Contact/ContactMap";
import ContactSecret from "../components/Contact/ContactSecret";
import ContactInfo from "../components/Contact/ContactInfo";

function Contact() {
  return (
    <>
      <HeaderTitle />
      <Container>
        <Box py={"70px"}>
          <ContactDescription />
          <ContactMap />
          <ContactSecret />
          <ContactInfo />
        </Box>
      </Container>
    </>
  );
}

export default Contact;
