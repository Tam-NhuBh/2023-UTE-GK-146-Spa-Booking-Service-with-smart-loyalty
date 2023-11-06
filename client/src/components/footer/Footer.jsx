import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import Container from "../../common/Container";

import i18n from "i18next";

import {
  FooterSection,
  Title,
  NavLink,
  Extra,
  LogoContainer,
  Para,
  Large,
  Chat,
  Empty,
  FooterContainer,
  Language,
  Label,
  LanguageSwitch,
  LanguageSwitchContainer,
} from "./Footer";

const SocialLink = ({ href, src }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      key={src}
      aria-label={src}
    >
      <SvgIcon src={src} width="25px" height="25px" />
    </a>
  );
};

const Footer = ({ t }) => {
  const handleChange = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <>
      <FooterSection>
        <Container>
          <Row justify="space-between">
            <Col lg={12} md={12} sm={12} xs={12}>
              <Language>{t("Liên hệ")}</Language>
              <Para>{t(`Bạn có câu hỏi gì không? Hãy liên hệ ngay với chúng tôi.`)}</Para>
              <a href="mailto:l.qqbadze@gmail.com">
                <Chat>{t(`Trò chuyện nào`)}</Chat>
              </a>
            </Col>
          </Row>
          <Row justify="space-between">
            <Col lg={12} md={12} sm={12} xs={12}>
              <Empty />
              <Language>{t("Địa chỉ")}</Language>
              <Para>319 C16 Lý Thường Kiệt, Phường 15, Quận 11, Tp.HCM</Para>
            </Col>
            <Col lg={6} md={6} sm={12} xs={12}></Col>
          </Row>
        </Container>
      </FooterSection>
      <Extra>
        <Container border={true}>
          <Row justify="space-between" align="middle" style={{ paddingTop: "3rem" }}>
            <NavLink to="/">
              <LogoContainer>
                <SvgIcon src="logo.png" aria-label="homepage" width="101px" height="25px" />
              </LogoContainer>
            </NavLink>
            <FooterContainer>{/* Add your SocialLink components here */}</FooterContainer>
          </Row>
        </Container>
      </Extra>
    </>
  );
};

export default withTranslation()(Footer);
