import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  overflow: hidden;
`;

const IntroShape = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  clip-path: polygon(100% 0%, 60% 0%, 45% 100%, 100% 100%);
  background-color: crimson;
  z-index: -1;
`;

function App() {
  return (
    <Container>
      <Navbar />
      <Intro />
      <IntroShape />
    </Container>
  );
}

export default App;
