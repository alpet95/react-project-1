import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

// ========== css: styled components ==========
const BackdropContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 20;
`;

const ModalContainer = styled.div`
  position: fixed;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -40%);
  background-color: white;
  padding: 1rem;
  border-radius: 14px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  z-index: 30;
`;

// ========== portals ==========
const Backdrop = (props) => {
  return <BackdropContainer onClick={props.onClose}></BackdropContainer>;
};

const ModalOverlay = (props) => {
  return <ModalContainer>{props.children}</ModalContainer>;
};

const portalElement = document.getElementById("overlay");

// ========== component: video modal ==========
const VideoModal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default VideoModal;
