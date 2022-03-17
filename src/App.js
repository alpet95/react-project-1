import Navbar from "./components/Navbar";

import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
`;

function App() {
  return (
    <Container>
      <Navbar></Navbar>
    </Container>
  );
}

export default App;
