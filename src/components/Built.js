import { lazy } from "react";
import { Row, Col } from "antd";
import Fade from "react-reveal/Fade";
import styled from 'styled-components';
import SvgIcon from "../common/SvgIcon";

export const MiddleBlock = styled.section`
  position: relative;
  padding: 7.5rem 0 3rem;
  text-align: center;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 768px) {
    padding: 5.5rem 0 3rem;
  }
`;

export const Content = styled.p`
  padding: 0.75rem 0 0.75rem;
`;

export const ContentWrapper = styled.div`
  max-width: 570px;

  @media only screen and (max-width: 768px) {
    max-width: 100%;
  }
`;

const Button = lazy(() => import("../common/Button"));

const Built = ({ title, content, button}) => {
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <MiddleBlock>
      <Row type="flex" justify="center" align="middle">
        <Fade bottom>
          <ContentWrapper>
            <Col lg={24} md={24} sm={24} xs={24}>
              <h6>Built @ AAVE MarketMake Hack</h6>
              <Content>From Hackers, to Hackers – we leverage on AAVE Native Credit Delegation to release the first fully open-source, public available, sybil-resistant model of Quadratic Funding for Public Goods!</Content>

            </Col>
            
            <SvgIcon
            src="aave.png"
            width="75px"
            height="75x"
            style={{ 'margin': '15px' }}
            />

            <SvgIcon
            src="chainlink.png"
            width="75px"
            height="75x"
            style={{ 'margin': '15px' }}
            />

            <SvgIcon
            src="dito.png"
            width="75px"
            height="75x"
            style={{ 'margin': '15px' }}
            />
          </ContentWrapper>
        </Fade>
      </Row>
    </MiddleBlock>
  );
};

export default Built;
