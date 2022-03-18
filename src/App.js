import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  overflow: hidden;
`;

function App() {
  return (
    <Container>
      <Navbar />
      <Intro />
    </Container>
  );
}

export default App;
