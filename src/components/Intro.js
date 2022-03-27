import React from "react";
import People from "../img/people.png";
import styled from "styled-components";

// ========== css: styled components ==========
const Container = styled.div`
  height: calc(100vh - 50px);
  padding: 20px;
  display: flex;
  @media screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

// __________ left side __________
const Left = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* background-color: lightcyan; */
  @media screen and (max-width: 480px) {
    width: 100%;
    height: 100%;
  }
`;

const Title = styled.h1`
  width: 60%;
  font-size: 60px;
  /* background-color: lightpink; */
  @media screen and (max-width: 480px) {
    width: 100%;
    font-size: 50px;
  }
`;

const Desc = styled.p`
  width: 60%;
  margin-top: 20px;
  font-size: 20px;
  /* background-color: lightsteelblue; */
  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

const Info = styled.div`
  width: 60%;
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* background-color: lightseagreen; */
  @media screen and (max-width: 480px) {
    width: 100%;
    flex-direction: column;
  }
`;

const Button = styled.button`
  padding: 15px;
  border: none;
  border-radius: 10px;
  font-weight: bold;
  letter-spacing: 2px;
  color: white;
  background-color: darkblue;
  cursor: pointer;
  @media screen and (max-width: 480px) {
    margin-bottom: 20px;
  }
`;

const Contact = styled.div`
  display: flex;
  flex-direction: column;
  /* background-color: lightgoldenrodyellow; */
`;

const Phone = styled.span`
  color: #f0667d;
  font-weight: bold;
`;

const ContactText = styled.span`
  margin-top: 5px;
  color: gray;
`;

// __________ right side __________
const Right = styled.div`
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: lightgreen; */
  @media screen and (max-width: 480px) {
    display: none;
  }
`;

const Image = styled.img`
  width: 100%;
  max-width: 600px;
`;

// ========== component ==========
const Intro = () => {
  return (
    <Container>
      {/* ========== left side ========== */}
      <Left>
        <Title>Adventures in creative age</Title>
        <Desc>
          We believe that designing products and services in close partnership
          with our clients is the only way to have a real impact on their
          business.
        </Desc>
        <Info>
          <Button>START A PROJECT</Button>
          <Contact>
            <Phone>Call Us (012) 345 - 6789</Phone>
            <ContactText>For any question or concern</ContactText>
          </Contact>
        </Info>
      </Left>
      {/* ========== right side ========== */}
      <Right>
        <Image src={People} />
      </Right>
    </Container>
  );
};

export default Intro;
