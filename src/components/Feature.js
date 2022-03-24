import React from "react";
import styled from "styled-components";
import PhoneApp from "../img/phone-app.png";

// ========== css: styled components ==========
const Container = styled.div`
  display: flex;
  /* height: 100vh; // alpet */
`;

// __________ left side __________
const Left = styled.div`
  width: 50%;
  /* background-color: lightblue; */
`;

const Image = styled.img`
  width: 80%;
`;

// __________ right side __________
const Right = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* background-color: lightgray; */
`;

const Title = styled.span`
  font-size: 70px;
`;

const SubTitle = styled.span`
  margin-top: 30px;
  font-size: 24px;
  font-style: italic;
  color: #333;
`;

const Desc = styled.p`
  margin-top: 30px;
  font-size: 20px;
  color: #777;
`;

const Button = styled.button`
  width: 150px;
  margin-top: 20px;
  padding: 15px 20px;
  border: none;
  border-radius: 20px;
  font-size: 20px;
  background-color: darkblue;
  color: white;
  cursor: pointer;
`;

const Feature = () => {
  return (
    <Container>
      <Left>
        <Image src={PhoneApp} />
      </Left>
      <Right>
        <Title>
          <b>good</b> design
          <br />
          <b>good</b> business
        </Title>
        <SubTitle>
          We know that
          <br /> good design means good business.
        </SubTitle>
        <Desc>
          We help our clients succeed by creating brand identities, digital
          experiences, and print materials that communicate clearly, achieve
          marketing goals, and look fantastic.
        </Desc>
        <Desc>
          We care your business and guarantee you to achieve marketing goals.
        </Desc>
        <Button>Learn More</Button>
      </Right>
    </Container>
  );
};

export default Feature;
