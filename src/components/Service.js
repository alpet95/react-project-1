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
`;

// __________ left side __________
const Left = styled.div`
  position: relative;
  width: 50%;
`;

const Image = styled.img`
  height: 100%;
  margin-left: 10px;
  display: ${(props) => props.hide && "none"};
`;

// __________ right side __________
const Right = styled.div`
  width: 50%;
`;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1``;

const Desc = styled.p`
  margin-top: 20px;
  font-size: 20px;
  color: #555;
`;

const CardContainer = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: space-around; // alpet
`;

const Button = styled.button`
  width: 180px;
  padding: 15px;
  margin-top: 50px;
  display: flex;
  align-items: center;
  border: none;
  border-radius: 10px;
  font-size: 20px;
  background-color: darkblue;
  color: white;
  cursor: pointer;
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
