import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import Title from './index';

describe('<Title />', () => {
  it('Render without crashing', () => {
    shallow(<Title />);
  });

  it('Contain text', () => {
    const wrapper = mount(<Title>Hello</Title>);
    expect(wrapper.text()).to.equal('Hello');
  });
});
