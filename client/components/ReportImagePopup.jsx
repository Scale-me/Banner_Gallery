import React from 'react';

const ReportPopup = window.styled.div`
  position: absolute;
  width: 25rem;
  right: 0;
  left: 0;
  top: 200px;
  margin: auto;
  border-color: rgba(0,0,0,.0784314);
  border-style: solid;
  border-width: .67px;
  border-radius: 3px;
  background-color: #fff;
  z-index: 1003;
  padding-bottom: 16px;
`;

const ReportHeader = window.styled.h4`
  font-family: Brandon-Text-Medium;
  font-size: 1.25rem;
  padding: 1rem;
  border-bottom-color: rgba(0,0,0,.0784314);
  border-bottom-style: solid;
  border-bottom-width: .67px;
  padding-bottom: 16px;
  margin: 0;
`;

const SharedButtonStyle = window.styled.button`
  font-family: Brandon-Text-Regular;
  display: block;
  font-size: 16px;
  font-weight: 400;
  width: 90%;
  margin: 4px auto;
  padding: .6rem 1.75rem;
  text-align: center;
  border-radius: 3px;
  cursor: pointer;
  border: 0;
`;

const ReportButton = window.styled(SharedButtonStyle)`
  background-color: #61bddb;
  border-color: #2b9abf;
  color: #fff;
  border-width: 0;
`;

const ReportCancel = window.styled(SharedButtonStyle)`
  background-color: #fff;
  border-color: #2b9abf;
  color: #2b9abf;
  border-width: .05rem;
`;

class ReportImagePopup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      popupIsOpen: false,
    };

    this.handleReportImagePopup = this.handleReportImagePopup.bind(this);
  }

  handleReportImagePopup() {
    this.props.closeReportImagePopup();
  }

  render() {
    return (
      <ReportPopup>
        <ReportHeader>Report a photo problem</ReportHeader>
        <ReportButton>Unrelated to restaurant</ReportButton>
        <ReportButton>Inappropriate content</ReportButton>
        <ReportButton>I don't like this photo</ReportButton>
        <ReportCancel
          onClick={this.handleReportImagePopup}
        >Cancel</ReportCancel>
      </ReportPopup>
    );
  }
}

export default ReportImagePopup;