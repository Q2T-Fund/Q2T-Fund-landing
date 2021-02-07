import { Row, Col } from "antd";
import Fade from "react-reveal/Fade";
import styled from 'styled-components';

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

const Values = ({ title, content, button}) => {
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
              <h6>Values</h6>
              <Content>1) Self-organization & Pseudonimity. <br/> 
                       2)  Permissionless & bureaucracy-free. <br/>
                       3)  Self-sustainability & Collective Autonomy (Inter-Independency).
            </Content>

            </Col>
            


          </ContentWrapper>
        </Fade>
      </Row>
    </MiddleBlock>
  );
};

export default Values;
