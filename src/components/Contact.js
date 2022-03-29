import React from "react";
import AddressItem from "./AddressItem";
import styled from "styled-components";

// ========== css: styled components ==========
const Container = styled.div`
  height: 90%;
  background-color: lightcyan;
`;

const Wrapper = styled.div`
  height: 100%;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const FormContainer = styled.div`
  width: 50%;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Title = styled.h1`
  margin-top: 0;
  margin: 50px;
  text-align: center;

  @media screen and (max-width: 1024px) {
    margin: 20px;
  }

  @media screen and (max-width: 768px) {
    margin: 20px;
  }
`;

const Form = styled.form`
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 1024px) {
    height: 200px;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftForm = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 20px;

  @media screen and (max-width: 1024px) {
    margin-right: 10px;
  }

  @media screen and (max-width: 768px) {
    height: 50%;
    margin-right: 0;
  }
`;

const RightForm = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    height: 50%;
  }
`;

const Input = styled.input`
  width: 200px;
  padding: 20px;

  @media screen and (max-width: 1024px) {
    width: 180px;
    padding: 10px;
  }

  @media screen and (max-width: 768px) {
    padding: 5px;
  }
`;

const TextArea = styled.textarea`
  width: 200px;
  height: 60%;
  padding: 20px;
  resize: none;

  @media screen and (max-width: 1024px) {
    width: 140px;
    padding: 10px;
  }

  @media screen and (max-width: 768px) {
    padding: 5px;
    margin-top: 20px;
  }
`;

const Button = styled.button`
  margin-top: 20px;
  padding: 15px;
  border: none;
  border-radius: 10px;
  font-size: 20px;
  color: white;
  background-color: #2274a5;
  cursor: pointer;

  @media screen and (max-width: 1024px) {
    padding: 10px;
    font-size: 16px;
  }

  @media screen and (max-width: 768px) {
    padding: 5px;
    font-size: 14px;
  }
`;

const AddressContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 1024px) {
    margin-top: 20px;
    margin-left: 20px;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    margin-top: 20px;
  }
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
