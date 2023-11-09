import { Row, Col } from "antd"
import { withTranslation } from "react-i18next"
import { Slide, Zoom } from "react-awesome-reveal"
import { useForm } from "../../common/utils/useForm"
import validate from "../../common/utils/validationRules"
import { Button } from "../../common/button"
import Block from "../block"
import Input from "../../common/input"
import TextArea from "../../common/textArea"
import { ContactContainer, FormGroup, Span, ButtonContainer } from "./styles"

const Contact = ({ title, content, id, t }) => {
  const { values, errors, handleChange, handleSubmit } = useForm(validate)

  const ValidationType = ({ type }) => {
    const ErrorMessage = errors[type]
    return (
      <Zoom direction="left">
        <Span>{ErrorMessage}</Span>
      </Zoom>
    )
  }

  return (
    <ContactContainer id={id}>
      <Row justify="space-between" align="middle">
        <Col lg={12} md={11} sm={24} xs={24}>
          <Slide direction="left" triggerOnce>
            <Block title={title} content={content} />
          </Slide>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Slide direction="right" triggerOnce>
            <FormGroup autoComplete="off" onSubmit={handleSubmit}>
              <Col span={24}>
                <Input
                  type="text"
                  name="Họ & Tên"
                  placeholder="Họ Và Tên"
                  value={values.name || ""}
                  onChange={handleChange}
                />
                <ValidationType type="name" />
              </Col>
              <Col span={24}>
                <Input
                  type="text"
                  name="email"
                  placeholder="Email"
                  value={values.email || ""}
                  onChange={handleChange}
                />
                <ValidationType type="email" />
              </Col>
              <Col span={24}>
                <TextArea
                  placeholder="Hãy để lại lời nhắn"
                  value={values.message || ""}
                  name="Lời nhắn"
                  onChange={handleChange}
                />
                <ValidationType type="message" />
              </Col>
              <ButtonContainer>
                <Button name="submit">{t("Gửi")}</Button>
              </ButtonContainer>
            </FormGroup>
          </Slide>
        </Col>
      </Row>
    </ContactContainer>
  )
}

export default withTranslation()(Contact)
