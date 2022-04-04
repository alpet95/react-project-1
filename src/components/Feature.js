import React from "react";
// ========== assets ==========
import PhoneApp from "../img/phone-app.png";
// ========== styles ==========
import styled from "styled-components";

// ========== css: styled components ==========
const Container = styled.div`
  height: 100%;
  display: flex;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media screen and (max-width: 480px) {
    padding: 0 10px;
  }
`;

// ========== left side ==========
const Left = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Image = styled.img`
  width: 80%;
  max-width: 400px;
`;

// ========== right side ==========
const Right = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 768px) {
    width: 70%;
  }

  @media screen and (max-width: 480px) {
    width: 100%;
    height: 100%;
  }
`;

const Title = styled.span`
  font-size: 50px;

  @media screen and (max-width: 480px) {
    font-size: 40px;
  }

  @media screen and (max-width: 320px) {
    min-width: 280px;
  }
`;

const SubTitle = styled.span`
  margin-top: 30px;
  font-size: 18px;
  font-style: italic;
  color: #333;

  @media screen and (max-width: 768px) {
    max-width: 420px;
    margin-top: 20px;
  }

  @media screen and (max-width: 480px) {
    font-size: 16px;
    max-width: 300px;
  }

  @media screen and (max-width: 320px) {
    min-width: 300px;
  }
`;

const Desc = styled.p`
  margin-top: 30px;
  font-size: 16px;
  line-height: 1.4;
  color: #777;

  @media screen and (max-width: 768px) {
    max-width: 415px;
    margin-top: 20px;
  }

  @media screen and (max-width: 480px) {
    font-size: 14px;
    max-width: 375px;
  }

  @media screen and (max-width: 320px) {
    min-width: 290px;
  }
`;

const Button = styled.button`
  width: 150px;
  margin-top: 20px;
  padding: 10px 14px;
  border: none;
  border-radius: 20px;
  font-size: 18px;
  color: white;
  background-color: #2274a5;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    padding: 8px 12px;
    font-size: 16px;
  }

  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
`;

// ========== component: feature ==========
const Feature = () => {
  return (
    <Container>
      {/* ========== left side ========== */}
      <Left>
        <Image src={PhoneApp} />
      </Left>
      {/* ========== right side ========== */}
      <Right>
        <Title>
          <b>good</b> service
          <br />
          <b>good</b> business
        </Title>
        <SubTitle>
          The languages only
          <br />
          differ in their grammar, their pronunciation and their most common
          words.
        </SubTitle>
        <Desc>
          Everyone realizes why a new common language would be desirable: one
          could refuse to pay expensive translators. To achieve this, it would
          be necessary to have uniform grammar, pronunciation and more common
          words.
        </Desc>
        <Desc>
          If several languages coalesce, the grammar of the resulting language
          is more simple and regular than that of the individual languages.
        </Desc>
        <Button>Learn More</Button>
      </Right>
    </Container>
  );
};

export default Feature;
