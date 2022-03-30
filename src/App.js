import React, { Fragment } from "react";
// __________ components __________
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Feature from "./components/Feature";
import Service from "./components/Service";
import Price from "./components/Price";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
// __________ styles __________
import styled, { css } from "styled-components";

// ========== css: styled components ==========
const Container = styled.div`
  position: relative;
  height: 100vh;
  overflow: hidden;
`;

// __________ css clip __________
const Shape = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

const IntroShape = styled.div`
  ${Shape}
  clip-path: polygon(100% 0%, 60% 0%, 45% 100%, 100% 100%);
  background-color: #ffd556;
`;

const FeatureShape = styled.div`
  ${Shape}
  clip-path: polygon(0% 0%, 0% 100%, 33% 100%, 45% 0%);
  background-color: #8fe9c8;
`;

const ServiceShape = styled.div`
  ${Shape}
  clip-path: polygon(0% 0%, 33% 0%, 33% 100%, 0% 100%);
  background-color: #fca17d;
`;

const PriceShape = styled.div`
  ${Shape}
  clip-path: polygon(33% 0%, 100% 0%, 100% 100%, 67% 100%);
  background-color: crimson;
`;

// ========== component: app ==========
function App() {
  const smallScreen = window.screen.width <= 768 ? true : false;

  return (
    <Fragment>
      <Container>
        <Navbar />
        <Intro />
        <IntroShape />
      </Container>
      <Container>
        <Feature />
        <FeatureShape />
      </Container>
      <Container>
        <Service />
        {!smallScreen && <ServiceShape />}
      </Container>
      <Container>
        <Price />
        <PriceShape />
      </Container>
      <Container>
        <Contact />
        <Footer />
      </Container>
    </Fragment>
  );
}

export default App;
