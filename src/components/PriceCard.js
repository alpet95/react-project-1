import React from "react";
// ========== styles ==========
import styled from "styled-components";

// ========== css: styled components ==========
const Container = styled.div`
  margin-right: 25px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  -webkit-box-shadow: 0px 0px 17px -11px rgba(0, 0, 0, 0.58);
  box-shadow: 0px 0px 17px -11px rgba(0, 0, 0, 0.58);
  background-color: white;

  :last-child {
    margin-right: 0px;
  }

  @media screen and (max-width: 768px) {
    width: 360px;
    margin-right: 0;
    margin-bottom: 10px;
    padding: 10px;
  }

  @media screen and (max-width: 480px) {
    width: 270px;
  }

  @media screen and (max-width: 320px) {
    min-width: 170px;
  }
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Price = styled.span`
  font-weight: bold;
  font-size: 50px;

  @media screen and (max-width: 768px) {
    font-size: 30px;
  }
`;

const Type = styled.button`
  padding: 10px;
  margin: 10px 0;
  border: 1.5px solid crimson;
  border-radius: 20px;
  color: crimson;
  background-color: white;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const List = styled.ul`
  list-style: none;
  @media screen and (max-width: 768px) {
    padding: 0;
  }
`;

const ListItem = styled.li`
  margin: 30px 0;

  @media screen and (max-width: 1024px) {
    margin: 20px 0;
    font-size: 12px;
  }

  @media screen and (max-width: 768px) {
    margin: 10px;
    font-size: 12px;
  }
`;

const Button = styled.button`
  padding: 15px;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  font-weight: bold;
  background-color: #2274a5;
  color: white;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    padding: 5px;
    font-size: 12px;
  }
`;

// ========== component: price card ==========
const PriceCard = (props) => {
  const listItemData = [
    "Latine accumsan per ei",
    "Tantas dicunt nostrum mei no",
    "Tritani veritus mel ea",
    "Velit bonorum te per",
  ];
  return (
    <Container>
      <PriceContainer>
        $<Price>{props.price}</Price>/month
      </PriceContainer>
      <Type>{props.type} Plan</Type>
      <List>
        {listItemData.map((item, index) => (
          <ListItem key={index}>{item}</ListItem>
        ))}
      </List>
      <Button>Join Now</Button>
    </Container>
  );
};

export default PriceCard;
