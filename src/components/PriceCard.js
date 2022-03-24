import React from "react";
import styled from "styled-components";

// ========== css: styled components ==========
const Container = styled.div`
  margin-right: 50px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  -webkit-box-shadow: 0px 0px 17px -11px rgba(0, 0, 0, 0.58);
  box-shadow: 0px 0px 17px -11px rgba(0, 0, 0, 0.58);
  background-color: white;
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Price = styled.span`
  font-weight: bold;
  font-size: 50px;
`;

const Type = styled.button`
  padding: 10px;
  margin: 10px 0;
  border: 1.5px solid crimson;
  border-radius: 20px;
  color: crimson;
  background-color: white;
`;

const List = styled.ul`
  list-style: none;
`;

const ListItem = styled.li`
  margin: 30px 0;
`;

const Button = styled.button`
  padding: 15px;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  font-weight: bold;
  background-color: darkblue;
  color: white;
  cursor: pointer;
`;

const PriceCard = (props) => {
  const listItemData = [
    "200 Hand-Crafted Templates",
    "Exclusive Support",
    "50+ PreBuilt Websites",
    "Premium Plugins",
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
