import React, { useState } from "react";
// __________ components __________
import VideoModal from "./VideoModal";
import MiniCard from "./MiniCard";
// __________ images __________
import ServiceImage from "../img/service.png";
import SearchIcon from "../img/search.png";
import PlayIcon from "../img/play.png";
// __________ styles __________
import styled from "styled-components";

// ========== css: styled components ==========
const Container = styled.div`
  display: flex;
  height: 100%;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

// __________ left side __________
const Left = styled.div`
  position: relative;
  width: 50%;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Image = styled.img`
  position: absolute;
  left: 5rem;
  bottom: 0;
  height: 80%;
  display: ${(props) => props.hide && "none"};

  @media screen and (max-width: 1750px) {
    left: -5rem;
  }

  @media screen and (max-width: 1550px) {
    left: -10rem;
  }

  @media screen and (max-width: 1350px) {
    left: -18rem;
  }

  @media screen and (max-width: 1200px) {
    left: -18rem;
  }

  @media screen and (max-width: 1024px) {
    left: -20rem;
    height: 70%;
  }
`;

// __________ right side __________
const Right = styled.div`
  width: 50%;

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`;

const Wrapper = styled.div`
  height: 100%;
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 768px) {
    padding: 20px;
  }
`;

const Title = styled.h1`
  @media screen and (max-width: 320px) {
    min-width: 280px;
  }
`;

const Desc = styled.p`
  margin-top: 20px;
  font-size: 20px;
  color: #555;

  @media screen and (max-width: 480px) {
    font-size: 16px;
  }

  @media screen and (max-width: 320px) {
    min-width: 280px;
  }
`;

const CardContainer = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: space-around;
  align-items: baseline;

  @media screen and (max-width: 480px) {
    margin-top: 20px;
    flex-direction: column;
    align-items: center;
  }
`;

const Button = styled.button`
  width: 180px;
  padding: 15px;
  margin: 50px auto 0;
  display: flex;
  align-items: center;
  border: none;
  border-radius: 10px;
  font-size: 20px;
  color: white;
  background-color: #2274a5;
  cursor: pointer;

  @media screen and (max-width: 480px) {
    width: 150px;
    margin-top: 20px;
    padding: 8px 12px;
    font-size: 16px;
  }
`;

const Icon = styled.img`
  margin-right: 10px;
  width: 20px;
`;

// __________ modal: video __________
const Video = styled.video`
  height: 350px;
  margin: 0 auto;
  display: ${(props) => !props.open && "none"};
  @media screen and (max-width: 480px) {
    width: 100%;
    height: 100%;
  }
`;

// ========== component: service ==========
const Service = () => {
  const cardData = [
    {
      id: Math.random().toString(),
      icon: SearchIcon,
      text: "Lorem ipsum odor amet, consectetuer adipiscing elit.",
    },
    {
      id: Math.random().toString(),
      icon: SearchIcon,
      text: "Ac purus in massa egestas mollis varius.",
    },
    {
      id: Math.random().toString(),
      icon: SearchIcon,
      text: "Mollis tincidunt mattis hendrerit dolor eros enim.",
    },
  ];

  // __________ hooks __________
  const [openVideoModal, setOpenVideoModal] = useState(false);

  // __________ handlers __________
  const openVideoHandler = () => {
    setOpenVideoModal(true);
    document.body.style.overflow = "hidden";
  };

  const closeVideoHandler = () => {
    setOpenVideoModal(false);
    document.body.style.overflow = "visible";
  };

  let modalContent;
  if (openVideoModal) {
    modalContent = (
      <VideoModal onClose={closeVideoHandler}>
        <Video
          open
          autoPlay
          loop
          controls
          src="https://player.vimeo.com/external/449759244.sd.mp4?s=d5f3da46ddc17aa69a7de84f1e420610ebd2a391&profile_id=139&oauth2_token_id=57447761"
        />
      </VideoModal>
    );
  }
  return (
    <Container>
      {modalContent}
      <Left>
        <Image hide={openVideoModal} src={ServiceImage} />
      </Left>
      <Right>
        <Wrapper>
          <Title>Simple process to start</Title>
          <Desc>
            We provide digital experience services to startups and small
            businesses to looking for a partner of their digital media, design &
            development, lead generation and communications requirents. We work
            with you, not for you. Although we have a great resources
          </Desc>
          <CardContainer>
            {cardData.map((data) => (
              <MiniCard key={data.id} icon={data.icon} text={data.text} />
            ))}
          </CardContainer>
          <Button onClick={openVideoHandler}>
            <Icon src={PlayIcon}></Icon>
            How it works
          </Button>
        </Wrapper>
      </Right>
    </Container>
  );
};

export default Service;
