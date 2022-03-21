import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Feature from "./components/Feature";
import styled, { css } from "styled-components";

const Container = styled.div`
  position: relative;
  height: 100vh;
  overflow: hidden;
`;

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
  background-color: crimson;
`;

const FeatureShape = styled.div`
  ${Shape}
  clip-path: polygon(0% 0%, 0% 100%, 30% 100%, 45% 0%);
  background-color: pink;
`;

function App() {
  return (
    <>
      <Container>
        <Navbar />
        <Intro />
        <IntroShape />
      </Container>
      <Container>
        <Feature />
        <FeatureShape />
      </Container>
    </>
  );
}

export default App;
