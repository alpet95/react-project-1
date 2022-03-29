import React from "react";
// __________ styles __________
import styled from "styled-components";

// ========== css: styled components ==========
const Container = styled.div`
  height: 50px;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

// __________ left side __________
const Left = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.h1`
  font-weight: bold;
  text-decoration: underline #ffd556;
`;

const Menu = styled.ul`
  display: flex;
  list-style: none;

  @media screen and (max-width: 580px) {
    display: none;
  }
`;

const MenuItem = styled.li`
  margin-right: 30px;
  font-size: 18px;
  font-weight: bold;
  color: #555;

  @media screen and (max-width: 768px) {
    font-size: 16px;
    margin-right: 15px;
  }
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
          <Logo>codepro</Logo>
          <Menu>
            <MenuItem>Home</MenuItem>
            <MenuItem>About</MenuItem>
            <MenuItem>Service</MenuItem>
            <MenuItem>Price</MenuItem>
            <MenuItem>Contact</MenuItem>
          </Menu>
        </Left>

        {/* ========== right side ========== */}
        <Button>SIGN UP</Button>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
