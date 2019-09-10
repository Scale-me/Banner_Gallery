import React from 'react';
import ReportImagePopup from './ReportImagePopup.jsx';
import ModalSlideshow from './ModalSlideshow.jsx';

const ModalContainer = window.styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,.9);
  z-index: 1001;
`;

const CloseModal = window.styled.button`
  position: absolute;
  padding: 25px;
  right: 0;
  top: 20px;
  background-color: transparent;
  border: 0;
  cursor: pointer;

  &::before {
    content: 'X';
    color: #6f737b;
    font-size: 1.2rem;
    line-height: 2;
    position: absolute;
    top: 16px;
    right: 16px;
    width: 2rem;
  }
`;

const ImageInfo = window.styled.div`
  width: 715px;
  margin: 35px auto 0 auto;
  z-index: 1002;
  display: flex;
  align-items: center;
`;

class ImageModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reportIsPopup: false,
    };

    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.openReportImagePopup = this.openReportImagePopup.bind(this);
    this.closeReportImagePopup = this.closeReportImagePopup.bind(this);

  }

  handleCloseModal() {
    this.props.closeModal();
  }

  openReportImagePopup() {
    this.setState({ reportIsPopup: true });
  }

  closeReportImagePopup() {
    this.setState({ reportIsPopup: false });
  }

  render() {
    return (
      <ModalContainer>
        <CloseModal
          onClick={this.handleCloseModal}
        ></CloseModal>
        <ImageInfo>
          {this.state.reportIsPopup &&
          <ReportImagePopup
            closeReportImagePopup={this.closeReportImagePopup}
          />}
          <ModalSlideshow
            image={this.props.image}
            openReportImagePopup={this.openReportImagePopup}
            changeLeftModal={this.props.changeLeftModal}
            changeRightModal={this.props.changeRightModal}
          />
        </ImageInfo>
      </ModalContainer>
    );
  }
}

export default ImageModal;