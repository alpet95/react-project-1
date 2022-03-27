import React from "react";
import styled from "styled-components";

// ========== css: styled components ==========
const Container = styled.div`
  height: 50px;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  /* background-color: lightgray; */
`;

// __________ left side __________
const Left = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* background-color: lightblue; */
`;

const Logo = styled.h1`
  font-weight: bold;
  text-decoration: underline crimson;
  /* background-color: lightcoral; */
`;

const Menu = styled.ul`
  display: flex;
  list-style: none;
  /* background-color: lightseagreen; */
  @media screen and (max-width: 480px) {
    display: none;
  }
`;

const MenuItem = styled.li`
  margin-right: 30px;
  font-size: 20px;
  font-weight: bold;
  color: gray;
  /* background-color: lightyellow; */
`;

// __________ right side __________
const Button = styled.button`
  padding: 10px 15px;
  border: 2px solid white;
  border-radius: 10px;
  font-weight: bold;
  color: white;
  background-color: crimson;
  cursor: pointer;
`;

// ========== component ==========
const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        {/* ========== left side ========== */}
        <Left>
          <Logo>Agency</Logo>
          <Menu>
            <MenuItem>Home</MenuItem>
            <MenuItem>Features</MenuItem>
            <MenuItem>Services</MenuItem>
            <MenuItem>Pricing</MenuItem>
            <MenuItem>Contact</MenuItem>
          </Menu>
        </Left>

        {/* ========== right side ========== */}
        <Button>JOIN NOW</Button>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
