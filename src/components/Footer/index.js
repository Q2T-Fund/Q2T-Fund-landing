import { lazy, Fragment } from "react";
import { Row, Col } from "antd";
import Fade from "react-reveal/Fade";

import * as S from "./styles";

const SvgIcon = lazy(() => import("../../common/SvgIcon"));
const Container = lazy(() => import("../../common/Container"));

const Footer = ({ t }) => {

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

  return (
    <Fragment>
      <Fade bottom>
        <S.Footer>
          <Container>
            <Row type="flex" justify="space-between">
              <Col lg={10} md={10} sm={12} xs={24}>
                <S.Language>{"Contact"}</S.Language>
                <S.Large to="/">{"Tell us everything"}</S.Large>
                <S.Para>
                  {
                    `Do you have any question regarding the project? Feel free to reach out.`
                  }
                </S.Para>
                <a href="mailto:team@distributed.town">
                  <S.Chat>{`Let's Chat`}</S.Chat>
                </a>
              </Col>
              <Col lg={8} md={8} sm={12} xs={24}>
                <S.Title>{"Socials"}</S.Title>
                <S.Large left="true" to="/">
                  {"Twitter"}
                </S.Large>
                <a href="https://twitter.com/Q2T_fund" target="_blank">Follow us</a>
                <S.Large left="true" to="/">
                  {"Discord"}
                </S.Large>
                <a href="https://discord.gg/WR7PbswvTr" target="_blank">Join us!</a>
                <S.Title>
                  {"Credits"}
                </S.Title>
                <a href="https://distributed.town" target="_blank">© DistributedTown 2021</a>
              </Col>

            </Row>
          </Container>
        </S.Footer>
        <S.Extra>
          <Container border="true">
            <Row
              type="flex"
              justify="space-between"
              align="middle"
              style={{ paddingTop: "3rem" }}
            >
              <S.NavLink to="/">
                <S.LogoContainer>
                  <SvgIcon
                    src="q2tlogo.png"
                    aria-label="homepage"
                    width="101px"
                    height="64px"
                  />
                </S.LogoContainer>
              </S.NavLink>
              <S.FooterContainer>
                <SocialLink
                  href="https://github.com/Q2T-Fund"
                  src="github.svg"
                />
                <SocialLink
                  href="https://twitter.com/marakuas"
                  src="twitter.svg"
                />
                <SocialLink
                  href="https://medium.com/@ustin_48503/"
                  src="medium.svg"
                />
              </S.FooterContainer>
            </Row>
          </Container>
        </S.Extra>
      </Fade>
    </Fragment>
  );
};

export default Footer;
