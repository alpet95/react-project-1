import React from "react";
import PriceCard from "./PriceCard";
import styled from "styled-components";

// ========== css: styled components ==========
const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Price = () => {
  const priceCardData = [
    {
      id: Math.random().toString(),
      price: "10",
      type: "Basic",
    },
    {
      id: Math.random().toString(),
      price: "20",
      type: "Premium",
    },
    {
      id: Math.random().toString(),
      price: "30",
      type: "Advanced",
    },
  ];
  return (
    <Container>
      {priceCardData.map((item) => (
        <PriceCard key={item.id} price={item.price} type={item.type} />
      ))}
    </Container>
  );
};

export default Price;
