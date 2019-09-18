import React from 'react';
import ImageFooter from './ImageFooter.jsx';

const Image = window.styled.img`
  width: 526px;
  margin: 0 32px 0 32px;
`;

const SlideshowImage = ({ image, openReportImagePopup }) => {
  const ImageContainer = styled.div`
    margin: ${image.user_submit ? '0 0 14px 0' : '14px 0 14px 0'}
  `;

  return (
    <ImageContainer image={image}>
      <Image src={`https://s3-us-west-1.amazonaws.com/scale.me-images/images/food${(image.imageid).toString().padStart(3, '0')}.jpg`}></Image>
      <ImageFooter
        image={image}
        openReportImagePopup={openReportImagePopup}
      />
    </ImageContainer>
  );
};

export default SlideshowImage;