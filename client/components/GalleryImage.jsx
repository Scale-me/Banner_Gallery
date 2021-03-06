import React from 'react';
import ImageModal from './ImageModal.jsx';

const SmallImage = window.styled.img`
  width: 142px;
  margin: 0 0 0 .25rem;
`;

const LargeImage = window.styled.img`
  width: 288px;
  margin: 0 0 0 .25rem;
`;

class GalleryImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
  }

  handleOpenModal() {
    this.props.openModal(this.props.image);
  }

  render() {
    return (
      <div>
        {this.props.imageSize === 'small' ?
          <SmallImage
            src={`https://s3-us-west-1.amazonaws.com/scale.me-images/images/food${(this.props.image.imageid).toString().padStart(3, '0')}.jpg`}
            onClick={() => this.handleOpenModal()}
          /> :
          <LargeImage
            src={`https://s3-us-west-1.amazonaws.com/scale.me-images/images/food${(this.props.image.imageid).toString().padStart(3, '0')}.jpg`}
            onClick={() => this.handleOpenModal()}
          />
        }
      </div>
    );
  }
}

export default GalleryImage;