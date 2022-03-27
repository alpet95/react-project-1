import React, { Fragment } from "react";
import MapIcon from "../img/map.png";
import PhoneIcon from "../img/phone.png";
import SendIcon from "../img/send.png";
import styled from "styled-components";

// ========== css: styled components ==========
const AddressItemContainer = styled.div`
  margin-bottom: 50px;
  display: flex;
  align-items: center;

  @media screen and (max-width: 1024px) {
    margin-bottom: 20px;
  }

  @media screen and (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

const Icon = styled.img`
  width: 20px;
  margin-right: 20px;

  @media screen and (max-width: 768px) {
    width: 15px;
  }
`;

const Text = styled.span`
  font-size: 20px;
  margin-right: 15px;

  @media screen and (max-width: 1024px) {
    font-size: 16px;
  }

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

// ========== component: address item ==========
const AddressItem = () => {
  const addressItemData = [
    {
      id: Math.random().toString(),
      icon: MapIcon,
      text: {
        text_1: "55 Queens Drive, London, UK",
      },
    },
    {
      id: Math.random().toString(),
      icon: PhoneIcon,
      text: {
        text_1: "+1 631 1234 5678",
        text_2: "+1 326 1234 5678",
      },
    },
    {
      id: Math.random().toString(),
      icon: SendIcon,
      text: {
        text_1: "lorem@gmail.com",
        text_2: "ipsum@gmail.com",
      },
    },
  ];
  return (
    <Fragment>
      {addressItemData.map((item) => (
        <AddressItemContainer key={item.id}>
          <Icon src={item.icon}></Icon>
          <Text>{item.text.text_1}</Text>
          <Text>{item.text.text_2}</Text>
        </AddressItemContainer>
      ))}
    </Fragment>
  );
};

export default AddressItem;
