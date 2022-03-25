import React from "react";
import AddressItem from "./AddressItem";
import PatternImage from "../img/pattern.png";
import styled from "styled-components";

// ========== css: styled components ==========
const Container = styled.div`
  height: 90%;
  background: url(${PatternImage});
`;

const Wrapper = styled.div`
  height: 100%;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FormContainer = styled.div`
  width: 50%;
`;

const Title = styled.h1`
  margin-top: 0;
  margin: 50px;
  text-align: center;
`;

const Form = styled.form`
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LeftForm = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 20px;
`;

const RightForm = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Input = styled.input`
  width: 200px;
  padding: 20px;
`;

const TextArea = styled.textarea`
  width: 200px;
  height: 60%;
  padding: 20px;
`;

const Button = styled.button`
  margin-top: 20px;
  padding: 15px;
  border: none;
  border-radius: 10px;
  font-size: 20px;
  color: white;
  background-color: darkblue;
  cursor: pointer;
`;

const AddressContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// ========== component: contact ==========
const Contact = () => {
  const inputData = [
    {
      id: Math.random().toString(),
      placeholder: "Your Name",
    },
    {
      id: Math.random().toString(),
      placeholder: "Your Email",
    },
    {
      id: Math.random().toString(),
      placeholder: "Subject",
    },
  ];
  return (
    <Container>
      <Wrapper>
        {/* ========== form ========== */}
        <FormContainer>
          <Title>
            Questions? <br /> Let's Get In Touch
          </Title>
          <Form>
            <LeftForm>
              {inputData.map((item) => (
                <Input key={item.id} placeholder={item.placeholder} />
              ))}
            </LeftForm>
            <RightForm>
              <TextArea placeholder="Your Message" />
              <Button>Send</Button>
            </RightForm>
          </Form>
        </FormContainer>
        {/* ========== address ========== */}
        <AddressContainer>
          <AddressItem />
        </AddressContainer>
      </Wrapper>
    </Container>
  );
};

export default Contact;
