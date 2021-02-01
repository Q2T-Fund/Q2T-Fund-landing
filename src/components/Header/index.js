import { useState, Fragment, lazy } from "react";
import { Row, Col, Drawer } from "antd";
import { CSSTransition } from "react-transition-group";
import { withTranslation } from "react-i18next";
import styled  from "styled-components"

import * as S from "./styles";

const SvgIcon = lazy(() => import("../../common/SvgIcon"));

const Header = ({ t }) => {
  const [isNavVisible] = useState(false);
  const [isSmallScreen] = useState(false);
  const [visible, setVisibility] = useState(false);

  const showDrawer = () => {
    setVisibility(!visible);
  };

  const onClose = () => {
    setVisibility(!visible);
  };

  const Button = styled.button`
  background: ${(props) => props.color || '#000100'};
  color: ${(props) => (props.color ? '#000100' : '#fff')};
  font-size: 1rem;
  font-weight: 700;
  width: 100%;
  border: ${(props) => (props.color ? '1px solid #000100' : '0px')};
  border-radius: 8px;
  height: 60px;
  outline: none;
  cursor: pointer;
  margin-top: 0.625rem;
  max-width: 180px;

  &:hover {
        transition: all 0.2s ease-in-out;
        background: #45363f;
  }

  @media only screen and (max-width: 1024px) {
    width: ${(props) => (props.width ? '160px' : '100%')};
  }

  @media only screen and (max-width: 768px) {
    width: ${(props) => (props.width ? '140px' : '100%')};
  }

  @media only screen and (max-width: 480px) {
    width: ${(props) => (props.width ? '130px' : '100%')};
  }
`;



  const MenuItem = () => {
    const scrollTo = (id) => {
      const element = document.getElementById(id);
      element.scrollIntoView({
        behavior: "smooth",
      });
      setVisibility(false);
    };
    return (
      <Fragment>
        <S.CustomNavLinkSmall onClick={() => scrollTo("about")}>
          <S.Span>{t("About")}</S.Span>
        </S.CustomNavLinkSmall>
        <S.CustomNavLinkSmall onClick={() => scrollTo("mission")}>
          <S.Span>{t("Mission")}</S.Span>
        </S.CustomNavLinkSmall>
        <S.CustomNavLinkSmall onClick={() => scrollTo("product")}>
          <S.Span>{t("Team")}</S.Span>
        </S.CustomNavLinkSmall>
        <S.CustomNavLinkSmall
          style={{ width: "180px" }}
        >
          <S.Span>
            <Button>{<a href="https://app.q2t.fi" style={{color: 'white' }} >Launch App</a>}</Button>
          </S.Span>
        </S.CustomNavLinkSmall>
      </Fragment>
    );
  };




  return (
    <S.Header>
      <S.Container>
        <Row type="flex" justify="space-between" gutter={20}>
          <S.LogoContainer to="/" aria-label="homepage">
            <SvgIcon src="q2tlogo.png" width="70%" height="60%" />
          </S.LogoContainer>
          <S.NotHidden>
            <MenuItem />
          </S.NotHidden>
          <S.Burger onClick={showDrawer}>
            <S.Outline />
          </S.Burger>
        </Row>
        <CSSTransition
          in={!isSmallScreen || isNavVisible}
          timeout={350}
          classNames="NavAnimation"
          unmountOnExit
        >
          <Drawer closable={false} visible={visible} onClose={onClose}>
            <Col style={{ marginBottom: "2.5rem" }}>
              <S.Label onClick={onClose}>
                <Col span={12}>
                  <S.Menu>Menu</S.Menu>
                </Col>
                <Col span={12}>
                  <S.Outline padding="true" />
                </Col>
              </S.Label>
            </Col>
            <MenuItem />
          </Drawer>
        </CSSTransition>
      </S.Container>
    </S.Header>
  );
};

export default withTranslation()(Header);
