


import { Row, Col } from "antd";
import Slide from "react-reveal/Slide";

import SvgIcon from "../common/SvgIcon";
import Button from "../common/Button";

import styled from 'styled-components';

export const RightBlockContainer = styled.section`
  position: relative;
  padding: 10rem 0 8rem;
  margin-bottom: 10em;

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



const Intro = ({ title, content, button, icon, id }) => {
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
              <h6>Quadratic Treasury</h6>
              <Content><> Q2T combines DIDs, Mutual Credit & Quadratic Funding to allow (1) a sybil-resistant, fair mean for <b>donors</b> to support Public Goods - and (2) a way for <b>DAO Projects</b> to attract funds and non-repayable loans in a <b>permissionless</b> fashion, based exclusively on <b>the milestones achieved.</b></></Content>
              <ButtonWrapper>
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

                  <Button
                  key="launch2"
                  width="true"
                  >
                  <a href="app.q2t.fund" style={{ 'color': '#fff' }}>Launch App</a>
                  </Button>

                  <Button
                  key="learnmore"
                  width="true"
                  onClick={() => scrollTo("projects")}
                  color="#fff"
                  >
                  <><a href="https://github.com/Q2T-Fund/about" style={{ 'color': 'black'}}>Learn More </a><SvgIcon src="github.svg" width="30px" height="30px"/> </>
                  </Button>

              </ButtonWrapper>
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
              style={{ 'margin-left': '75px' }}
            />
          </Slide>
        </Col>
      </Row>
    </RightBlockContainer>
  );
};

export default Intro;
