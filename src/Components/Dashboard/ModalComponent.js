import React, { useState } from "react";
import { Modal, Typography} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CallIcon from "@mui/icons-material/Call";
import styled from "styled-components";
import EmailIcon from "@mui/icons-material/Email";
import HomeIcon from "@mui/icons-material/Home";
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import BedIcon from "@mui/icons-material/Bed";
import BathtubIcon from "@mui/icons-material/Bathtub";
import InfoIcon from '@mui/icons-material/Info';
import Carousel from "react-material-ui-carousel";
import { Paper, IconButton } from "@mui/material";
const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const ModalContent = styled.div`
  display: flex;
  width: 800px;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
`;

const ModalLeft = styled.div`
  flex: 0 0 400px;
  margin-right: 20px;
`;

const ModalRight = styled.div`
  flex: 1;
`;

const ModalImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 8px;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 16px;
`;

const PhoneNumber = styled.span`
  margin-left: 8px;
`;

const CloseButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

function ModalComponent({ ad, onClose }) {
  const [isPhoneNumberVisible, setPhoneNumberVisible] = useState(false);

  const handleCallClick = () => {
    setPhoneNumberVisible(true);
  };

  return (
    <Modal open={true} onClose={onClose}>
      <ModalContainer>
        <ModalContent>
          <ModalLeft>
            {/* Use Carousel component to display multiple images */}
            <Carousel>
              {ad.images.map((image, i) => (
                <Paper key={i}>
                  <ModalImage src={image.url} alt={`Ad ${i + 1}`} />
                </Paper>
              ))}
            </Carousel>
          </ModalLeft>
          <ModalRight>
            <CloseButtonContainer>
              <IconButton
                color="primary"
                aria-label="Close"
                onClick={onClose}
              >
                <CloseIcon />
              </IconButton>
            </CloseButtonContainer>
            <ButtonContainer>
              <IconButton
                color="primary"
                aria-label="Call"
                onClick={handleCallClick}
              >
                <CallIcon />
              </IconButton>
              {isPhoneNumberVisible && <PhoneNumber>{ad.number}</PhoneNumber>}
            </ButtonContainer>
            <Typography variant="h6">
              <EmailIcon /> Email: {ad.email}
            </Typography>
            <Typography variant="body1">
              <HomeIcon /> Type: {ad.type}
            </Typography>
            <Typography variant="body1">
              <LocalOfferIcon /> Price: {ad.price}
            </Typography>
            <Typography variant="body1">
              <BedIcon /> Bedrooms: {ad.bedroom}
            </Typography>
            <Typography variant="body1">
              <BathtubIcon /> Bathrooms: {ad.bathroom}
            </Typography>
            <Typography variant="body1">
              <HomeIcon /> Area: {ad.area}
            </Typography>
            <Typography variant="body1">
              <HomeIcon /> City: {ad.city}
            </Typography>
            <Typography variant="body1">
              <InfoIcon /> Description: {ad.description}
            </Typography>
          </ModalRight>
        </ModalContent>
      </ModalContainer>
    </Modal>
  );
}

export default ModalComponent;
