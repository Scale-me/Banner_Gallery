import React from 'react';

const FooterText = window.styled.div`
  font-family: Brandon-Text-Regular;
  float: left;
  max-width: 90%;
  margin: 0 8px 0 0;
  height: 18px;
`;

const CircleIcon = window.styled.div`
  float: left;
`;

const DescriptionContainer = window.styled.div`
  margin-left: 3.5em;
  padding-top: .5em;
`;

const Description = window.styled.strong`
  font-family: Brandon-Text-Medium;
`;

const DineInfo = window.styled.div`
  padding-top: .3em;
`;

const ImageDescription = ({ date, description, userSubmit }) => {
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  let dateObj = new Date(date);
  let month = monthNames[dateObj.getMonth()];
  let fullDate = `${month} ${dateObj.getDate()}, ${dateObj.getFullYear()}`;

  return (
    <FooterText>
      {userSubmit ? (
        <div>
          <CircleIcon>
            <svg
              height='50'
              width='50'
            >
              <circle
                cx='25'
                cy='25'
                fill='#56D7D9'
                r='25'
              ></circle>
              <text
                dy='.3em'
                fill='white'
                fontFamily='Arial'
                fontSize='15px'
                textAnchor='middle'
                x='50%'
                y='50%'
              >OT</text>
            </svg>
          </CircleIcon>
          <DescriptionContainer>
            <div><Description>OpenTable Diner</Description></div>
            <DineInfo>Dined on {fullDate}</DineInfo>
          </DescriptionContainer>
        </div>
      ) : (
        <div>
          <Description>{`${description}. `}</Description>
          {fullDate}
        </div>
      )}
    </FooterText>
  );
};

export default ImageDescription;