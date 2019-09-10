import React from 'react';
import ImageDescription from './ImageDescription.jsx';

const ImageFooterContainer = window.styled.div`
  position: relative;
  margin: 4px 0 0;
  color: #fff;
  display: flex;
  justify-content: space-between;
`;

const ReportIcon = window.styled.svg`
  width: 24px;
  height: 24px;
`;

const ImageFooter = ({ image, openReportImagePopup }) => {
  return (
    <ImageFooterContainer>
      <ImageDescription
        description={image.description}
        date={image.date}
        userSubmit={image.user_submit}
      />
      <ReportIcon
        xmlns='html://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        onClick={() => openReportImagePopup()}
      >
        <path
          id='_24.Tiny_flag_icon'
          fill='#fff'
          date-name='24. Tiny Flag Icon'
          d='M485,475H469v12h-2V463h18l-3,6Zm-16-10v8h13l-2-4,2-4H469Z'
          transform='translate(-464 -463)'
        ></path>
      </ReportIcon>
    </ImageFooterContainer>
  );
};

export default ImageFooter;