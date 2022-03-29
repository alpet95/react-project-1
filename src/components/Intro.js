import React from "react";
// __________ assets __________
import TeamImage from "../img/team.png";
// __________ styles __________
import styled from "styled-components";

// ========== css: styled components ==========
const Container = styled.div`
  height: calc(100vh - 50px);
  padding: 20px;
  display: flex;

  @media screen and (max-width: 768px) {
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

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`;

const Title = styled.h1`
  width: 60%;
  font-size: 50px;

  @media screen and (max-width: 768px) {
    width: 100%;
    font-size: 45px;
    text-align: center;
  }

  @media screen and (max-width: 480px) {
    font-size: 40px;
  }

  @media screen and (max-width: 320px) {
    min-width: 280px;
  }
`;

const Desc = styled.p`
  width: 60%;
  margin-top: 20px;
  font-size: 18px;

  @media screen and (max-width: 768px) {
    width: 100%;
    max-width: 450px;
    text-align: center;
  }

  @media screen and (max-width: 480px) {
    font-size: 16px;
  }

  @media screen and (max-width: 320px) {
    min-width: 280px;
  }
`;

const Info = styled.div`
  width: 60%;
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 1200px) {
    flex-direction: column;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    flex-direction: row;
    justify-content: space-around;
  }

  @media screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

const Button = styled.button`
  padding: 15px 24px;
  border: none;
  border-radius: 10px;
  font-weight: bold;
  letter-spacing: 2px;
  color: #fff;
  background-color: #2274a5;
  cursor: pointer;

  @media screen and (max-width: 1200px) {
    flex-direction: column;
    margin-bottom: 20px;
  }

  @media screen and (max-width: 768px) {
    margin-bottom: 0;
    padding: 14px 20px;
  }

  @media screen and (max-width: 480px) {
    padding: 12px 15px;
    margin-bottom: 20px;
    font-size: 12px;
  }
`;

const Contact = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Phone = styled.span`
  font-weight: bold;
  color: #f0667d;
`;

const ContactText = styled.span`
  margin-top: 5px;
  color: #555;
`;

// __________ right side __________
const Right = styled.div`
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    width: 70%;
    margin: 0 auto;
  }

  @media screen and (max-width: 480px) {
    display: none;
  }
`;

const Image = styled.img`
  width: 100%;
  max-width: 500px;

  @media screen and (max-width: 768px) {
    max-width: 360px;
  }
`;

// ========== component ==========
const Intro = () => {
  return (
    <Container>
      {/* ========== left side ========== */}
      <Left>
        <Title>Start Your Bright Career</Title>
        <Desc>
          A wonderful serenity has taken possession of my entire soul, like
          these sweet mornings of spring which I enjoy with my whole heart.
        </Desc>
        <Info>
          <Button>JOIN US</Button>
          <Contact>
            <Phone>(045) 335 - 4861</Phone>
            <ContactText>Get In Touch With Us</ContactText>
          </Contact>
        </Info>
      </Left>
      {/* ========== right side ========== */}
      <Right>
        <Image src={TeamImage} />
      </Right>
    </Container>
  );
};

export default Intro;
