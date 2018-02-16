import React from 'react';
import EnzymeToJson from 'enzyme-to-json';
import { mount } from 'enzyme';

import Modal from '../../src/index';

describe('<Modal /> snapshots', () => {
  const props = {
    children: <div>Im the children</div>,
    isOpen: true,
    onClose: jest.fn(),
  };

  describe('when it\'s open', () => {
    it('renders correctly', () => {
      const subject = mount(<Modal {...props}><div>Im the children</div></Modal>);
      expect(EnzymeToJson(subject)).toMatchSnapshot();
    });
  });

  describe('when it\'s closed', () => {
    it('renders just the base component', () => {
      const newProps = { ...props, isOpen: false };
      const subject = mount(<Modal {...newProps}><div>Im the children</div></Modal>);
      expect(EnzymeToJson(subject)).toMatchSnapshot();
    });
  });

  describe('when it has a setted max width', () => {
    it('renders correctly', () => {
      const newProps = { ...props, maxWidth: '1000px' };
      const subject = mount(<Modal {...newProps}><div>Im the children</div></Modal>);
      expect(EnzymeToJson(subject)).toMatchSnapshot();
    });
  });

  describe('when close button is disabled', () => {
    it('renders correctly', () => {
      const newProps = { ...props, showCloseButton: false };
      const subject = mount(<Modal {...newProps}><div>Im the children</div></Modal>);
      expect(EnzymeToJson(subject)).toMatchSnapshot();
    });
  });
});

describe('<Modal /> unit tests', () => {
  const props = {
    children: <div>Im the children</div>,
    isOpen: true,
    onClose: jest.fn(),
  };

  const subject = mount(<Modal {...props}>
    <div className="children" />
  </Modal>);

  it('renders the children', () => {
    expect(subject.contains(<div className="children" />)).toEqual(true);
  });

  // TODO: do more unit tests! check it contains close button or not when changing props
  // check executing functions of the component, etc.
});
