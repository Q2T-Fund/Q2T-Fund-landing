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
              <h6>For Projects in the area of Public Goods.</h6>
              <Content>What would you do if you had a Black Token of infinite value? What would you spend it for, and how would you realize your vision for a positive impact in the world? Q2T lets local/online communities & DAOs manage their projects (larger or smaller) in full autonomy - either by receiving constant inflow of grants from a pooled fund of donations, or by pooling their own funds together, accruing interest on them, and redistributing them to the most impactful projects, in a fully automated fashion.</Content>
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
              width="500px"
              height="500px"
              style={{ 'margin-left': '100px' }}
            />
          </Slide>
        </Col>
      </Row>
    </RightBlockContainer>
  );
};

export default Projects;
