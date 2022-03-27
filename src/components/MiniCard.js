import React from "react";
import styled from "styled-components";

// ========== css: styled components ==========
const Container = styled.div`
  width: 120px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  -webkit-box-shadow: 0px 0px 17px -11px rgba(0, 0, 0, 0.58);
  box-shadow: 0px 0px 17px -11px rgba(0, 0, 0, 0.58);

  @media screen and (max-width: 480px) {
    width: 100%;
    max-width: 320px;
    padding: 5px;
    margin-bottom: 1rem;
  }

  @media screen and (max-width: 480px) {
    width: 100%;
    min-width: 280px;
    padding: 5px;
    margin-bottom: 1rem;
  }
`;

const Image = styled.img`
  width: 20px;
`;

const Text = styled.span`
  margin-top: 10px;
  text-align: center;

  @media screen and (max-width: 480px) {
    font-size: 14px;
  }
`;

const MiniCard = (props) => {
  return (
    <Container>
      <Image src={props.icon} />
      <Text>{props.text}</Text>
    </Container>
  );
};

export default MiniCard;
