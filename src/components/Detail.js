import { Row, Col } from "antd";
import Slide from "react-reveal/Slide";

import SvgIcon from "../common/SvgIcon";
import styled from 'styled-components';

export const LeftContentBlock = styled.section`
  position: relative;
  padding: 10rem 0 8rem;
  

  @media only screen and (max-width: 768px) {
    padding: 4rem 0 4rem;
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

export const ServiceWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 100%;
`;

export const MinTitle = styled.h6`
  font-size: 1rem;
  line-height: 1rem;
  padding: 0.5rem 0;
`;

export const MinPara = styled.p`
  font-size: 0.75rem;
`;

export const ServiceItem = styled(Col)`
  margin: 2rem 0;
  position: relative;
`;


const Detail = ({ icon, title, content, section, id }) => {
  return (
    <LeftContentBlock>
      <Row type="flex" justify="space-between" align="middle" id={id}>
        <Col lg={11} md={11} sm={12} xs={24}>
          <Slide left >
            <SvgIcon
              src={icon}
              
              width="500px"
              height="500px"
              style={{ 'margin-top': ''}}
            />
          </Slide>
        </Col>
        <Col lg={11} md={11} sm={11} xs={24}>
          <Slide right>
            <ContentWrapper>
              <h6>In Detail</h6>
              <Content>Q2T brings non-repayable loans in the DeFi space, by combining <a href="https://aave.com" style={{ 'color': 'black', 'fontWeight': 'bold', 'textDecoration': 'underline' }}>AAVE</a> liquidity protocol, <a href="https://chain.link" style={{ 'color': 'black', 'fontWeight': 'bold', 'textDecoration': 'underline' }}>Chainlink</a> oracle(s) & a Mutual Credit system (<a href="https://distributed.town" style={{ 'color': 'black', 'fontWeight': 'bold', 'textDecoration': 'underline' }}>DistributedTown</a>) to offer a solution to the issues of limited attention (Popularity games/Matthew Effects), and sybil-attacks (fake identities/matching pool manipulations) associate with funding projects in the area of Public Goods. As well as proposing a new, open-source standard for a <b>2-step Quadratic Distribution</b> to offer projects a continuous, permissionless way to raise funds. Based exclusively on their provable activity and the milestones achieved.</Content>

            </ContentWrapper>
          </Slide>
        </Col>
      </Row>
    </LeftContentBlock>
  );
};

export default Detail;
