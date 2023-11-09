import { Row, Col } from "antd"
import { withTranslation } from "react-i18next"
import  { SvgIcon }  from "../../common/svgIcon"
import Container from "../../common/container"

import i18n from "i18next"
import {
  FooterSection,
  NavLink,
  Extra,
  LogoContainer,
  Para,
  Chat,
  Empty,
  FooterContainer,
  Language
} from "./styles"

const Footer = ({ t }) => {
  const handleChange = language => {
    i18n.changeLanguage(language)
  }

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
    )
  }

  return (
    <>
      <FooterSection>
        <Container>
          <Row justify="space-between">
            <Col lg={12} md={12} sm={12} xs={12}>
              <Language>{t("Liên hệ")}</Language>
              {/* <Large to="/">{t("Tell us everything")}</Large> */}
              <Para>
                {t(`Bạn có câu hỏi gì không? Hãy liên hệ ngay với chúng tôi.`)}
              </Para>
              <a href="mailto:l.qqbadze@gmail.com">
                <Chat>{t(`Trò chuyện nào`)}</Chat>
              </a>
            </Col>
            {/* <Col lg={8} md={8} sm={12} xs={12}>
            <Title>{t("Policy")}</Title>
            <Large to="/">{t("Application Security")}</Large>
            <Large to="/">{t("Software Principles")}</Large>
          </Col> */}
            {/* <Col lg={6} md={6} sm={12} xs={12}>
            <Empty />
            <Large to="/">{t("Support Center")}</Large>
            <Large to="/">{t("Customer Support")}</Large>
          </Col> */}
          </Row>
          <Row justify="space-between">
            <Col lg={12} md={12} sm={12} xs={12}>
              <Empty />
              <Language>{t("Địa chỉ")}</Language>
              <Para>319 C16 Lý Thường Kiệt, Phường 15, Quận 11, Tp.HCM</Para>
            </Col>
            {/* <Col lg={8} md={8} sm={12} xs={12}>
            <Title>{t("Company")}</Title>
            <Large to="/">{t("About")}</Large>
            <Large to="/">{t("Blog")}</Large>
            <Large to="/">{t("Press")}</Large>
            <Large to="/">{t("Careers & Culture")}</Large>
          </Col> */}
            <Col lg={6} md={6} sm={12} xs={12}>
              {/* <Label htmlFor="select-lang">{t("Language")}</Label> */}
              {/* <LanguageSwitchContainer>
              <LanguageSwitch onClick={() => handleChange("en")}>
                <SvgIcon
                  src="united-states.svg"
                  aria-label="homepage"
                  width="30px"
                  height="30px"
                />
              </LanguageSwitch>
              <LanguageSwitch onClick={() => handleChange("es")}>
                <SvgIcon
                  src="spain.svg"
                  aria-label="homepage"
                  width="30px"
                  height="30px"
                />
              </LanguageSwitch>
            </LanguageSwitchContainer> */}
            </Col>
          </Row>
        </Container>
      </FooterSection>
      <Extra>
        <Container border={true}>
          <Row
            justify="space-between"
            align="middle"
            style={{ paddingTop: "3rem" }}
          >
            <NavLink to="/">
              <LogoContainer>
                <SvgIcon
                  src="logo.png"
                  aria-label="homepage"
                  width="101px"
                  height="25px"
                />
              </LogoContainer>
            </NavLink>
            <FooterContainer>
              {/* <SocialLink
              href="https://github.com/Adrinlol/create-react-app-adrinlol"
              src="github.svg"
            />
            <SocialLink
              href="https://twitter.com/Adrinlolx"
              src="twitter.svg"
            />
            <SocialLink
              href="https://www.linkedin.com/in/lasha-kakabadze/"
              src="linkedin.svg"
            />
            <SocialLink
              href="https://medium.com/@lashakakabadze/"
              src="medium.svg"
            /> */}
              {/* <a
              href="https://ko-fi.com/Y8Y7H8BNJ"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                height="36"
                style={{ border: 0, height: 36 }}
                src="https://storage.ko-fi.com/cdn/kofi3.png?v=3"
                alt="Buy Me a Coffee at ko-fi.com"
              />
            </a> */}
            </FooterContainer>
          </Row>
        </Container>
      </Extra>
    </>
  )
}

export default withTranslation()(Footer)
