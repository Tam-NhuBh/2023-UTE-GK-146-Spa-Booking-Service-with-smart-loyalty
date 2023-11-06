import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterSection = styled("footer")`
  background: rgb(241, 242, 243);
  padding: 2.5rem 0;
`;

export const Title = styled("h4")`
  font-size: "22px";
  textTransform: "capitalize";
  color: "#18216d";

  @media screen and (max-width: 414px) {
    padding: "1.5rem 0";
  }
`;

export const NavLink = styled(Link)`
  display: "block";
  fontSize: "1rem";
  marginBottom: "0.625rem";
  transition: "all 0.2s ease-in-out";

  &:hover,
  &:active,
  &:focus {
    color: "#15418e";
  }
`;

export const Extra = styled("section")`
  background: rgb(241, 242, 243);
  position: "relative";
  width: "100%";
  marginRight: "auto";
  marginLeft: "auto";
  paddingBottom: "2rem";
`;

export const LogoContainer = styled("div")`
  display: "flex";
  position: "relative";
`;

export const Para = styled("div")`
  color: "#18216d";
  fontSize: "14px";
  width: "70%";
`;

export const Large = styled(Link)`
  fontSize: "16px";
  color: "#000";
  cursor: "pointer";
  transition: "all 0.2s ease-in-out";
  textTransform: "capitalize";
  lineHeight: "24px";
  display: "block";
  marginBottom: "0.625rem";
  transition: "all 0.3s ease-in-out";
  maxWidth: "max-content";

  &:hover {
    color: "rgb(255, 130, 92)";
    textUnderlinePosition: "under";
    textDecoration: "rgb(255, 130, 92) wavy underline";
  }
`;

export const Chat = styled("p")`
  color: "#18216d";
  maxWidth: "fit-content";
  borderBottom: "1px solid #18216d";
  cursor: "pointer";
  marginTop: "1rem";
  transition: "all 0.3s ease-in-out";

  &:hover {
    borderBottom: "1px solid rgb(255, 130, 92)";
    color: "rgb(255, 130, 92)";
  }
`;

export const Empty = styled("div")`
  position: "relative";
  height: "53px";
`;

export const FooterContainer = styled("div")`
  maxWidth: "510px";
  width: "100%";
  display: "flex";
  justifyContent: "space-between";
  textAlign: "center";
  alignItems: "center";
  transition: "all 0.1s ease-in-out";

  a {
    &:hover,
    &:active,
    &:focus {
      WebkitTransform: "scale(1.1)";
      msTransform: "scale(1.1)";
      transform: "scale(1.1)";
    }
  }

  @media screen and (max-width: 769px) {
    width: "auto";

    a:not(:last-child) {
      display: "none";
    }
  }

  div {
    cursor: "pointer";
    marginRight: "15px";
    width: "25px";
    height: "25px";

    &:hover {
      fill: "rgb(255, 130, 92)";
    }
  }
`;

export const Language = styled("h4")`
  fontSize: "22px";
  textTransform: "capitalize";
  color: "#18216d";

  @media screen and (max-width: 414px) {
    padding: "1.5rem 0";
  }
`;

export const Label = styled("label")`
  fontSize: "22px";
  textTransform: "capitalize";
  color: "#18216d";
  display: "block";
  marginBottom: "2rem";
  fontFamily: "Motiva Sans Bold, serif";

  @media screen and (max-width: 414px) {
    padding: "1.5rem 0";
    marginBottom: "1rem";
  }
`;

export const LanguageSwitch = styled("div")`
  cursor: "pointer";
  transition: "all 0.1s ease-in-out";

  &:hover,
  &:active,
  &:focus {
    WebkitTransform: "scale(1.1)";
    msTransform: "scale(1.1)";
    transform: "scale(1.1)";
  }
`;

export const LanguageSwitchContainer = styled("div")`
  display: "flex";
  justifyContent: "space-between";
  width: "85px";
`;
