import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import Slide from "react-reveal/Slide";

import SvgIcon from "../common/SvgIcon";
import Button from "../common/Button";

import styled from 'styled-components';

export const RightBlockContainer = styled.section`
  position: relative;
  padding: 10rem 0 8rem;

  @media only screen and (max-width: 768px) {
    padding: 8rem 0 6rem;
  }
`;

export const Content = styled.p`
  margin: 1.5rem 0 2rem 0;
`;

export const ContentWrapper = styled.div`
  position: relative;
  max-width: 540px;

  @media only screen and (max-width: 480px) {
    margin: 2rem 0;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 400px;
`;


const Projects = ({ title, content, button, icon, id }) => {
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <RightBlockContainer>
      <Row type="flex" justify="space-between" align="middle" id={id}>
        <Col lg={11} md={11} sm={11} xs={24}>
          <Slide left>
            <ContentWrapper>
            <h6>For Donors. Do good - at your conditions.</h6>
            <Content>Fund Public Goods. Safely, transparently, customizing every step of the way. Decide the amount to donate, the area you want to donate to, and the amount+interest to be returned (if any!).</Content>
              {/* <ButtonWrapper>
                {button &&
                  typeof button === "object" &&
                  button.map((item, id) => {
                    return (
                      <Button
                        key={id}
                        color={item.color}
                        width="true"
                        onClick={() => scrollTo("about")}
                      >
                        {item.title}
                      </Button>
                    );
                  })}
              </ButtonWrapper> */}
            </ContentWrapper>
          </Slide>
        </Col>
        <Col lg={11} md={11} sm={12} xs={24}>
          <Slide right>
            <SvgIcon
              src={icon}
              className="about-block-image"
              width="400px"
              height="400px"
              style={{ 'margin-left': '75px', 'margin-top': '-15em'}}
            />
          </Slide>
        </Col>
      </Row>
    </RightBlockContainer>
  );
};

export default Projects;




