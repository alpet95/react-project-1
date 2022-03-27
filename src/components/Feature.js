import React from "react";
// __________ assets __________
import PhoneApp from "../img/phone-app.png";
// __________ styles __________
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

// __________ left side __________
const Left = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    width: 30%;
  }

  @media screen and (max-width: 480px) {
    display: none;
  }
`;

const Image = styled.img`
  width: 80%;
  max-width: 450px;
`;

// __________ right side __________
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
  font-size: 70px;

  @media screen and (max-width: 768px) {
    font-size: 50px;
  }

  @media screen and (max-width: 480px) {
    font-size: 40px;
  }

  @media screen and (max-width: 320px) {
    min-width: 280px;
  }
`;

const SubTitle = styled.span`
  margin-top: 30px;
  font-size: 24px;
  font-style: italic;
  color: #333;

  @media screen and (max-width: 768px) {
    font-size: 22px;
    margin-top: 20px;
  }

  @media screen and (max-width: 480px) {
    font-size: 20px;
    max-width: 300px;
  }

  @media screen and (max-width: 320px) {
    min-width: 300px;
  }
`;

const Desc = styled.p`
  margin-top: 30px;
  font-size: 20px;
  color: #777;

  @media screen and (max-width: 768px) {
    margin-top: 20px;
    font-size: 18px;
    max-width: 458px;
  }

  @media screen and (max-width: 480px) {
    font-size: 16px;
    max-width: 435px;
  }

  @media screen and (max-width: 320px) {
    min-width: 300px;
  }
`;

const Button = styled.button`
  width: 150px;
  margin-top: 20px;
  padding: 15px 20px;
  border: none;
  border-radius: 20px;
  font-size: 20px;
  color: white;
  background-color: #2274a5;
  cursor: pointer;

  @media screen and (max-width: 480px) {
    padding: 8px 12px;
    font-size: 16px;
  }
`;

const Feature = () => {
  return (
    <Container>
      <Left>
        <Image src={PhoneApp} />
      </Left>
      <Right>
        <Title>
          <b>sed</b> rhoncus
          <br />
          <b>gravida</b> lacus
        </Title>
        <SubTitle>
          Curabitur malesuada
          <br /> lacus in est ultricies, in egestas quam convallis.
        </SubTitle>
        <Desc>
          Sed eget eros id diam vehicula pellentesque sed a metus. Cras sed nisi
          convallis, pharetra odio at, commodo nulla. Vivamus hendrerit sed
          tortor vel venenatis. Phasellus vitae mauris rhoncus, suscipit sapien
          ut, dignissim nisi.
        </Desc>
        <Desc>
          Maecenas elementum elementum nisi, a finibus nibh posuere quis.
        </Desc>
        <Button>Learn More</Button>
      </Right>
    </Container>
  );
};

export default Feature;
