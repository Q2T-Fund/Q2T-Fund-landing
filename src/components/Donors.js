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


const Donors = ({ icon, title, content, section, id }) => {
  return (
    <LeftContentBlock>
      <Row type="flex" justify="space-between" align="middle" id={id}>
        <Col lg={11} md={11} sm={12} xs={24}>
          <Slide left >
            <SvgIcon
              src={icon}
              
              width="400px"
              height="400px"
              style={{ 'margin-top': ''}}
            />
          </Slide>
        </Col>
        <Col lg={11} md={11} sm={11} xs={24}>
          <Slide right>
            <ContentWrapper>
              <h6>For Donors. Do good - at your conditions.</h6>
              <Content>Fund Public Goods. Safely, transparently, customizing every step of the way. Decide the amount to donate, the area you want to donate to, and the amount+interest to be returned (if any!).</Content>

            </ContentWrapper>
          </Slide>
        </Col>
      </Row>
    </LeftContentBlock>
  );
};

export default Donors;
