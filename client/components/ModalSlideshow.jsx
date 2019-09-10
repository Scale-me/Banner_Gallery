import React from 'react';
import SlideshowImage from './SlideshowImage.jsx';

const Slideshow = window.styled.div`
  position: relative;
  width: 660px;
  display: flex;
  justify-content: center;
`;

const ScrollArrow = window.styled.div`
  color: #91949a;
  font-size: 1.2rem;
  position: absolute;
  top: 50%;
  cursor: pointer;
`;

const RightArrow = window.styled(ScrollArrow)`
  right: 0;
`;

const LeftArrow = window.styled(ScrollArrow)`
  left: 0;
`;

const ModalSlideshow = ({ image, openReportImagePopup, changeLeftModal, changeRightModal }) => {
  return (
    <Slideshow>
      <LeftArrow
        onClick={() => changeLeftModal()}
      >{'<'}</LeftArrow>
      <SlideshowImage
        image={image}
        openReportImagePopup={openReportImagePopup}
      />
      <RightArrow
        onClick={() => changeRightModal()}
      >{'>'}</RightArrow>
    </Slideshow>
  );
};

export default ModalSlideshow;