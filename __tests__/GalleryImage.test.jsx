import React from 'react';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import GalleryImage from '../client/components/GalleryImage.jsx';

const imageData = {
  'id': 34,
  'url': 'https://llaminati-images.s3-us-west-1.amazonaws.com/14.jpg',
  'description': 'quidem repellat magni',
  'user_submit': 0,
  'date': '2019-04-15T07:00:00.000Z',
  'unrelated_flag': 0,
  'inappropriate_flag': 0,
  'dislike_flag': 0,
  'listing_id': 1,
  'image_id': 14
};

describe('GalleryImage component', () => {
  test('renders without issue', () => {
    const wrapper = shallow(<GalleryImage image={imageData}/>);
    expect(wrapper.exists()).toBe(true);
  });

  test('should update state', () => {
    const wrapper = shallow(<GalleryImage image={imageData}/>);
    const instance = wrapper.instance();
    instance.openModal();
    expect(wrapper.state('modalIsOpen')).toBe(true);
    instance.closeModal();
    expect(wrapper.state('modalIsOpen')).toBe(false);
  });
});