import React from 'react';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ImageModal from '../client/components/ImageModal.jsx';

const props = {
  handleCloseModal: jest.fn()
};

describe('ImageModal component', () => {
  test('renders without issue', () => {
    const wrapper = shallow(<ImageModal />);
    expect(wrapper.exists()).toBe(true);
  });

  test('expects handleCloseModal to be called', () => {
    const wrapper = shallow(<ImageModal closeModal={props.handleCloseModal}/>);
    const instance = wrapper.instance();
    instance.handleCloseModal();
    expect(props.handleCloseModal).toBeCalled();
  });
});