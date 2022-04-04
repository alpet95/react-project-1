import React from "react";
// ========== styles ==========
import styled from "styled-components";

// ========== css: styled components ==========
const Container = styled.div`
  height: 10%;
  color: lightgray;
  background-color: #333;
`;

const Wrapper = styled.div`
  height: 100%;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 480px) {
    padding: 0 15px;
  }
`;

const List = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  list-style: none;
`;

const ListItem = styled.li`
  margin-right: 20px;
  @media screen and (max-width: 480px) {
    margin-right: 10px;
    font-size: 14px;
  }
`;

const Copyright = styled.span`
  @media screen and (max-width: 480px) {
    font-size: 14px;
  }
`;

// ========== component: footer ==========
const Footer = () => {
  const footerListItems = [
    {
      id: Math.random().toString(),
      text: "Guide",
    },
    {
      id: Math.random().toString(),
      text: "Support",
    },
    {
      id: Math.random().toString(),
      text: "API",
    },
    {
      id: Math.random().toString(),
      text: "Community",
    },
  ];
  return (
    <Container>
      <Wrapper>
        <List>
          {footerListItems.map((item) => (
            <ListItem key={item.id}>{item.text}</ListItem>
          ))}
        </List>
        <Copyright>Alpet ©</Copyright>
      </Wrapper>
    </Container>
  );
};

export default Footer;
