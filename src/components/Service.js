import React, { useState } from "react";
// __________ components __________
import MiniCard from "./MiniCard";
// __________ images __________
import ServiceImage from "../img/service.png";
import SearchIcon from "../img/search.png";
import PlayIcon from "../img/play.png";
// __________ styles __________
import styled from "styled-components";

// ========== css: styled components ==========
const Container = styled.div`
  display: flex;
  height: 100%;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

// __________ left side __________
const Left = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Image = styled.img`
  width: 100%;
  max-width: 450px;
`;

// __________ right side __________
const Right = styled.div`
  width: 60%;

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`;

const Wrapper = styled.div`
  height: 100%;
  padding: 0 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 768px) {
    padding: 20px;
  }
`;

const Title = styled.h1`
  font-size: 50px;

  @media screen and (max-width: 480px) {
    font-size: 40px;
  }

  @media screen and (max-width: 320px) {
    min-width: 280px;
  }
`;

const Desc = styled.p`
  margin-top: 20px;
  font-size: 16px;
  color: #555;

  @media screen and (max-width: 320px) {
    min-width: 280px;
  }
`;

const CardContainer = styled.div`
  max-width: 570px;
  margin-top: 50px;
  display: flex;
  justify-content: space-around;
  align-items: baseline;

  @media screen and (max-width: 768px) {
    max-width: 550px;
  }

  @media screen and (max-width: 480px) {
    max-width: none;
    margin-top: 30px;
    flex-direction: column;
    align-items: center;
  }
`;

const Button = styled.button`
  width: 180px;
  padding: 10px 14px;
  margin: 30px auto 0;
  display: flex;
  align-items: center;
  border: none;
  border-radius: 20px;
  font-size: 18px;
  color: white;
  background-color: #2274a5;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    width: 150px;
    padding: 8px 12px;
    font-size: 16px;
  }

  @media screen and (max-width: 480px) {
    margin-top: 20px;
  }
`;

const Icon = styled.img`
  margin-right: 10px;
  width: 20px;
`;

// ========== component: service ==========
const Service = (props) => {
  const cardData = [
    {
      id: Math.random().toString(),
      icon: SearchIcon,
      text: "It will be as simple as Occidental",
    },
    {
      id: Math.random().toString(),
      icon: SearchIcon,
      text: "It will be as simple as Occidental",
    },
    {
      id: Math.random().toString(),
      icon: SearchIcon,
      text: "It will be as simple as Occidental",
    },
  ];

  const getOpenHandler = () => {
    props.onGetOpenHandler();
  };

  return (
    <Container>
      {props.onGetModalContent}
      <Left>
        <Image src={ServiceImage} />
      </Left>
      <Right>
        <Wrapper>
          <Title>Check what we can offer</Title>
          <Desc>
            To achieve this, it would be necessary to have uniform grammar,
            pronunciation and more common words. If several languages coalesce,
            the grammar of the resulting language is more simple and regular
            than that of the individual languages.
          </Desc>
          <CardContainer>
            {cardData.map((data) => (
              <MiniCard key={data.id} icon={data.icon} text={data.text} />
            ))}
          </CardContainer>
          <Button onClick={getOpenHandler}>
            <Icon src={PlayIcon}></Icon>
            How it works
          </Button>
        </Wrapper>
      </Right>
    </Container>
  );
};

export default Service;
